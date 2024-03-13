
//=========== ADD TASK ============\\
const addBtn = document.querySelector('#btn')
if(addBtn.addEventListener('click', addTask)){
    countCards()
} // add a task click

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

delBtn.addEventListener('click', deleteTask)

// function remove task
function deleteTask(task) {
    task.remove()
}
//==================================\\



//=========== COUNTER ============\\

const counter = document.querySelector('#count')
let compteur = 0
function countCards() {
    let counter = document.querySelector('#count')
    compteur++ 
    counter.innerText = toString(compteur)
}
