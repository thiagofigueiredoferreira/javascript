const input = document.querySelector("#numero")
const form = document.querySelector("#meu-formulario")

input.addEventListener("input", () => {
  input.value = input.value.replace(/\D+/g, "")
})

form.addEventListener("submit", (event) => {
  event.preventDefault()
  
  const valor = input.value.trim()

  if (valor.length < 8) {
    alert("Digite pelo menos 8 dígitos!")
    return
  }

  console.log("Enviado com sucesso:", valor)
  input.value = "" // limpa o input na tela
})