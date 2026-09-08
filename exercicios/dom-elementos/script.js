// Puxando elementos pelo ID 

const novaMensagem = document.getElementById("mensagem");
mensagem.textContent = "Bem vindo"

const nome = document.getElementById("nav")
nav.textContent = "Olá Maria"

const thpo = document.getElementById("thpos")
thpos.textContent = "Fala rapaziada, como estão ?"



// Adicioando class em elementos que ja tem class.


const popups = document.querySelectorAll(".popup")
popups.forEach((p) => p.classList.add("oculto"));


