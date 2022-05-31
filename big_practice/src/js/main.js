import TaskModel from "./models/task.js";
import TaskController from "./controllers/task.js";
import TaskView from "./views/task.js";

const model = new TaskModel(),
  view = new TaskView();

const app = new TaskController(model, view);
