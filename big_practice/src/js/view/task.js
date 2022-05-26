export default class TaskView {
  constructor() {
    this.app = this.getElement(".root");
    this.form = this.createElement("form");
    this.input = this.createElement("input");
    this.input.type = "text";
    this.input.placeholder = "Task Name";
    this.input.name = "task";
    this.createButton = this.createElement("button");
    this.createButton.textContent = "Create";
    this.list = this.createElement("ul", "list");
    this.app.append(this.form);
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
}
