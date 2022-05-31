export default class TaskController {
  constructor(taskModel, taskView) {
    this.taskModel = taskModel;
    this.taskView = taskView;

    this.taskView.bindAddTask(this.handleAddTask);
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
