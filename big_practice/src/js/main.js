import TaskModel from "./model/task";
import TaskController from "./controller/task";
import TaskView from "./view/task";

const model = new TaskModel(),
  view = new TaskView();

const app = new TaskController(model, view);
