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

  getTask = async () => {
    this.tasks = await fetch.get(`/${path.PATH_TASK}`);
    return this.tasks;
  };

  /**
   * USE API from fetch import and param name, description from controller in add task
   * @param {string} name
   * @param {string} description
   */
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

  /**
   * Use API from fetch import and param id from controller in edit task
   * @param {object} task
   * @returns
   */
  updateTask = async (task = {}) => {
    const oldTask = this.getTaskById(task.id);
    const param = {
      ...oldTask,
      name: task.name,
      description: task.description,
      complete: task.complete,
    };
    console.log("a", param);
    console.log("status", task.complete);
    const taskEdit = await fetch.update(`/${path.PATH_TASK}/${task.id}`, param);

    const index = this.tasks.findIndex((item) => item.id === task.id);
    this.tasks.splice(index, 1, taskEdit);
    return taskEdit;
  };

  /**
   * Use API from fetch import and param id from controller in delete task
   * @param {string} id
   * @returns
   */
  deleteTask = async (id) => {
    const index = this.tasks.findIndex((item) => item.id === id);
    const task = this.tasks[index];

    await fetch.remove(`/${path.PATH_TASK}/${id}`, task);
    this.tasks.splice(index, 1);
    return this.tasks;
  };

  /**
   * Use API from fetch import and param id from controller in get task by id
   * @param {string} id
   * @returns
   */
  getTaskById = (id) => {
    const task = this.tasks.find((item) => item.id === id);
    return task;
  };

  /**
   *
   * @param {string} query
   * @returns
   */
  searchTask = (query) => {
    if (query) {
      return this.tasks.filter((item) => item.name.includes(query));
    }
    return this.tasks;
  };
}
