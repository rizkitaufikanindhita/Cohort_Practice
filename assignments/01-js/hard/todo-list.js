/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let toDoList = [];

class Todo {
  constructor() {}
  add(todo) {
    toDoList.push(todo);
  }
  remove(indexOfTodo) {
    toDoList.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    toDoList[index] = updatedTodo;
  }
  get(indexOfTodo) {
    console.log(toDoList[indexOfTodo]);
  }
  clear() {
    toDoList = [];
    console.log(toDoList);
  }
  getAll() {
    console.log(toDoList);
  }
}

let rizki = new Todo();

rizki.add("Belajar Frontend");
rizki.add("Nyenengin istri dan anak");
rizki.add("Belajar Design");
rizki.getAll();
rizki.remove(0);
rizki.getAll();
rizki.update(1, "Belajar Backend");
rizki.getAll();
rizki.get(0);
rizki.clear();
rizki.add("Belajar Fullstack");
rizki.getAll();

// module.exports = Todo;
