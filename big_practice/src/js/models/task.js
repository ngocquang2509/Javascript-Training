import { v4 as uuidv4 } from "uuid";
import fetch from "../helpers/service.js";
import path from "../constant.js";
import today from "../helpers/datetime.js";

export default class Model {
  tasks = [];
  constructor() {
    //this.tasks = [];
  }

  bindTaskListChanged(callback) {
    this.onTaskListChanged = callback;
  }

  showTask = async () => {
    this.tasks = await fetch.get(`/${path.PATH_TASK}`);
    return this.tasks;
  };

  addTask = async (name, description, date) => {
    date = today;
    const item = await fetch.create(`/${path.PATH_TASK}`, {
      id: uuidv4(),
      name,
      description,
      date,
      complete: false,
    });

    this.tasks.push(item);

    return this.tasks;
  };

  async updateTask(id, name, description) {
    await fetch.update(`/${path.PATH_TASK}/${id}`, {
      id: id,
      name: name,
      description: description,
      complete: false,
    });
  }

  // async deleteTask(id) {
  //   await fetch.remove(`/${path.PATH_TASK}/${id}`);
  // }

  deleteTask = async (id) => {
    const index = this.tasks.findIndex((item) => item.id === id);
    const task = this.tasks[index];

    await fetch.remove(`/${path.PATH_TASK}/${id}`, task);
    this.tasks.splice(index, 1);
    return this.tasks;
  };
}
