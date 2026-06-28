// -  como funcionam os operadores de incremento (++) e decremento (--) em JavaScript, além de operadores de atribuição (+= e -=).

let number = 10

// INCREMENTO

 // number = number + 1
 number++

 // Incrementa após (por isso não mostra no console)
console.log(number++)
console.log(number)

// Incrementa antes
console.log(++number)

//Decremento
console.log("Decremento após: ", number--)
console.log(number--)
console.log("Decremento antes: ", --number)

//incrementar mais de um (COLOCAR).
number += 10
console.log(number)

//incrementar mais de um (REMOVENDO).
number -= 5
console.log(number)
 

/* 
 number++ : pós-incremento (usa o valor atual e depois soma 1)
++number : pré-incremento (soma 1 e depois usa o valor)
number-- : pós-decremento (usa o valor atual e depois subtrai 1)
--number : pré-decremento (subtrai 1 e depois usa o valor)
number += 10 : soma 10 ao valor
number -= 5 : subtrai 5 do valor
*/