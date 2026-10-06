const input = document.querySelector("input")

//  evento de keydown - quando uma tecla é precionada (captura tudo, CTRL, SHIFT, etc .)
// ele pega todas as teclas clicadas dentro do elemento
 /*input.addEventListener("keydown", (event) =>  {
    console.log(event.key)

})
*/
// evento de keypress - quando uma tecla do tipo caractere é precinada (letras, numeros, pontos, etc.)
input.addEventListener("keypress", (event) => {
    console.log(event.key)
})

input.onchange = () => {
    inputChange()
}

function inputChange(){
    console.log("O INPUT MUDOU!")
}