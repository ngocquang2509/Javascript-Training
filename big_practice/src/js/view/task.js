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

    this._temporaryTaskText = "";
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

  display(tasks) {
    if (tasks.length !== 0) {
      const wrapper = document.getElementsByClassName("task-list");
      wrapper[0].innerHTML = "";
      console.log("wrapper", wrapper);

      tasks.forEach((task) => {
        const li = this.createElement("li");
        li.id = task.id;

        const checkbox = this.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.complete;
        checkbox.id = li.id;

        if (task.complete) {
          const strike = this.createElement("s");
          strike.textContent = task.text;
          span.append(strike);
        } else {
          span.textContent = task.text;
        }

        // Append nodes
        this.todoList.append(li);
      });
    }
  }

  bindAddTask(handleAddTask) {
    this.input.addEventListener("keyup", (e) => {
      if (e.which === this.ENTER_KEY) {
        if (this._taskText) {
          handleAddTask(this._taskText);
          this._resetInput();
        }
      }
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
