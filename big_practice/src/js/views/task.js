import swal from "sweetalert";

export default class View {
  constructor() {
    this.taskName = document.getElementById("add-name");
    this.taskDescripion = document.getElementById("add-description");
    this.taskList = document.getElementById("tasklist");
    this.addBtn = document.getElementById("submit");
  }

  resetInput() {
    this.taskName.value = "";
    this.taskDescripion.value = "";
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

        const createAt = document.createElement("div");
        createAt.className = "task-createAt";
        createAt.textContent = task.createAt;

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

        itemBody.append(name, des, createAt);
        action.append(completeBtn, editBtn, delBtn);
        item.append(itemBody, action);
        this.taskList.append(item);
      });
    }
  }

  openAddModal() {
    const addModal = document.getElementById("popup");
    addModal.style.visibility = "visible";
    addModal.style.opacity = "1";
  }

  closeAddModal() {
    const addModal = document.getElementById("popup");
    addModal.style.visibility = "hidden";
    addModal.style.opacity = "0";
  }

  bindAddTask(handleAddTask) {
    const openModal = document.getElementById("add-new-task");
    openModal.addEventListener("click", () => {
      this.openAddModal();
    });
    const closeModal = document.getElementById("cancel");
    closeModal.addEventListener("click", () => {
      this.closeAddModal();
      this.resetInput();
    });
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.taskName.value == "") {
        alert("Please enter task name");
        //swal("Please enter task name");
        return false;
      }
      if (this.taskDescripion == "") {
        alert("Please enter task name");
        //swal("Please enter task description");
        return false;
      }
      handleAddTask(this.taskName.value, this.taskDescripion.value);
      this.closeAddModal();
      this.resetInput();
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
        const id = e.currentTarget.firstChild.id;
        handleDeleteTask(id);
      }
    });
  }

  bindTaskListChanged(callback) {
    this.onTaskListchanged = callback;
  }
}
