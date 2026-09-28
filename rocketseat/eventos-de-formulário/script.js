const form = document.querySelector("form")

form.onsubmit = (event) => {
event.prevetnDefault()
console.log("Você fez submit no formulário")
} 

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Você fez submit no formulário #2")
})