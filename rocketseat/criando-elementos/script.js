const guests = document.querySelector("ul")

const newGuest = document.createElement("li") //Criando a LI
newGuest.classList.add("guest")
const guestName = document.createElement("span") // Criando a SPAN

 guestName.textContent = "thaias" //Colocando nome dentro da Span

 const guestSurname = document.createElement("span")
 guestSurname.textContent = "Fernandes"

 //Adiciona apos o ultimo filho 
 newGuest.append(guestName, guestSurname) // usando o append para adicionar outra const dentro.
 //posivel adicionar mais que uma.
 // Adiciona antes da appen, Antes do primeiro filho. 
  // newGuest.prepend(guestSurname)

// é mais simples que o append e a ceita apenas um argumento.
newGuest.appendChild(guestName)

guests.append(newGuest)
