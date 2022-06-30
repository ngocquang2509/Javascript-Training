import swal from "sweetalert";

export default class View {
  constructor() {
    this.taskName = document.getElementById("add-name");
    this.taskDescripion = document.getElementById("add-description");
    this.editName = document.getElementById("edit-name");
    this.editDes = document.getElementById("edit-description");
    this.taskList = document.getElementById("tasklist");
    this.addBtn = document.getElementById("submit");
    this.editBtn = document.getElementById("edit-submit");
    this.storeId = document.getElementById("store");
    this.search = document.getElementById("search-input");
    this.ENTER_KEY = 13;
  }

  resetInput() {
    this.taskName.value = "";
    this.taskDescripion.value = "";
    this.storeId.value = "";
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
      this.resetInput();
    });
  }

  closeAddModal() {
    const addModal = document.getElementById("popup");
    addModal.style.visibility = "hidden";
    this.resetInput();
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
    let close = document.getElementById("cancel");
    close.addEventListener("click", () => {
      this.closeAddModal();
    });
  }

  closeEditModal() {
    let close = document.getElementById("edit-modal");
    let cancel = document.getElementById("edit-cancel");
    cancel.addEventListener("click", (e) => {
      close.style.visibility = "hidden";
    });
  }

  openEditModal(task) {
    if (task) {
      this.editName.value = task.name;
      this.editDes.value = task.description;
      //console.log("taskTest", task);
    }
    let open = document.getElementById("edit-modal");
    open.style.visibility = "visible";
  }

  getTaskById(handleGetTask) {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "editBtn") {
        const id = e.target.parentNode.parentNode.id;
        //console.log("id", id);
        this.storeId.value = id;
        console.log("storeId", this.storeId);
        let item = handleGetTask(id);
        this.openEditModal(item);
      }
      this.closeEditModal();
    });
  }

  bindEditTask(handleEditTask) {
    this.editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = this.storeId.value;
      const updateName = document.getElementById("edit-name");
      const updateDes = document.getElementById("edit-description");
      handleEditTask(id, updateName.value, updateDes.value);
    });
  }

  bindDeleteTask(handleDeleteTask) {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "delBtn") {
        const id = e.target.parentNode.parentNode.id;
        //console.log(id);
        handleDeleteTask(id);
      }
    });
  }

  bindSearchTask(handleSearchTask) {
    this.search.addEventListener("keyup", (e) => {
      if (e.which === this.ENTER_KEY) {
        handleSearchTask(this.search.value.trim());
      }
    });
  }

  bindTaskListChanged(callback) {
    this.onTaskListchanged = callback;
  }
}
