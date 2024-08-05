var car = {};
car.metragem = 98745;
car.cor = "yellow";
console.log(car);

//A função no objeto se torna um método e um método nada mais é que uma propriedade do objeto, é mais um par de chave-valor. O que muda é que o valor que estou atribuindo ao objeto é uma função
car.virarAChave = function(){
    console.log("O motor está funcionando"); 
}
console.log(car);
//a função se torna a propriedade do objeto
car.luzesLigadas = function(){
    console.log("As luzes estão ligadas");
}
console.log(car);

car.aceleracao = function(){
    console.log("O carro está acelerando");
}

//Passando um objeto como parâmetro de uma função
function myFunc(car){
    car.cor = "black"; //essa função vai alterar a propriedade do objeto 
}


//A alteranção fica visível fora da função
myFunc(car);
console.log(car.cor)
console.log(car)

function lanternaDesligada(car){
    car.luzesLigadas = "desligada";
}
lanternaDesligada(car)
console.log(car.luzesLigadas);
console.log(car)

//Objeto aninhado usando notação de ponto
car.proprietario = {
    nome: "Gustavo",
    idade: 25,
    telefone: '(11)90000-0000',
    email: 'gustavo@mail.con'

}
console.log(car)

//A propriedade do objeto é um array de objetos com pares de valor-chave
car.manutencao = [{data: '10/05/2024', descricao: "Troca de oleo", custo:200}];
console.log(car)


