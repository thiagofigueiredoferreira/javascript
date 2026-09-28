const formulario = document.querySelector("#form-compras")
const inputText = document.querySelector("#input-item")
const lista = document.querySelector("#lista-compras")

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    const valorDigitado = inputText.value.trim()
    if (valorDigitado === "") return

    const liTxt = document.createElement("li")
    liTxt.textContent = valorDigitado + ""

    const botao = document.createElement("button")
    botao.textContent = "X"
    botao.addEventListener("click", (event) => {
        event.preventDefault
        liTxt.remove()
       
    })

     liTxt.appendChild(botao)

    lista.appendChild(liTxt)
    

   inputText.value = ""
  inputText.focus()

})