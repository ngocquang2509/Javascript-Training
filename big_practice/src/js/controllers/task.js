export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.view.bindAddTask(this.handleAddTask);
    // this.view.bindUpdateTask(this.handleUpdateTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.onTaskListChanged(this.model.showTask);
  }

  init = async () => {
    const tasks = await this.model.showTask();
    this.view.displayTasks(tasks);
  };

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  };

  handleAddTask = (name, description) => {
    this.model.addTask(name, description);
  };

  // handleUpdateTask = async (id, taskText) => {
  //   const tasks = await this.model.updateTodo(id, taskText);
  //   this.view.displayTasks(tasks);
  // };

  handleDeleteTask = (id) => {
    this.model.deleteTask(id);
  };
}
