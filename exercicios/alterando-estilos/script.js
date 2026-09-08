const input = document.querySelector("#name")
const button = document.querySelector("button")

input.classList.add("input-error")

input.classList.remove("input-error")

input.classList.toggle("input-error")

button.style.backgroundColor = "green"
button.style.color = "white"