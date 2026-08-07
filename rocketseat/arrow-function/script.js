// Arrow Function (função de seta).

const portfy = () =>{
console.log("Olá")
}

console.log(portfy)
portfy()


const portfy1 = (username, gmail) => {
    
    console.log(`Olá, ${username}. Seu e-mail é: ${gmail}.`)
}
portfy1("Thiago", "thiago@gmail.com")


const saudacao = (username) => {
    console.log(`Olá, ${username}! Seja bem-vindo.`)

}

saudacao("Thiago")


const somar = (valor1, valor2) =>{
    console.log(`A soma é: ${valor1}`)

}
somar(15+20)


const cadastro = (nome, idade, cidade) => {
    console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`)

}

cadastro("Thiago ", "21 anos", "Franco da Rocha")