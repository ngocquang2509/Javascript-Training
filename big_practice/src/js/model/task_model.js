import { v4 as uuidv4 } from "uuid";

export default class TaskModel {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask = (taskName, taskDes) => {
    const task = {
      id: uuidv4,
      name: taskName,
      description: taskDes,
      isCompleted: false,
    };

    this.list.push(task);
  };
}
