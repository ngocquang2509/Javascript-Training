export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindTaskListChanged(this.onTaskListChanged);
    this.view.bindOpenAddModal();
    this.view.bindCloseAddModal();
    this.view.bindCloseEditModal();
    this.view.bindAddTask(this.handleAddTask);
    this.view.getTaskById(this.getTaskById);
    this.view.bindEditTask(this.handleEditTask);
    this.view.bindDeleteTask(this.handleDeleteTask);
    this.view.bindSearchTask(this.handleSearchTask);
  }

  init = async () => {
    const tasks = await this.model.getTask();
    this.onTaskListChanged(this.model.tasks);
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
    return task;
  };

  handleEditTask = async (id, name, description, complete) => {
    const tasks = await this.model.updateTask({
      id,
      name,
      description,
      complete,
    });
    this.onTaskListChanged(this.model.tasks);
  };

  handleDeleteTask = async (id) => {
    const task = await this.model.deleteTask(id);
    this.view.displayTasks(tasks);
  };

  handleSearchTask = (name) => {
    const tasks = this.model.searchTask(name);
    this.onTaskListChanged(tasks);
  };
}
