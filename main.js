const tasks = [];
let time = 0;
let timer = null;
let timerBreak = null;
let current = null;
let idTask = 0;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (itTask.value != "") {
    createTask(itTask.value);
    itTask.value = "";
    /* renderTask(); */
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


/* function renderTask(){
    const tasksContainer = document.querySelector('#tasks');

    const html =tasks.map(task => {        
    });
    
    tasksContainer = html.join('');
}
 */
