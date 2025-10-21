import { TodoList } from "./todo.js";

const myTodo = new TodoList();

myTodo.addTask("Learn JavaScript");
myTodo.addTask("Build a Todo App");
myTodo.addTask("Review python");

myTodo.completeTask(2);

myTodo.listTasks();
