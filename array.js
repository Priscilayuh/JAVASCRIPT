var plantas = ["Samambaia","Cróton","Suculentas", "Bromélias"]

//Método push() para adicionar itens no array
plantas.push("Orquídea")
console.log(plantas)
plantas.push("Begônia", "Cacto")
console.log(plantas)

var ferramentas = [];
ferramentas.push("martelo", "alicate", "tesoura", "prego")
console.log(ferramentas)

//Método pop() remove o último item do array

ferramentas.pop();
console.log(ferramentas)

//Arrays podem ser iteraveis

var vegetais = ['cebola', 'salsa', 'cenoura']
console.log(vegetais.length);
console.log(vegetais[0]);
console.log(vegetais[1]);

for(var i = 0; i < vegetais.length; i++){
    console.log(vegetais[i]);
}

//loop for em array 
var letras = ['a', 'b', 'c'];

for(var i = 0; i < letras.length; i++){ /*length retorna o número de itens no array*/
    console.log(letras[i]); 
}
//loop for em string (as strings se comportam como arrays, mas não são arrays. Prova disso é que alguns métodos de arrays como o pop() por exemplo, gera erro ao tentar usá-lo)

var vogais = 'aeiou';

for(var i = 0; i < vogais.length; i++){
    console.log(vogais[i]);
}
var greeting = 'Howdy';
console.log(greeting.length);
console.log(greeting[0]);
console.log(greeting[1]);
//iterando string
for(var i = 0; i< greeting.length; i++){
    console.log(greeting[i]);
    /*imprime cada caracter da minha cadeia de caracteres(string)*/
}

var greet = "Hello";
var user = "Lisa";
console.log(greet + " " + user)
console.log(greet.concat(" " + user));
