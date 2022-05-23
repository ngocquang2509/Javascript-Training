class taskModel {
  constructor() {
    this.list = [
      {
        id: 1,
        name: "First task",
        description: "1st tasl",
        isCompleted: false,
      },
      {
        id: 2,
        name: "Second task",
        description: "2nd tasl",
        isCompleted: false,
      },
    ];
  }

  addTask(taskName, taskDes) {
    const task = {
      id: this.list.length > 0 ? this.list[this.list.length - 1].id + 1 : 1,
      name: taskName,
      description: taskDes,
      isCompleted: false,
    };

    this.list.push(task);
  }
}
