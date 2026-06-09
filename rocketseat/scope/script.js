var user = "Thiago"
console.log(user)

//hoisting
//var user 
//console.log(user)


// Escopo.global.
var email = "thiago@email.com"


// Escospo de bloco.
{
console.log(email)
}

{
    var age = 18
}

console.log(age)

let address = "rua apolo"

{
    addres = "rua leticia"
   console.log(address) 
}

