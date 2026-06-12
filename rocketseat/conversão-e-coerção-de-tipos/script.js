/*

- Conversão de tipos (Type casting ou conversion):
ocorre quando você explicitamente trasforma um valor de um
tipo para o outro. Isso é feito de forma consciente, usando 
funções ou métodos específicos para realizar a conversão.

 */

  let value = "9"
  console.log(typeof value)
  console.log(typeof Number(value))

  let age = 18
  console.log(typeof age.toString())
  console.log(typeof String(age))

  let option = 0
  console.log(Boolean(option))
  console.log(typeof Boolean(option))



  /*- Coerção de tipos:
  acontece de forma automática (implicitamente). OJavaScript
  tenta automaticamente converter um dos valores para um tipo
  compatível antes de realizar a operação.*/

  //Exemplo de coerção
  console.log( typeof ("10" + 5))