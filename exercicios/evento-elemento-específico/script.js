// DESAFIO 1 =  criei uma variavel chamada (caixa), selecionei um ID, depois puxei a variavel e coloquei um comando que presta atenção em tudo que acontece, coloquei o parametro de scroll para saber quando ele vai estar em funcionamento, coloquei tambem no outro parametro (event) para bloquear o caregamento da tela toda vez que algo acontece, dentro da função coloquei (IF) para quando o scroll atingir o valor de 150 o console.log vai exibir o valor que esta dentro dele.

const caixa = document.querySelector("#caixa-leitura")
caixa.addEventListener("scroll", (event) => {
    event.preventDefault()
    if(caixa.scrollTop > 150){
        console.log("O usuário rolou bastante!")
    }
})

//DESAFIO 2 E 3 = Selecionei o ID, usei o comando para saber oque acontece nele quando clicado, coloque a trava de atualizaçaõ de pagina, selecinei a variavel de (caixa) e coloquei o comando (scrollTo) para ir a determinada posição informada, e para suavizar coloquei o comando (behavior: "smooth").

const button = document.querySelector("#btn-voltar")
button.addEventListener("click", (event) => {
    event.preventDefault()

    caixa.scrollTo({
        top: 0,
        behavior: "smooth"

    })
})


