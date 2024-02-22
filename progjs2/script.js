
// 1. Grab the save-el paragraph and store it in variable called saveEl 
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if(count !== 0) {
        count -= 1
        countEl.textContent = count
    } else {
        console.log("Increment before decrementing")
    }
}

function save() {
    let countElement = count+ " - "
    saveEl.textContent += countElement
    countEl.innerText = count = 0
}






