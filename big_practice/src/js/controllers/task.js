export default class TaskController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.view.bindAddTask(this.handleAddTask);
    // this.taskView.bindUpdateTodo(this.handleUpdateTask);
  }

  onTaskListChanged = (tasks) => {
    this.view.display(tasks);
  };

  handleAddTask = (name, description) => {
    this.model.addTask(name, description);
  };

  handleUpdateTask = async (id, taskText) => {
    const tasks = await this.model.updateTodo(id, taskText);
    this.view.displayTasks(tasks);
  };
}
