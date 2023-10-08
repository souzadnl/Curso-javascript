// função que adiciona tarefa
function addTask(){


    const taskTitle = document.querySelector("#task-title").value
    
    if(taskTitle) {
        // clonar template

        const template = document.querySelector(".template")

        const newTask = template.cloneNode(true)

        // adiciona titulo

        newTask.querySelector(".task-title").textContent = taskTitle

        // remover as classes desnecessarias

        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        // adiciona tarefa na lista

        const list = document.querySelector("#task-list")
        list.appendChild(newTask)

        // remove tarefa da lista

        const closeBtn = newTask.querySelector(".close-btn").addEventListener("click", function(){
            removeTask(this)
        })

        // completar tarefa

        const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function() {
            completeTask(this)
        })
    }
}

function removeTask(task) {
    task.parentNode.remove(true)
}

function completeTask(task) {
    const taskComplete = task.parentNode
    taskComplete.classList.toggle("done")
}

const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click", function(e){

    e.preventDefault();

    addTask()
})