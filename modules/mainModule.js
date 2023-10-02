import { objectTask } from "./createTask.js";
import { renderTask } from "./renderTask.js";

// Esperar a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
  // Declaración de variables
  const tasks = [];
  let time = 0;
  let timer = null;
  let timerBreak = null;
  let current = null;
  let idTask =0;

  // Selección de elementos del DOM
  const bAdd = document.querySelector("#bAdd");
  const itTask = document.querySelector("#itTask");
  const form = document.querySelector("#form");
  const tBody = document.querySelector("#tasks");

  // Event listener para el formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (itTask.value != "") {
      objectTask(tasks, itTask.value, idTask);
      itTask.value = "";
      renderTask(tasks, tBody, startButtonHandler, timer);
      idTask ++;
    }
  });

  // Función para manejar el botón "Start" de una tarea
  function startButtonHandler(id) {
    time = 25*60; // 25 minutos en segundos
    current = id;

    timer = setInterval(() => {
      timeHandler(id);
    }, 1000);
  }

  // Función para manejar el tiempo restante
  function timeHandler(id) {
    time--;
    renderTime();
    if (time ==0){
        clearInterval(timer);
    }
  }

  // Función para renderizar el tiempo restante en el DOM
  function renderTime() {
    const timeDiv = document.querySelector("#time #value");

    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes}:${seconds}`;



  }
});
