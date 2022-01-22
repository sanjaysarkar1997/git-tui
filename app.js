const toDos = ["ankita", "arpita", "priya", "Katrina", "Akshay", "Jubin"];
const todoDiv = document.getElementById("todo-ul");

function todo(toDos) {
  let to = "";
  for (var x = 0; x < toDos.length; x++) {
    to += "<li>" + toDos[x] + "</li>";
  }
  todoDiv.innerHTML = to;
}

todo(toDos);
let data = [
  { name: "John", age: 30, car: null },
  { name: "Mike", age: 26, car: "BMW" },
  { name: "Jane", age: 28, car: "Toyota" },
  { name: "Mary", age: 32, car: "Mercedes" },
  { name: "Mark", age: 25, car: "BMW" },
  { name: "Pam", age: 27, car: "Toyota" },
  { name: "Sam", age: 29, car: "Mercedes" },
  { name: "Phil", age: 31, car: "BMW" },
  { name: "Liz", age: 33, car: "Toyota" },
  { name: "Joe", age: 35, car: "Mercedes" },
];
