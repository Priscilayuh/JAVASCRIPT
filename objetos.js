//Criando Objetos
//Objeto Literal
var gerente = {
    nome: "Priscila Ferreira",
    idade: 25,
    tel: "(11) 00000-0000",
    cidade: "Tatuapé",
    cep: "00000-000"

}
console.log(gerente)

//Objeto com Notação de Ponto (posso atualizar objetos)
gerente.id="47ZKU"
console.log(gerente)

//Objeto com Notação de Colchetes
var cliente = {}
cliente["negativado"] = true
cliente["acordo"] = false
console.log(cliente)

//Posso intercalar entre ambas as notações(notação de ponto e colchete)
cliente.email= "kkkkk@gemail.com"
cliente.nome= "Alzira Ferreira"
cliente.rua= "Rua das Tulipas"
console.log(cliente)

var carro = {
    velocidade: 200,
    cor: "preto",
    altitude: 100
}
console.log(carro)
carro.cor = "rosa"
console.log(carro)


