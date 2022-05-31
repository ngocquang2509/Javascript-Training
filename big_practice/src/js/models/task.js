// import { v4 as uuidv4 } from "uuid";
import fetch from "../service.js";
import path from "../constant.js";

export default class TaskModel {
  constructor() {
    this.tasks = [];
  }

  async getTask() {
    const task = await fetch.get(`/${path.PATH_TASK}`);

    return task;
  }

  async addTask(taskName, taskDescription) {
    await fetch.create(`/${path.PATH_TASK}`),
      {
        id: new Date().getTime().toString(),
        name: taskName,
        description: taskDescription,
        complete: false,
      };
  }

  async updateTask(id, updateName, updateDescription) {
    await fetch.update(`/${path.PATH_TASK}/${id}`, {
      id: id,
      name: updateName,
      description: updateDescription,
      complete: false,
    });
  }

  async deleteTask(id) {
    await fetch.remove(`/${path.PATH_TASK}/${id}`);
  }
}
