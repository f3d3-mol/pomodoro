const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
let idTask = 0;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");
const tBody = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value != "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTask();
  }
});

function createTask(value) {
  const newTask = {
    id: idTask,
    title: value,
    complete: false,
  };

  tasks.unshift(newTask);
  idTask++;

  /*     tasks.forEach(task =>{
        console.log(task);
    })  */
  /*   hasta esta parte se logra el resultado deseado agregando los nuevos task en el array task  */
}

function renderTask(){
    tBody.innerHTML = '';
    tasks.forEach(task => {
        const tr = document.createElement("tr");
        tr.id = task.id;
        const btnStart = document.createElement("button");
        btnStart.innerHTML = 'start';
        btnStart.id = "btnStart";
        const btnStatus = document.createElement("button");
        const tdStart = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdState = document.createElement("td");
        const tdModify = document.createElement("td");
        tdStart.appendChild(btnStart);
        tdModify.appendChild(btnStatus);
        
        tr.appendChild(tdStart);
        
        console.log(tr);
        
        tBody.appendChild(tr)
        console.log(tBody)
    })
}

