/* 
  - Parâmetros: é a variavel (escopo da função) que irá 
  receber um valor em uma função.
  - Argumentos: é o valor que é passado para a função
*/
// passando o parâmetro username
function messagem(username){
    console.log("Olá", username)
}
//Passando argumentos
messagem("thiago") 
messagem("Maria")

// passando o parâmetro valor
function numero(valor){
    console.log( 5 + 5 +  valor)

}
//Passando argumentos
numero(15)


function sum(a,b){
    console.log(a + b)
}
sum(10,20)
sum(7,3)

//sempre respeitar a ordem de parâmetros.
//Definindo um valor (argumento) padrão.
function joinText(text1, text2 = "", text3 = "",) {
    console.log(text1, text2, text3)
}

joinText("Thiago", "Figueiredo", "Ferreira")
joinText("Figueiredo", "Thiago", "Ferreira")


joinText("thiago")
