import { v4 as uuidv4 } from "uuid";
import fetch from "../helpers/service.js";
import path from "../constant.js";
import today from "../helpers/datetime.js";

export default class Model {
  constructor() {
    this.tasks = [];
  }

  bindTaskListChanged(callback) {
    this.onTaskListChanged = callback;
  }

  async addTask(name, description, date) {
    // date = today;
    const item = await fetch.create(`/${path.PATH_TASK}`, {
      id: uuidv4(),
      name: name,
      description: description,
      date: today,
      complete: false,
    });

    this.tasks.push(item);

    return this.tasks;
  }

  async showTask() {
    const list = await fetch.get(`/${path.PATH_TASK}`);
    return list;
  }

  async updateTask(id, name, description) {
    await fetch.update(`/${path.PATH_TASK}/${id}`, {
      id: id,
      name: name,
      description: description,
      complete: false,
    });
  }

  async deleteTask(id) {
    await fetch.remove(`/${path.PATH_TASK}/${id}`);
  }
}
