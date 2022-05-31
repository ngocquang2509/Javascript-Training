export default class TaskView {
  constructor() {
    this.inputName = document.getElementById("add-name");
    this.inputDescripion = document.getElementById("add-description");
    this.addBtn = document.getElementById("submit");
  }

  createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);

    return element;
  }

  display(allTasks) {
    allTasks().then((task) => {
      if (task.length !== 0) {
        task.forEach((task) => {});
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
