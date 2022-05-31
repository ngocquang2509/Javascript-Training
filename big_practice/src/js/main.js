import TaskModel from "./models/task";
import TaskController from "./controllers/task";
import TaskView from "./views/task";

const model = new TaskModel(),
  view = new TaskView();

const app = new TaskController(model, view);
