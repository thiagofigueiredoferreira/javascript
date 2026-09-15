//SDESAFIO 1

const imagem = document.querySelector("#imagem-presente")
const botao = document.querySelector("#revelar-presente")

botao.addEventListener("click", function(){
    imagem.setAttribute("src", "https://via.placeholder.com/150/0000FF/FFFFFF?Text=Air+Fryer")

    imagem.setAttribute("alt", "Fritadeira Air Fryer")
    
})

// DESAFIO 2

const input = document.querySelector("#nome-doador")
const botao2 = document.querySelector("#btn-doar")
const botaoD = document.querySelector("#btn-desistir")



botao2.addEventListener("click", function(){
    //remove a trava de bloqueio do botão
    input.removeAttribute("disabled")
})

botaoD.addEventListener("click", function(){
    //coloca a trava de bloqueio de volta
    input.setAttribute("disabled", "")
})

// DESAFIO 3 

const quantidade  = document.querySelector("#quantidade-itens")

quantidade.setAttribute("min" , "1")
quantidade.setAttribute("max" , "5")
