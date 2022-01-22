const a = {
  b: "ankita",
  c: 34,
  d: [2, 3, 4],
};
const tasks = [
  {
    b: 23,
  },
  {
    b: 23,
  },
];
const todos = ["ankita", "arpita", "priya"];
function todo(todos) {
  let to = " ";
  for (var x = 0; x < todos.length; x++) {
      to=todos
  }
}
todo(todos);
const todoDiv = document.getElementById("todo-ul");
let todoList = "<li>ankita</li> <li>arpita</li><li>priya</li>";
todoDiv.innerHTML = todoList;

console.log(todoDiv);
console.log(todos);
console.log(a);
