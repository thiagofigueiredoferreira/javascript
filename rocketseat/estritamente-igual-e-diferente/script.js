let one = 1
let two = 2

// Estritamente igual a(tipo e valor)
// Sempre comparar dessa forma, melhor forma de comparar um dado, tipo e o valor.

console.log(one === 1)
console.log(one === "1")

/* o valor 1 é estritamente igual a o valor 1, que é true, o valor "1" não é estritamente igual ao valor de one
por que esta entre parentes, automaticamente vira uma string, resultado false. */




// !== estritamemte diferente de 
console.log(one !== two) //true
console.log(one !== 1) //false 
console.log(two !== 2) // false
console.log(two !== "2")// true