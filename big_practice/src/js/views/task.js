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
        // console.log("task", task);
        const item = document.createElement("li");
        item.id = task.id;
        item.className = "content__task";

        const itemBody = document.createElement("div");
        itemBody.className = "task-details";

        const name = document.createElement("h2");
        name.className = "task-name";
        name.textContent = task.name;

        const des = document.createElement("div");
        des.className = "task-description";
        des.textContent = task.description;

        const createAt = document.createElement("div");
        createAt.className = "task-createAt";

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
        this.taskList.appendChild(item);
      });
    }
  }

  openAddModal() {
    const addModal = document.getElementById("popup");
    const openModal = document.getElementById("add-new-task");
    openModal.addEventListener("click", () => {
      addModal.style.visibility = "visible";
      addModal.style.opacity = "1";
      this.resetInput();
    });
  }

  closeAddModal() {
    const addModal = document.getElementById("popup");
    const closeModal = document.getElementById("cancel");
    closeModal.addEventListener("click", () => {
      addModal.style.visibility = "hidden";
      addModal.style.opacity = "0";
      this.resetInput();
    });
  }

  bindAddTask(handleAddTask) {
    this.openAddModal();
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.taskName.value == "") {
        alert("Please enter task name");
        //swal("Please enter task name");
        return false;
      }
      handleAddTask(this.taskName.value, this.taskDescripion.value);
      this.closeAddModal();
      swal("Task create successful !");
      return true;
    });
    this.closeAddModal();
  }

  closeEditModal() {
    let close = document.getElementById("edit-modal");
    let cancel = document.getElementById("edit-cancel");
    cancel.addEventListener("click", (e) => {
      close.style.visibility = "hidden";
      close.style.opacity = "0";
    });
  }

  openEditModal(task) {
    // if (task) {
    //   this.taskName.value = task.name;
    //   this.taskDescripion.value = task.description;
    // }
    let open = document.getElementById("edit-modal");
    open.style.visibility = "visible";
    open.style.opacity = "1";
  }

  editTaskModal(handleGetTask) {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "editBtn") {
        const id = e.target.parentNode.parentNode.id;
        console.log("id", id);
        let task = handleGetTask(id);
        this.openEditModal(task);
      }
      this.closeEditModal();
    });
  }

  bindDeleteTask(handleDeleteTask) {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "delBtn") {
        const id = e.target.parentNode.parentNode.id;
        console.log(id);
        handleDeleteTask(id);
      }
    });
  }

  bindTaskListChanged(callback) {
    this.onTaskListchanged = callback;
  }
}
