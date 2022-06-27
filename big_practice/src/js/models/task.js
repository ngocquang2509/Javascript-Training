import { v4 as uuidv4 } from "uuid";
import fetch from "../helpers/service.js";
import path from "../constant.js";
import today from "../helpers/datetime.js";

export default class Model {
  //tasks = [];
  constructor() {
    this.tasks = [];
  }

  bindTaskListChanged(callback) {
    this.onTaskListChanged = callback;
  }

  getTask = async () => {
    this.tasks = await fetch.get(`/${path.PATH_TASK}`);
    return this.tasks;
  };

  addTask = async (name, description) => {
    const item = await fetch.create(`/${path.PATH_TASK}`, {
      id: uuidv4(),
      name,
      description,
      createAt: today,
      complete: false,
    });

    this.tasks.push(item);

    return item;
  };

  updateTask = async (task = {}) => {
    const oldTask = this.getTaskById(task.id);
    const param = {
      ...oldTask,
      name: task.name,
      description: task.description,
    };
    const taskEdit = await fetch.update(
      `/${path.PATH_TASK}/${taskEdit.id}`,
      param
    );

    const index = this.tasks.findIndex((item) => item.id === id);
    this.tasks.splice(index, 1, taskEdit);
    return taskEdit;
  };

  /*updateTask = async (id, updateName, updateDes) => {
    const index = this.tasks.findIndex((item) => item.id === id);
    const taskUpdate = {
      id,
      name: updateName,
      description: updateDes,
    };
    await fetch.update(`/${path.PATH_TASK}/${id}`, taskUpdate);
    this.tasks.splice(index, 1, taskUpdate);
    return this.tasks;
  };*/

  deleteTask = async (id) => {
    const index = this.tasks.findIndex((item) => item.id === id);
    const task = this.tasks[index];

    await fetch.remove(`/${path.PATH_TASK}/${id}`, task);
    this.tasks.splice(index, 1, task);
    return this.tasks;
  };

  getTaskById = (id) => {
    const task = this.tasks.find((item) => item.id === id);
    return task;
  };
}
