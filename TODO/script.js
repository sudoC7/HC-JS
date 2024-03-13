
//=========== ADD TASK ============\\
const addBtn = document.querySelector('#btn')
addBtn.addEventListener('click', addTask)
    
const taskCard = document.querySelector(".todoCard")
const taskContainer = document.querySelector("#todoCards")


function addTask() {
    const newTask = taskCard.cloneNode(true) // clone the task card
    const newDelBtn = newTask.querySelector('.delBtn')

    const newTextArea = newTask.querySelector('.task')

    newTextArea.value = "New Task" // set new task text to "New Task"
    newDelBtn.addEventListener('click', function() {
        deleteTask(newTask)
    })

    taskContainer.appendChild(newTask)
    updateCount()
}
//==================================\\



//=========== DELL TASK ============\\

const delBtn = document.querySelector('.delBtn')

delBtn.addEventListener('click', function(){
    deleteTask(taskCard)
    decrement()
})

// function remove task
function deleteTask(task) {
    task.remove()
}
//==================================\\



//=========== COUNTER ============\\

const counter = document.querySelector('#count') // j'appel l'id de la div 
counter.innerText = 1
let int = 1

function updateCount() {
        int += 1
        counter.innerText = int 
}

function decrement() {
    if(int !== 0) {
        int -= 1
        counter.innerText = int
    }
}

//==================================\\