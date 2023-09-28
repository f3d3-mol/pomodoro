
  
    // Función para crear una nueva tarea
    export function objectTask(tasks, idTask, value) {
      const newTask = {
        id: idTask,
        title: value,
        complete: false,
      };
    
      tasks.push(newTask);
      idTask++;
    }

