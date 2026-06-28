let one = 1
let two = 2

// == igual a 

/*
one == two → false, porque 1 não é igual a 2
one == 1 → true, porque ambos são 1
one == "1" → true, porque == compara valores e converte o tipo da string "1" para número antes de comparar
*/

console.log("## IGUAL A ##")
console.log(one == two) //false
console.log(one == 1) //true
console.log(one == "1") // false 

// != diferente de 

/*one != two → true, porque 1 é diferente de 2
one != 1 → false, porque 1 não é diferente de 1
one != "1" → false, porque != também converte tipos antes de comparar, então 1 e "1" são tratados como iguais
*/

console.log("## DIFERENTE DE ##")
console.log(one != two)  // true
console.log(one != 1) // false
console.log(one != "1") // false 
