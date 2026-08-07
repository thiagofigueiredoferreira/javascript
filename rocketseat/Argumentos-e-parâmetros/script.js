/*
  - Parâmetros: é a variável (escopo da função) que irá receber um valor em uma função.
  - Argumentos: é o valor que é passado para a função.
  */
 
 // Parâmetro
// É a variável criada na declaração da função.

  function message(username){
    console.log("Olá" , username)
  }

  message("Thiago")
  message("gato")


  function sum(a, b){
    console.log(a + b)
  }

  sum(10,20) // aqui ele puxa a logica da função acima. e o resultado é esse.
  sum(7,3)

  // Definindo um valor (argumento) padrão.
  function jointext(text1, text2 = "", text3 = "") {
    console.log(text1, text2, text3)
  }
  jointext("Thiago", "Figueiredo", "Ferreira")
  jointext("Thiago", "Figueiredo", "Ferreira")

  jointext("Thiago")