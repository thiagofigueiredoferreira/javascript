showMessage("Olá, Thiago")

function showMessage(message){
    console.log(message)
endline()
    function endline(){
        console.log("--------")
    }
}

showMessage("Tudo bem?")

//Não funciona por que não existe nesse escopo.
//endline()


//---------------------------------------------------------
//TESTES !!!
bivi("Olá")

function bivi(message){
    console.log(message)

    function espa(){
        console.log("............")
    }
   espa()
}

bivi("thiago")

function Nume(a,b){
    console.log(a + b)
}

Nume(55,5)
Nume(10,11)


// exemplo corrigido

function somar(a, b) {
    console.log(a + b)
}

somar(10, 20)

let x = 10
let y = 20

console.log(x + y);
