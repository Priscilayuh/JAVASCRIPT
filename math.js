/*Math é um objeto interno do JavaScript.
Propriedades e Métodos do Objeto Math*/

//Constante Númericas

console.log(Math.PI)//número de PI
console.log(Math.E) //constante de Euler
console.log(Math.LN2)//logaritimo natural de 2

//Métodos de arredondamento

console.log(Math.ceil(1.2))//arredonda pra cima até o número inteiro mais próximo

console.log(Math.floor(3.5))//arredonda pra baixo, para o número inteiro mais próximo
console.log(Math.round(5.5))//arredonda para cima até o inteiro mais próximo se o decimal for.5 ou superior; caso contrário, arredonda para baixo até o inteiro mais próximo
console.log(Math.round(5.8))
console.log(Math.round(5.3))

console.log(Math.trunc(8.1))//apara o decimal, deixando apenas o número inteiro

//Métodos aritméticos e de cálculo

console.log(Math.pow(2,3));//

console.log(Math.sqrt(16));//calcula a raiz quadrada de16, o resultado é 4

console.log(Math.cbrt(8));//encontra a raiz cúbica de8, o resultado é 2

console.log(Math.abs(-10));// retorna o valor absoluto, o resultado é10

console.log(Math.log(5), Math.log2(2), Math.log10(4));//métodos logarítmicos

console.log(Math.min(9,8,7));
console.log(Math.max(9,8,7));

//métodos trigonométricos
console.log(Math.sin(10), Math.cos(2), Math.tan(3));


