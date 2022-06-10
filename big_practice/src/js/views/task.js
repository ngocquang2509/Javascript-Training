import swal from "sweetalert";

export default class View {
  constructor() {
    this.taskName = document.getElementById("add-name");
    this.taskDescripion = document.getElementById("add-description");
    this.taskList = document.getElementById("tasklist");
    this.addBtn = document.getElementById("submit");
  }

  displayTasks(tasks) {
    //console.log("display tasks");
    while (this.taskList.firstChild) {
      this.taskList.removeChild(this.taskList.firstChild);
    }
    if (tasks.length === 0) {
      const message = document.createElement("p");
      message.className = "message";
      message.textContent = "Nothing to do! Add new task";
      this.taskList.append(message);
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
        this.taskList.append(item);
      });
    }
  }

  bindAddTask(handleAddTask) {
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.taskName.value == "") {
        swal("Please enter task name");
        return false;
      }
      // if (this.taskDescripion == "") {
      //   swal("Please enter task description");
      //   return false;
      // }
      handleAddTask(this.taskName.value, this.taskDescripion.value);
      swal("Task create successful !");
      return true;
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
    this.taskList.addEventListener("click", (e) => {
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
