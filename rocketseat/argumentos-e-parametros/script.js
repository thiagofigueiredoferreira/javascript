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

//exemplo de parametros

function meioTrasport(moto,carro){
    console.log("A " + moto + "é muito rapida e a" + carro + "é muito lenta.")
}

meioTrasport("tiger-800 ", " ferrari ")

function comidas(comida1,comida2){
    console.log("Amo comer " + comida1 + "de sobremessa, mais uma " + comida2 + "é bem melhor!!")
}

comidas("pudim ", "lasanha ")

function meliAreas(area1, area2, area3, area4){
    console.log("Aqui no mercado livre tem " + area1 + area2 + area3 + area4 + ", E estamos em beta continuo!!!")
}

meliAreas("piking, ", "packing, ", "putwhou, ", "shiping" )

