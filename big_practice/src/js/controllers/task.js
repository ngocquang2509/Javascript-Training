export default class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTask(this.handleAddTask);
    this.onTaskListChanged(this.model.showTask);
  }

  onTaskListChanged = (tasks) => {
    this.view.display(tasks);
  };

  handleAddTask = (name, description, date) => {
    this.model.addTask(name, description, date);
  };

  handleUpdateTask = async (id, taskText) => {
    const tasks = await this.model.updateTodo(id, taskText);
    this.view.displayTasks(tasks);
  };
}
