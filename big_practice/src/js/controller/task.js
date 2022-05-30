export default class TaskController {
  constructor(taskModel, taskView) {
    this.taskModel = taskModel;
    this.taskView = taskView;

    this.taskView.bindAddTask(this.handleAddTask);
    this.taskView.bindUpdateTodo(this.handleUpdateTask);
  }

  init = async () => {
    const tasks = await this.model.getTask();
    console.log("tasks", tasks);
    this.view.displayTodos(tasks);
  };

  handleAddTask = async (taskText) => {
    const tasks = await this.model.addTask(taskText);
    this.view.displayTasks(tasks);
  };

  handleUpdateTask = async (id, taskText) => {
    const tasks = await this.model.updateTodo(id, taskText);
    this.view.displayTasks(tasks);
  };
}
