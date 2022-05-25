import TaskModel from "./model/task_model";
import TaskController from "./controller/task_controller";
import TaskView from "./view/task_view";

const model = new TaskModel(),
  view = new TaskView();

const app = new TaskController(model, view);

var modal = document.getElementsByClassName("popup__content");
var btn = document.getElementsByClassName("btn add");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
