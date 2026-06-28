
/*
try {
    //Tenta executar algo.
    console.log(result)

} catch (error) {
    //CAPTURA O ERRO PARA TRATAR
    // console.log("Não foi possível executar seu pedido. Tente novamente mais tarde!")

    console.log(error)
} finally {
    console.log("Fim")
} */

    let result = 1

    try {
        if( result === 0){
            throw new Error("O valor é igual a zero.")
        }

    
    } catch (error) {
        console.log(error)

    } finally {
        console.log("Fim") 
    }

    /* -- como result é 1, a condição é falsa.

Então:

✅ Não entra no if.
✅ Não cria erro.
✅ O catch não é executado.
✅ Apenas o finally é executado.

Saída:

Fim
 - Se a condição for verdadeira, então:

throw cria o erro.
O catch captura esse erro e o mostra.
O finally imprime "Fim".

Saída:

Error: O valor é igual a zero.
Fim

