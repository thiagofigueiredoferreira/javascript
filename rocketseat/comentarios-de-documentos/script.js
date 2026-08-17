//a documentar funções em JavaScript usando JSDoc, deixando o código mais organizado, fácil de entender e mais profissional.

/*
 Comentario de documentação em JavaScript (sintaxe de JSDoc).
 o JSDoc é um padão para incorporar documentação no codigo-fonte a
 partir desses comentários.
 */
/*-------------------------*/


/** 
 * Authenticates the user
 * 
 * @param {String} email user email.
 * @param {String} password more than 6 characters.
 * @returns {Number} user id.
*/

 function signIn(email, password){
    // Fluxo de autenticação do usuário.

    return 7 
 }

 signIn("thiago@gmail.com", " 1234")



//  function hero(horoi, vilão){

  
//    hero("home-aranha", "coringa")
 
//   return "parabens"
//  }

//  console.log(hero("home-aranha", "coringa"))

function hero(heroi, vilao) {
  return `Parabéns, ${heroi}! Você venceu o ${vilao}.`
}

console.log(hero("homem-aranha", "coringa"))

//A ideia da função é:

// receber dois parâmetros;
// usar esses parâmetros;
// retornar algo;
// chamar a função fora dela.

 
