// When the user clicks the purchase button, render out 
// "Something went wrong, please try again" in the paragraph
// that has the id="error"


let messageError = document.getElementById("error0")

function errorMsg() {
    messageError.textContent= "Something went wrong, please try again"
}