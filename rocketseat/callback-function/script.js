//CALLBACK FUNCTION: é uma função passada para outra função como um argumento.

function execute(taskName, callback){
        console.log("Executando a tarefa:")
        callback()
}

function callback(){
        console.log("Tarefa finalizada.")
}

//Passando para função.
execute("Download do arquivo...", callback) 

// Criando a função no proprio parâmetro. (função anônima)
execute("Upload do arquivo..." , function(){
        console.log("Função de callback com uma função anônima.")

})

//Utilizando Arrow function

execute("Excluindo arquivo..", () => {
        console.log("Arquivo excluído")
})

execute("Salvando arquivo...", () => console.log("Arquivo Salvo!")) // usando uma versão mais curta.


function calcular(num1,num2, callback){
         return callback(num1, num2)
   
}
function somar(a,b){
      return a + b;
}

let resultado = calcular(20,30,somar)
console.log(resultado)


//---------------------------------------

// function avisar() {
//   console.log("Alarme tocando! ⏰");
// }

// setTimeout(avisar, 2000);




function execute(texto, callback) {
  console.log(texto);
  callback();
}

execute("Download do arquivo...", () => console.log("Tarefa finalizada."));

function avisar(text, callback) {
  console.log(text);
  callback()
}

 //setTimeout(avisar, 2000);

setTimeout(() => console.log("Alarme tocando! ⏰"), 2000);

setTimeout(() => {
        console.log("Café pronto! ☕")
        
}, 5000);


function processarUsuario(nome, callback){
        const saudação = "Olá, " + nome;
        callback(saudação)
}

function callback(saudação){
        console.log(saudação)
}

processarUsuario("thiago", callback)




