let option = 1 //  É como se o usuário tivesse escolhido a opção 1 de um menu.

switch (option){
    case 1:
        console.log("Consultar pedido")
        console.log("Aguarde...")
        break
    case 2:
        console.log("Falar com o atendente")    
        break
    case 3:
        console.log("Cancelar pedido")  
        break
         default:
            console.log("Opção inválida!")
}
 /* - SWITCH serve para escolher uma entre várias opções.
  - O switch pergunta:

   "Qual é o valor de option?"

  Nesse caso: option = 1 

  Agora ele começa a procurar um case que tenha o mesmo valor.
  após encontrar ele exibe os valores que estão dentro 

   - O break significa:

   "Pode parar por aqui."

   Ele faz o JavaScript sair do switch.

  Se não existisse o break, o programa continuaria executando os próximos case, mesmo sem serem a opção escolhida.

 - O default funciona como um "caso contrário".

   Se option não for 1, nem 2, nem 3, ele executa: Opção inválida! 

      --- Resumo
        switch → verifica o valor de uma variável.
        case → representa uma opção possível.
        break → faz o programa parar de verificar os outros casos.
        default → executa quando nenhuma opção corresponde ao valor.

*/ 