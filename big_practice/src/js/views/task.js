export default class View {
  constructor() {
    this.inputName = document.getElementById("add-name");
    this.inputDescripion = document.getElementById("add-description");
    this.tasklist = document.getElementById("tasklist");
    this.addBtn = document.getElementById("submit");
  }

  displayTasks(tasks) {
    while (this.tasklist.firstChild) {
      this.tasklist.removeChild(this.tasklist.firstChild);
    }
    if (tasks.length === 0) {
      const message = document.createElement("p");
      message.className = "message";
      message.textContent = "Nothing to do! Add new task";
      this.tasklist.append(message);
    } else {
      tasks.forEach((task) => {
        console.log("task", task);
        const item = document.createElement("li");
        item.id = task.id;
        item.className = "content__task";

        const itemBody = document.createElement("div");
        itemBody.className = "task-details";

        const name = document.createElement("h2");
        name.className = "task-title";
        name.textContent = task.name;

        const des = document.createElement("div");
        des.className = "task-description";
        des.textContent = task.description;

        const action = document.createElement("div");
        action.className = "task-btn";

        const completeBtn = document.createElement("button");
        completeBtn.className = "btn complete";
        completeBtn.textContent = "Complete";

        const editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "Edit";

        const delBtn = document.createElement("button");
        delBtn.className = "delBtn";
        delBtn.textContent = "Delete";

        itemBody.append(name, des);
        action.append(completeBtn, editBtn, delBtn);
        item.append(itemBody, action);
        this.tasklist.append(item);
      });
    }
  }

  bindAddTask(handleAddTask) {
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      handleAddTask(this.inputName.value, this.inputDescripion.value);
    });
  }

  // bindUpdateTask(handler) {
  //   this.taskList.addEventListener("click", (e) => {
  //     if (this._temporaryTaskText) {
  //       const id = e.target.parentElement.id;

  //       handler(id, this._temporaryTaskText);
  //       this._temporaryTaskText = "";
  //     }
  //   });
  // }

  bindDeleteTask(handleDeleteTask) {
    this.tasklist.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "delBtn") {
        const id = e.target.parentElement.id;
        handleDeleteTask(id);
      }
    });
  }

  bindTaskListChanged(callback) {
    this.onTaskListchanged = callback;
  }
}
