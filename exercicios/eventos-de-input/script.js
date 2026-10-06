/*const input = document.querySelector("input")

input.addEventListener("keydown" , (event) => {
     if (event.key === "Enter"){
            console.log("Você enviou a mensagem!")
        } else if (event.key === "Backspace"){
            console.log("Você apagou um caractere!")
        } else {
    console.log(event.key)
  }
})
*/
// estrutura básica de capturar o evento do teclado e reagir com condições!
/*const input = document.querySelector("input")

input.addEventListener("keypress", (event) => {
    if (event.key === "a") {
        console.log("Você digitou a primeira letra do alfabeto!")
    } else if (event.key === "1"){
        console.log("Você digitou um número!")
    } else{
        console.log(event.key)
    }
})
*/

// const input = document.querySelector("input")
// input.onchange = inputChange

// function inputChange(){
//     if(input.value === ""){
//         console.log("O campo não pode ficar vazio!")
//     } else {
//         console.log(`Texto salvo: ${input.value}`)
//     }
// }


const input = document.querySelector("input")

input.addEventListener("keydown", (event) => {

 if(event.key === "Enter") {
    if(input.value === ""){
        console.log("Digite uma mensagem antes de enviar!")
    } else {
        console.log(`Mensagem enviada com sucesso: ${input.value}`)
    }
 }
 else if (event.key === "Escape"){
    console.log("Operação cancelada peço usuário.")
 }
})

input.onchange = validarTexto

function validarTexto(){
    if(input.value.length < 3) {
        console.log("Mensagem muito curta!")

    } else {
        console.log("Rascunho atualizado!")
    }
}