  
    // Función para crear una nueva tarea
    export function objectTask(tasks, value, idTask) {
      let newTask = {
        id: idTask,
        title: value,
        complete: false,
      };
    
      tasks.push(newTask);
      
    }

