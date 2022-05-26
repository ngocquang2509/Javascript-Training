import { v4 as uuidv4 } from "uuid";
import fetch from "../service";
import path from "../constant";

export default class TaskModel {
  constructor() {
    this.tasks = [];
  }

  bindListChanged(callback) {
    this.onListChanged = callback;
  }

  async addTask(taskText) {
    await fetch.create(`/${path.PATH_TASK}`),
      {
        id: uuidv4,
        text: taskText,
        complete: false,
      };
  }

  async updateTask(id, updateText) {
    await fetch.update(`/${path.PATH_TASK}/${id}`, {
      id: id,
      text: updateText,
      complete: false,
    });
  }

  async deleteTask(id) {
    await fetch.remove(`/${path.PATH_TASK}/${id}`);
  }
}
