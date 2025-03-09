let form = document.querySelector("form");
let validateData = data => {
    let errors= {}
    if(!data.task){
        errors.task = 'es necesario una tarea'
    }
    return errors
}

let render = ({task}) => {
   return `
    <div>
        <p style="color: green">"${task.task}"</p>
    </div>
   `
};

let tareas = document.createElement('div');
document.body.appendChild(tareas); // Añadirlo al DOM

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
        taskItem.textContent = `✔ ${task.task}`;

        tareas.appendChild(taskItem); // Agregar la tarea a la lista

        form.reset();
    });
    