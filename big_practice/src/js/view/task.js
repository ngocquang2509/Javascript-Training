export default class TaskView {
  constructor() {
    // this.app = this.getElement(".root");
    // this.form = this.createElement("form");
    // this.input = this.createElement("input");
    // this.input.type = "text";
    // this.input.placeholder = "Task Name";
    // this.input.name = "task";
    // this.createButton = this.createElement("button");
    // this.createButton.textContent = "Create";
    // this.list = this.createElement("ul", "list");
    // this.app.append(this.form);

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

  // var modal = document.getElementsByClassName("popup__content");
  // var btn = document.getElementsByClassName("btn add");
  // var span = document.getElementsByClassName("close")[0];

  // btn.onclick = function () {
  //   modal.style.display = "block";
  // };

  // span.onclick = function () {
  //   modal.style.display = "none";
  // };

  // window.onclick = function (event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // };
}
