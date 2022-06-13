export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.view.bindAddTask(this.handleAddTask);
    // this.view.bindUpdateTask(this.handleUpdateTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
  }

  init = async () => {
    const tasks = await this.model.showTask();
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

  // handleUpdateTask = async (id, taskText) => {
  //   const tasks = await this.model.updateTodo(id, taskText);
  //   this.view.displayTasks(tasks);
  // };

  // handleDeleteTask = (id) => {
  //   this.model.deleteTask(id);
  // };

  handleDeleteTask = async (id) => {
    const tasks = await this.model.deleteTask(id);
    this.view.displayTasks(tasks);
  };
}
