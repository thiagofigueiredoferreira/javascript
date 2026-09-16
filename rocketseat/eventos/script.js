window.addEventListener("load" , () => {
    console.log("A pagina foi carregada!")
})

addEventListener("click" , (event) => {
e.preventDefault()


// Retorna todas as informaçõs do evento.
    // console.log(event)


    // Retorna o elemento clicado.
    console.log(event.target)


    // Retorna o textContent do elemento clicado.
    console.log(event.target.textContent)
})