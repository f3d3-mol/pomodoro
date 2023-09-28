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
          btnStart.id = task.id;
          const btnStatus = document.createElement("button");
          btnStatus.complete = task.complete;
    
          // Función para cambiar el estado de la tarea
          btnStatus.onclick = () => {
            if (task.complete) {
              task.complete = false;
              btnStatus.complete = task.complete;
              console.log(btnStatus.complete);
            } else {
              task.complete = true;
              btnStatus.complete = task.complete;
              console.log(btnStatus.complete);
            }
            btnStatus.innerHTML = btnStatus.complete;
          };
    
          btnStart.onclick = () => {
            if (!timer) {
              const startId = btnStart.id;
              console.log(startId);
              btnStart.textContent = 'in progress';
              startButtonHandler(startId);
            }
          };
    
          btnStatus.innerHTML = task.complete;
          btnStart.classList.add("table-buton");
          btnStatus.classList.add("table-button_modify");
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