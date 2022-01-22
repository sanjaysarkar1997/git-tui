const toDos = ["Ankita", "Arpita", "Priya", "Katrina", "Akshay", "Jubin"];
const todoDiv = document.getElementById("todo-ul");
const infoDiv = document.getElementById("info");
const accDiv = document.getElementById("accordionExample");

function todo(toDos) {
  let to = "";
  for (var x = 0; x < toDos.length; x++) {
    to += "<li>" + toDos[x] + "</li>";
  }
  todoDiv.innerHTML = to;
}

// todo(toDos);

let data = [
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
let data1 = [
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

function infoFunction(arr) {
  let info = "";
  for (var x = 0; x < arr.length; x++) {
    info += `<div class="col-3">
      <div class="card">
       <div class="card-body">
       <h1>${arr[x].name}</h1><p>${arr[x].age}</p><p>${arr[x].car}</p></div>
      </div>
    </div>`;
  }
  return info;

  // infoDiv.innerHTML = info;
}
console.log(infoFunction(data));
infoDiv.innerHTML = infoFunction(data.concat(data1));

// Accordion

let accordion = [
  {
    title: "What is Lorem Ipsum?",
    desc: "Lorem",
  },
  {
    title: "What is Lorem Ipsum?",
    desc: "Lorem",
  },
  {
    title: "What is Lorem Ipsum?",
    desc: "Lorem",
  },
  {
    title: "What is Lorem Ipsum?",
    desc: "Lorem",
  },
];
function accor(arr1) {
  let acc1 = "";
  for (i = 0; i < arr1.length; i++) {
    acc1 += `<div class="accordion-item">
     <h2 class="accordion-header" id="headingOne">
       <button
         class="accordion-button"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapseOne"
         aria-expanded="true"
         aria-controls="collapseOne"
       >
       ${arr1[i].title}
       </button>
     </h2>
     <div
       id="collapseOne"
       class="accordion-collapse collapse show"
       aria-labelledby="headingOne"
       data-bs-parent="#accordionExample"
     >
       <div class="accordion-body" id="acc-b">
       <strong> <code>${arr1[i].desc}</code>
       </div>
     </div>
   </div>
   `;
  }
  accDiv.innerHTML = acc1;
}
accor(accordion);
