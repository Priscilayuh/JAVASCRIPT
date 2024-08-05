//Métodos e Propriedades de string

var saudar = "Olá";
var lugar = "Mundo";
//posso executar métodos e propriedades diretamente nas strings sem salvá-los em uma variável


console.log(saudar.length)

//método charAt() lê o caracter na posição do índice específicado

console.log(saudar.charAt(2))

//método concat() une duas cadeias de caracteres

console.log("Wo".concat("rl").concat("d"))

//método indexOf()retorna a primeira posição  que o caractere foi encontrado

console.log("la-ra-la".indexOf("a"));

//O lastIndexOf encontra a última correspondência, caso contrário, funciona da mesma forma que indexOf
console.log("lá-lo-la".lastIndexOf("l"))

//método split() divide a cadeia de caracteres em um array (matriz) de subcadeias

var papaiNoel = "ho-ho-ho".split("-");
console.log(papaiNoel)

console.log(saudar.toLowerCase()); //minúsculo 
console.log(saudar.toUpperCase()); //maiúsculo


