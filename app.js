let form = document.querySelector("form");
let validateData = data => {
    let errors= {}
    if(!data.task){
        errors.task = 'es necesario una tarea'
    }
    return errors
}

let tareas = document.createElement('div');
let contenedor = document.querySelector(".big-container");
contenedor.append(tareas)
// document.body.appendChild(tareas); // Añadirlo al DOM

let tasks = form.addEventListener('submit', e => {
    e.preventDefault()    
    let task = Array.from(e.target.elements).reduce((acc,el)=>{
        if(!el.name) return acc;
        acc[el.name] = el.value
        return acc
    },{})
        let errors = validateData(task)
        console.log(task)

        if(Object.keys(errors).length>0){
            let error = alert(errors.task) 
            return error
        }


        let taskItem = document.createElement("p");
        taskItem.innerHTML =    
            `<div class="task-container">
                <input type="checkbox" class="check-box"/>
                <p class="task-text">${task.task}</p>
                <button class="delete-btn">-</button>
            </div>`;
        
        let deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteClick);

        function deleteClick(){
            tareas.removeChild(taskItem);
        }

        let checkTask = taskItem.querySelector(".check-box");
        checkTask.addEventListener("click", ()=>{
            if(checkTask.checked){
                alert('tarea terminada');
                deleteClick()
            }
        } )

       tareas.append(taskItem)// ; // Agregar la tarea a la lista

        form.reset();
    });
    