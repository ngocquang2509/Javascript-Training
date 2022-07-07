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

  //Display the lis of task
  init = async () => {
    const tasks = await this.model.getTask();
    this.onTaskListChanged(this.model.tasks);
  };

  onTaskListChanged = (tasks) => {
    this.view.displayTasks(tasks);
  };

  /**
   * Use name and description from view to call model
   * @param {string} name
   * @param {string} description
   */
  handleAddTask = async (name, description) => {
    const task = await this.model.addTask(name, description);
    this.onTaskListChanged(this.model.tasks);
  };

  /**
   * User id to call model to get task
   * @param {string} id
   * @returns
   */
  getTaskById = (id) => {
    const task = this.model.getTaskById(id);
    return task;
  };

  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {string} description
   * @param {string} complete
   */
  handleEditTask = async (id, name, description, complete) => {
    const tasks = await this.model.updateTask({
      id,
      name,
      description,
      complete,
    });
    this.onTaskListChanged(this.model.tasks);
  };

  /**
   * Use id to call model to delete task
   * @param {string} id
   */
  handleDeleteTask = async (id) => {
    const task = await this.model.deleteTask(id);
    this.onTaskListChanged(this.model.tasks);
  };

  handleSearchTask = (name) => {
    const tasks = this.model.searchTask(name);
    this.onTaskListChanged(tasks);
  };
}
