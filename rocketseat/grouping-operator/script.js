// Grouping Operator (ordem de precedência)

let total1 = 2 + 3 * 4
console.log(total1)

/*em parênteses, a multiplicação roda primeiro.
3 * 4 = 12
Depois 2 + 12 = 14
O resultado é 14*/

let total2 = (2 + 3) * 4
console.log(total2)

/*Aqui o parêntese força 2 + 3 primeiro.
2 + 3 = 5
Depois 5 * 4 = 20
O resultado é 20*/

let average = (9.5 + 7 + 5) / 3
console.log(average)

/*Soma os valores primeiro: 9.5 + 7 + 5 = 21.5
Depois divide por 3
Resultado: 7.166666666666667*/

let resultado = (500 + 185) / 5
console.log(resultado)

/*Soma primeiro: 500 + 185 = 685
Divide por 5
Resultado: 137*/

// Esse código mostra como funciona a precedência de operadores em JavaScript e como o parêntese muda a ordem dos cálculos.

