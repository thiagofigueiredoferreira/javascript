// // Visualizar o conteúdo do documnt
// //console.log(document)

// //Obter o title da pagina
// console.log(document.title)

// // Acessar o elemento pelo ID (SELETOR ID)
// const guest = document.getElementById("guest-2") // getElementById = consigo acessar elementos pelo id
// console.log(guest)

// //Mostra a propriedade do objetos.
// console.dir(guest) // consutando as propriedades dos elemento com (DIR)

// //Acessar elemento com class (SELETOR class)
// const guestsByClass = document.getElementsByClassName("guest")
// console.log(guestsByClass)


// //Exibir o primeiro elemento da lista.
// console.log(guestsByClass.item(0)) // Sempre começa pelo 0
// console.log(guestsByClass[1]) // Vai do mesmo jeito de cima 

// // Selecionar por lista de elementos pela tag
//  const  guestsbyTag = document.getElementsByTagName("li")
//  console.log(guestsbyTag)


console.log(document.title)


const guest = document.getElementById("guest-2")
console.log(guest)
console.dir(guest)

const guests = document.getElementsByClassName("guest")
console.log(guests)

console.log(guests.item(0))
console.log(guests[3])

// const nome = document.getElementsByTagName("li")
// console.log(nome)

const nome = document.getElementsByTagName("li")
console.log(nome)
 





