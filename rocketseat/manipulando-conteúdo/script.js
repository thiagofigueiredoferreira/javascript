// Colocando span para que ele seja exibido com no texto 

const guest = document.querySelector("#guest-1 span")

 // textContent = Exibe o conteúdo em texto, sem aparecer os codigos, somente os texto 
//console.log(guest.textContent)

//guest.textContent = "thiago"

console.log(guest.textContent) // Retorna o conteúdo visível e oculto.

console.log(guest.innerText) // Retorna somente o conteúdo visivel.

console.log(guest.innerHTML) // Retorna o HTML como texto.

