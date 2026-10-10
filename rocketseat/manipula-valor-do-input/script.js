const input = document.querySelector("input")
const form = document.querySelector("form")
/*
input.addEventListener("input", () => {  // Evento de "input" é acionado quando recebe um valor.
    const value = input.value

    const regex = /\D+/g  // codigo de validação de string.

    //Retorna o padrão encontrado na string.
    // console.log(value.match(regex))


    //Testa se atende o padrão.
    // const isValid = regex.test(value)
    // console.log(value)
})
*/

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const value = input.value
 
    const regex = /\D+/g

    if(regex.test(value)){
        console.log(value)

       
    }else {
         alert("Valor inválido. Digite corretamente!")
    }
    
    // const regex = /\D+/g
    // const value = input.value.replace(regex, "")

    console.log(value)
} )

 
