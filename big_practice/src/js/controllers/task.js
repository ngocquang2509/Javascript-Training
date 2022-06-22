export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.view.bindAddTask(this.handleAddTask);
    this.view.editTaskModal(this.getTaskById);
    //this.view.bindUpdateTask(this.handleUpdateTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
  }

  init = async () => {
    const tasks = await this.model.getTask();
    this.onTaskListChanged(this.model.tasks);
    return tasks;
  };

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  };

  handleAddTask = async (name, description) => {
    const task = await this.model.addTask(name, description);
    this.onTaskListChanged(this.model.tasks);
  };

  getTaskById = (id) => {
    const task = this.model.getTaskById(id);
    console.log("taskCtrl", task);
    return task;
    //return this.model.getTaskById(id);
  };

  // handleUpdateTask = async (id, name, description) => {
  //   const tasks = await this.model.updateTask(id, name, description);
  //   this.view.displayTasks(tasks);
  // };

  handleDeleteTask = async (id) => {
    const tasks = await this.model.deleteTask(id);
    this.view.displayTasks(tasks);
  };
}
