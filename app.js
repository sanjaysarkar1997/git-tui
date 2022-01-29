const toDos = ["Ankita", "Arpita", "Priya", "Katrina", "Akshay", "Jubin"];
const todoDiv = document.getElementById("todo-ul");
const infoDiv = document.getElementById("info");
const accDiv = document.getElementById("accordionExample");
const card2 = document.getElementById("infocard");
const table2 = document.getElementById("tablediv");
const watch2 = document.getElementById("clock");
const watch3 = document.getElementById("clock2");
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
  { name: "Ankita", age: 21, car: "Mercedes" },
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
    info += `<div class="col-3" style="background-color:${getRandomColor()}">
      <div class="card">
       <div class="card-body">
       <h1>${arr[x].name}</h1><p>${arr[x].age}</p><p>${arr[x].car}</p></div>
      </div>
    </div>`;
  }
  return info;

  // infoDiv.innerHTML = info;
}

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

function show(k) {
  if (k == 0) {
    return "show";
  }
  return "";
}
function accor(arr1) {
  let acc1 = "";
  for (i = 0; i < arr1.length; i++) {
    acc1 += `<div class="accordion-item">
     <h2 class="accordion-header" id="heading${i}">
       <button
         class="accordion-button"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#collapse${i}"
         aria-expanded="true"
         aria-controls="#collapse${i}"
       >
       ${arr1[i].title}
       </button>
     </h2>
     <div id="collapse${i}"
       class="accordion-collapse collapse ${show(i)} "
       aria-labelledby="heading${i}"
       data-bs-parent="#accordionExample">
       <div class="accordion-body" id="acc-b">
       <strong> <code>${arr1[i].desc}</code>
       </div>
     </div>
   </div>
   `;
  }
  // accDiv.innerHTML = acc1;
}
accor(accordion);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
// function getRandomColor() {
//   return `rgb(${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)} ${Math.floor(Math.random()*255)})`;
// }

function card(arg) {
  let q = "";
  for (var l = 0; l < arg.length; l++) {
    q += `<div class="col-3">
       <div class="card" style="background-color:${getRandomColor()}; border:2px solid ${getRandomColor()}">
       <div class="card-body">
       <h1>${arg[l].name}</h1><p>${arg[l].age}</p><p>${arg[l].car}</p>
       </div>
      </div>
    </div>`;
  }
  return q;
}

// card2.innerHTML = card(data);
function table(ta) {
  let th = "";
  for (var c = 0; c < ta.length; c++) {
    th += `<tr style="background-color:${getRandomColor()}" >
        <th scope="row">${c}</th>
        <td  >${ta[c].name}</td>
        <td >${ta[c].age}</td>
        <td >${ta[c].car}</td>
      </tr>`;
  }
  return th;
}
// table2.innerHTML=table(data);
// let cl=1
// let r=0
// let m=0
// let h
// function startTime(){
// cl++
//  let s= cl++
// if(s==60){
//   m=m+1;
//   cl=0;
// }
// if(m==60){
//   h=h+1;
//   m=0;
// }
// if(cl<10){
//   cl='0'+cl
// }

//  document.getElementById('hour').innerHTML=h
//  document.getElementById('min').innerHTML=m
//  document.getElementById('sec').innerHTML=s
// }
// setInterval(startTime, 100);
// console.log("hello")
let day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// var p = date.getHours();
// var r=date.getMinutes()
// var s=date.getSeconds()
// console.log(date.getDate());

// function startTime() {
//   cl++;
//   //  console.log( cl%60)
//   watch3.innerHTML = "Date" + date.getDate() + "-" + p + ":";
// }
// setInterval(startTime, 300);

const SEC = 1;
var date = new Date();
let cl =
  SEC * (date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds();

let secondHand = document.querySelector("#second-hand");
function time() {
  cl++;

  secondHand.style.transform = `rotate(${cl * 6}deg)`;

  watch2.innerHTML =
    (Math.floor(cl / 3600) % 24) +
    ":" +
    (Math.floor(cl / 60) % 60) +
    ":" +
    (cl % 60);
  console.log(cl);
}
setInterval(time, 1000 * SEC);
