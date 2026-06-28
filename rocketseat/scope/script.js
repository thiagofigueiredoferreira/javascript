var user = "Thiago"
console.log(user)

// - hoisting

//console.log(user)
//var user 
/* o javaScript entende que a variavel existe mais não tem valor, por que a ordem do codigo está errada.*/



// Escopo.global.
var email = "thiago@email.com" // poder ser usada em qualquer lugar do meu programa por que é global.


// Escospo de bloco.
// As chaves {} são como um quarto da casa.
// O bloco olha para fora e encontra a variável. var email
{
console.log(email)
}
// Outro exemplo com var
{
    var age = 18 // Mesmo estando dentro das chaves. Como foi usado var, ela "escapa" do bloco.
    // É como guardar um JS na sala. Mesmo que você entre no quarto depois, o JS continua na sala.

}
console.log(age)

// Agora usando let
let addres = "rua apolo"

{
    addres = "rua leticia" // Trocando o nome da variavel dentro do bloco, e mesmo assim é posivel usar fora do bloco
   console.log(addres) 
}

/* Imagine que todas as variáveis são caixas.

var → cria uma caixa que pode ser usada até fora das chaves {}.
let → cria uma caixa mais organizada. Se for criada dentro de um bloco, ela só existe ali.
console.log() → abre a caixa e mostra o que tem dentro.
{} → é como um quarto da casa (um bloco).
undefined → a caixa existe, mas está vazia.
*/