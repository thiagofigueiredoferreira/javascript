window.addEventListener("load" , () => {
   const pgh2  = document.querySelector("#status-pagina")
   pgh2.textContent = "Bem-vindo à Lista do Apartamento!"
})

const formulario = document.querySelector("#form-presente")

formulario.addEventListener("submit", (event) => {
      // 1. A PRIMEIRA coisa a fazer é travar o recarregamento da página
      event.preventDefault()
      
      // 2. Agora sim, podemos fazer o que quisermos em paz!
      console.log(event.target)
      console.log("Deu certo! A página não recarregou.")
})

const lista = document.querySelector("#lista-garantidos")
lista.addEventListener("click", (event) => {
    console.log(event.target.textContent)
})