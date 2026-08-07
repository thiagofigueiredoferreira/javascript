// Visualizar o conteúdo do documnt
//console.log(document)

//Obter o title da pagina
console.log(document.title)

//Acessar o elemento pelo ID (SELETOR ID)
const guest = document.getElementById("guest-2")
console.log(guest)

//Mostra a propriedade do objetos.
console.dir(guest)

//Acessar elemento com class (SELETOR class)
const guestByClass = document.getElementsByClassName("guest")
console.log(guestByClass)

//Exibir o primeiro elemento da lista.
console.log(guestByClass.item(0)) // Sempre começa pelo 0
console.log(guestByClass[1]) // Vai do mesmo jeito de cima 

// Selecionar por lista de elementos pela tag
const  guestsbyTag = document.getElementsByTagName("li")
console.log(guestsbyTag)