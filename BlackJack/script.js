
let firstCard = 11
let secondCard = 10 
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true 
let message = ""
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-El")
let cardsEL = document.getElementById("cards-El");

function startGame() {
   
    cardsEL.textContent = "Cards: " + firstCard + " " + secondCard 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game! "
        isAlive = false 
    }
    messageEl.textContent = message
    
}


function newCard() {
    console.log("Drawing a new card from the deck!")

    //1. Create a card variable, and hard code its value to a number (2-11)

    //2. Add the new card to the sum variable

    //3. Call startGame()


}