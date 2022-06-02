export default class TaskView {
  constructor() {
    this.inputName = document.getElementById("add-name");
    this.inputDescripion = document.getElementById("add-description");
    this.tasklist = document.getElementById("tasklist");
    this.addBtn = document.getElementById("submit");
  }

  display(allTasks) {
    allTasks().then((task) => {
      if (task.length !== 0) {
        task.forEach((task) => {
          const item = document.createElement("div");
          item.id = task.id;
          item.className = "content__task";

          const itemBody = document.createElement("div");
          itemBody.className = "content__details";

          const name = document.createElement("h2");
          name.className = "content__task-title";
          name.textContent = task.name;

          const des = document.createElement("div");
          des.className = "content__task-description";
          des.textContent = task.description;

          const completeBtn = document.createElement("button");
          completeBtn.className = "btn complete";
          completeBtn.textContent = "Complete";

          itemBody.append(name, des);
          item.append(itemBody, completeBtn);
          this.tasklist.append(item);
        });
      }
    });
  }

  bindAddTask(handleAddTask) {
    this.addBtn.addEventListener("click", (e) => {
      handleAddTask(this.inputName.value, this.inputDescripion.value);
    });
  }

  bindUpdateTask(handler) {
    this.taskList.addEventListener("focusout", (e) => {
      if (this._temporaryTaskText) {
        const id = e.target.parentElement.id;

        handler(id, this._temporaryTaskText);
        this._temporaryTaskText = "";
      }
    });
  }
}
