import Model from "./models/task.js";
import Controller from "./controllers/task.js";
import View from "./views/task.js";

// const model = new Model(),
//   view = new View();

// const app = new Controller(model, view);

const controller = new Controller(new Model(), new View());

controller.init();
