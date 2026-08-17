// Função anônima ( função que não possui nome)


//pode ser com (let) tambem.
const showMessage1 = function(){
   return "Olá mundo"
}

console.log(showMessage1())


const showMessage2 = function(message, name){
   return message + name
}

console.log(showMessage2("Olá ", "thiago"))



const login = function(gmail, senha){
    return gmail + senha
}
 console.log("thiago@gmail.com " + 12345)

 const carFoting = function(user,senha,number){
      return user + senha + number
 }

 console.log("Thiago " + "@2342Th " + 68)


 const frutas = function(){
   return "uva"
 }

 console.log(frutas())