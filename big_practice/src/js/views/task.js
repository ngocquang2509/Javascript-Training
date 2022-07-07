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
    this.check = document.getElementById("task-complete");
    this.addModal = document.getElementById("add-modal");
    this.editModal = document.getElementById("edit-modal");
    this.ENTER_KEY = 13;
  }

  resetInput = () => {
    this.taskName.value = "";
    this.taskDescripion.value = "";
    this.storeId.value = "";
  };

  displayTasks = (tasks) => {
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
        let item = document.createElement("li");
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

        const completeBtn = document.createElement("div");
        completeBtn.className = "task-complete";
        completeBtn.textContent = task.complete ? "Complete" : "Pending";

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
  };

  openAddModal = () => {
    this.addModal.style.visibility = "visible";
  };

  bindOpenAddModal = () => {
    const openModal = document.getElementById("add-new-task");
    openModal.addEventListener("click", () => {
      this.openAddModal();
    });
  };

  closeAddModal = () => {
    this.addModal.style.visibility = "hidden";
    this.resetInput();
  };

  bindCloseAddModal = () => {
    const closeModal = document.getElementById("cancel");
    closeModal.addEventListener("click", () => {
      this.closeAddModal();
    });
  };

  bindAddTask = (handleAddTask) => {
    this.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.taskName.value == "") {
        alert("Please enter task name");
        return false;
      }
      handleAddTask(
        this.taskName.value.trim(),
        this.taskDescripion.value.trim()
      );
      this.closeAddModal();
      swal("Task create successful !");
      return true;
    });
  };

  openEditModal = (task) => {
    if (task) {
      this.editName.value = task.name;
      this.editDes.value = task.description;
      this.check.checked = task.complete;
    }
    this.editModal.style.visibility = "visible";
  };

  closeEditModal = () => {
    this.editModal.style.visibility = "hidden";
  };

  bindCloseEditModal = () => {
    const closeModal = document.getElementById("edit-cancel");
    closeModal.addEventListener("click", () => {
      this.closeEditModal();
    });
  };

  getTaskById = (handleGetTask) => {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "editBtn") {
        const id = e.target.parentNode.parentNode.id;
        //console.log("id", id);
        this.storeId.value = id;
        let item = handleGetTask(id);
        this.openEditModal(item);
      }
    });
  };

  bindEditTask = (handleEditTask) => {
    this.editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const id = this.storeId.value;
      const updateName = document.getElementById("edit-name");
      const updateDes = document.getElementById("edit-description");
      const updateComplete = this.check.checked;
      handleEditTask(id, updateName.value, updateDes.value, updateComplete);
      this.closeEditModal();
    });
  };

  bindDeleteTask = (handleDeleteTask) => {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.className === "delBtn") {
        const id = e.target.parentNode.parentNode.id;
        //console.log(id);
        handleDeleteTask(id);
      }
    });
  };

  bindSearchTask = (handleSearchTask) => {
    this.search.addEventListener("keyup", (e) => {
      if (e.which === this.ENTER_KEY) {
        handleSearchTask(this.search.value.trim());
      }
    });
  };

  bindTaskListChanged = (callback) => {
    this.onTaskListchanged = callback;
  };
}
