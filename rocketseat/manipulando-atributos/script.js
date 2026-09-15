//  Manipulando atributos 
// const input = document.querySelector("input")
  //ADICIONAR ATRIBUTO
 // input.setAttribute("disabled", true)

 // input.setAttribute("type", "file")


  //REMOVER ATRIBUTO
 // input.removeAttribute("id")


 const input = document.querySelector("input")

 const bloquear = document.querySelector("#bloquear")
 const desbloquear = document.querySelector("#desbloquear")
 const senha = document.querySelector("#senha")
 const texto = document.querySelector("#texto")

bloquear.addEventListener("click", () => {

    input.setAttribute("disabled", "")
})

desbloquear.addEventListener("click", () => {

    input.removeAttribute("disabled")
})

senha.addEventListener("click", () => {

    input.setAttribute("type", "password")
})

texto.addEventListener("click", () => {

    input.setAttribute("type", "text")
}) 








 /*
   ATRIBUTOS
   │
   ├── setAttribute()    → adiciona / altera
   │
   ├── getAttribute()    → pega o valor
   │
   ├── removeAttribute() → remove
   │
   └── hasAttribute()    → verifica se existe
   */

