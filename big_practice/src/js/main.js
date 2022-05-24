import TaskController from "./controller/task_controller";
import TaskModel from "./model/task_model";
import TaskView from "./view/task_view";

const model = new TaskModel(),
  view = new TaskView();

const app = new TaskController(model, view);
