export class TodoList {
  constructor() {
    this.tasks = [];
  }

  // Add a new task
  addTask(taskName) {
    const task = {
      id: this.tasks.length + 1,
      name: taskName,
      completed: false,
    };
    this.tasks.push(task);
    console.log(`Task added: "${taskName}"`);
  }

  completeTask(taskId) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.completed = true;
      console.log(`Task completed: "${task.name}"`);
    } else {
      console.log(`Task with ID ${taskId} not found.`);
    }
  }

  listTasks() {
    console.log("Todo List:");
    this.tasks.forEach((task) => {
      console.log(
        `${task.id}. ${task.name} - ${task.completed ? "Completed" : "Pending"}`
      );
    });
  }
}
