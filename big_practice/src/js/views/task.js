import { create } from "json-server";
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

        // const moreBtn = document.createElement("div");
        // moreBtn.className = "moreBtn";

        // const dropdown = document.createElement("div");
        // dropdown.className = "dropdown-content";
        // dropdown.setAttribute("id", "dropdown");

        const editBtn = document.createElement("button");
        editBtn.className = "editBtn";
        editBtn.textContent = "Edit";

        const delBtn = document.createElement("button");
        delBtn.className = "delBtn";
        delBtn.textContent = "Delete";

        // dropdown.append(editBtn, delBtn);

        itemBody.append(name, des, createAt);
        action.append(completeBtn, editBtn, delBtn);
        item.append(itemBody, action);
        this.taskList.appendChild(item);
      });
    }
  }

  // showDropDown() {
  //   var drop = this.moreBtn;
  //   drop.classList.toogle("show");
  // }

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
      handleAddTask(this.taskName.value, this.taskDescripion.value);
      this.closeAddModal();
      this.resetInput();
      swal("Task create successful !");
      return true;
    });
  }

  /*openEditModal() {
    const editModal = document.getElementById("edit");
    editModal.style.visibility = "hidden";
    editModal.style.opacity = "0";
  }*/

  /*closeEditModal() {
    const editModal = document.getElementById("popup");
    editModal.style.visibility = "hidden";
    editModal.style.opacity = "0";
  }*/

  editModal(task) {
    let editTask = document.getElementById("edit");
    let editForm = document.createElement("form");
    editForm.className = "edit-form";

    let editHeader = document.createElement("div");
    editHeader.className = "edit-header";
    editHeader.textContent = "Edit Task";

    let box = document.createElement("div");
    box.className = "box";

    let taskName = document.createElement("label");
    taskName.textContent = "Name";

    let taskDescripion = document.createElement("label");
    taskDescripion.textContent = "Description";

    let taskNameInput = document.createElement("input");
    taskNameInput.className = "input";
    taskNameInput.placeholder = "Task Name";

    let taskDesInput = document.createElement("input");
    taskDesInput.className = "input";
    taskDesInput.placeholder = "Task Description";

    let actions = document.createElement("div");
    actions.className = "button";

    let submitBtn = document.createElement("button");
    submitBtn.className = "btn create";
    submitBtn.type = "submit";

    let cancelBtn = document.createElement("button");
    cancelBtn.className = "btn cancel";
    cancelBtn.type = "button";
  }

  bindUpdateTask(handleUpdateTask) {
    this.taskList.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.currentTarget.className === "editBtn") {
        const id = e.currentTarget.firstChild.id;
        //this.openEditModal();
      }
      // if (e.target.className === "editBtn") {
      //   const id = e.currentTarget.firstChild.id;
      //   handleUpdateTask(id, this.taskName.value, this.taskDescripion.value);
      // }
    });
  }

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
