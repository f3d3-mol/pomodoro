document.addEventListener("DOMContentLoaded", function(){
// Declaración de variables
const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
let idTask = 0;

// Selección de elementos del DOM
const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");
const tBody = document.querySelector("#tasks");
const btnStatus = document.querySelector(".table-button_modify");
// Event listener para el formulario
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value != "") {
    createTask(itTask.value);
    itTask.value = "";
    renderTask();
  }
});

// Función para crear una nueva tarea
function createTask(value) {
  const newTask = {
    id: idTask,
    title: value,
    complete: false,
  };

  tasks.unshift(newTask);
  idTask++;
}

// Función para renderizar las tareas en la tabla
function renderTask() {
  // Borra los elementos existentes en el tBody
  tBody.innerHTML = '';

  // Itera sobre las tareas y crea las filas de la tabla
  tasks.forEach(task => {
    // Crea una nueva fila (tr) para la tarea
    const tr = document.createElement("tr");
    tr.id = task.id;
    tr.classList.add("tabla");

    // Crea los botones "Start" y "Status"
    const btnStart = document.createElement("button");
    btnStart.innerHTML = 'Start';
    btnStart.id = "btnStart";
    const btnStatus = document.createElement("button");
    btnStatus.complete = task.complete;
    btnStatus.onclick = () =>{
        if (task.complete) {
        task.complete = false;
        btnStatus.complete= task.complete;
        console.log(btnStatus.complete);}
        else{
            task.complete = true;
            btnStatus.complete= task.complete;
            console.log(btnStatus.complete)
        }
        btnStatus.innerHTML =btnStatus.complete;

    }
    btnStatus.innerHTML = task.complete;
    btnStart.classList.add("table-buton")
    btnStatus.classList.add("table-button_modify")
    btnStatus.id = task.id;
    btnStatus.complete = task.complete;


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
  });
}


});