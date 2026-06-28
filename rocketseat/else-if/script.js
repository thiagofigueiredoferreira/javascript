// IF ELSE IF

let hour = 12  // valor inicial 

/*if(hour <=  12){
    console,log("Bom dia!")
}
else if(hour > 18){
    console.log("Boa noite")
}
else if(hour > 12){
    console.log("Boa tarde!")
}
    */
// se o valor inicial for menor ou igual a 12 vai exibir bom dia, mais se o valor for maior que 12 e menor ou igual a 18 vai exibir boa tarde, se não for nenhum dos anteriores vai exibir boa noite.

if(hour <= 12){
    console.log("Bom dia!")
}
 else if(hour > 12 &&  hour <= 18) {
    console.log("Boa tarde!")
 } else {
    console.log("Boa noite!")
 }