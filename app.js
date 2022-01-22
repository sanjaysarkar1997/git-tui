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
let data = { name: "John", age: 30, car: null };

