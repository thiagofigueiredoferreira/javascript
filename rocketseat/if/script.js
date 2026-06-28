// IF (SE)

let hour = 11

if (hour <= 13) {
    console.log("Bom dia!")
    console.log("Seja bem vindo!")

    //if com bloco { ... }
    /*
    A condição é hour <= 13
    Se for verdadeira, tudo dentro das chaves é executado
    Aqui, com hour = 11, as duas linhas são exibidas:
    Bom dia!
    Seja bem vindo!
    */   


}

if (hour <= 12)
    console.log("Bom dia!")
    console.log("Seja bem vindo")
    // if sem chaves
/*  
    Quando não há chaves, apenas a próxima instrução pertence ao if
    Então só esta linha depende da condição:
    console.log("Bom dia!")
    A linha seguinte:
    console.log("Seja bem vindo")
    vai rodar sempre, independentemente do if
    Resultado com hour = 11 
*/
// importante
//Para evitar esse erro, use chaves sempre que quiser executar mais de uma instrução dentro do if:
//Isso garante que ambas as linhas fiquem dentro do if.