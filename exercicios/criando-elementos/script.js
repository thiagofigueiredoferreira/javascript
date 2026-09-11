// DESAFIO 1

const guest = document.querySelector("body")

const novh1 = document.createElement("h1")
novh1.textContent = "Meu Primeiro Projeto Dinâmico"

novh1.classList.add("titulo-principal")

guest.append(novh1)


// DESAFIO 2


const alertaDiv = document.querySelector(".alerta")
const texto = document.createElement("p")
texto.textContent = "Ação não permitida"

const atencao = document.createElement("span")

atencao.textContent = "Atenção: "

alertaDiv.append(atencao, texto)

// DESAFIO 3 

const listPreset = document.querySelector("#lista-presentes")
const  criandoLi = document.createElement("li")

criandoLi.classList.add("item-presente")

const criandostro = document.createElement("strong")

criandostro.textContent = "Jogo de Panelas   "

const criandobtm = document.createElement("button")
criandobtm.textContent = "Presentear"

criandoLi.append(criandostro , criandobtm)

listPreset.append(criandoLi)

//DESAFIO 4


const novaDiv = document.createElement("div")

novaDiv.classList.add("cartao-agradecimento")

const novoH3 = document.createElement("h3")

novoH3.textContent = "Muito obrigado!"

const novoP = document.createElement("p")

novoP.textContent = "Sua ajuda é fundamental para a nossa nova casa."


novaDiv.append(novoH3, novoP)

const corpoPagina = document.querySelector("body")

corpoPagina.append(novaDiv)



