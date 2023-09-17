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
function renderTask() {
    // Borra los elementos existentes en el tBody
    tBody.innerHTML = '';

    tasks.forEach(task => {
        console.log(task);
        // Crea una nueva fila (tr) para la tarea
        const tr = document.createElement("tr");
        tr.id = task.id;
        tr.classList.add("tabla");

        // Crea los botones "Start" y "Status"
        const btnStart = document.createElement("button");
        btnStart.innerHTML = 'Start';
        btnStart.id = "btnStart";
        const btnStatus = document.createElement("button");
        btnStatus.innerHTML = "incomplete";
        btnStart.classList.add("table-buton")
        btnStatus.classList.add("table-button")

        // Crea las celdas (td) para la fila
        const tdStart = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdModify = document.createElement("td");
        tdStart.classList.add("table-buton");
        tdModify.classList.add("table-buton");
        tdTitle.classList.add("table-title");
        tdTitle.innerHTML = task.title;
        
        

        // Agrega los botones a las celdas correspondientes
        tdStart.appendChild(btnStart);
        tdModify.appendChild(btnStatus);

        // Agrega las celdas a la fila
        tr.appendChild(tdStart);
        tr.appendChild(tdTitle);
        tr.appendChild(tdModify);

        // Agrega la fila completa al tBody
        tBody.appendChild(tr);

        console.log(tr);
        console.log(tBody);
    });
}

