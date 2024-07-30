//CRIANDO FUNÇÃO SEM PARÂMETRO
function semParametros() {
    var a = 3;
    var b = 6;
    var c = a * b
    console.log(c)
    //atribui valores fixos dentro do corpo da função

}
semParametros()

//CRIANDO FUNÇÃO COM PARÂMETRO
function comParametro(a, b) {
    var multiplicacao = a * b;
    console.log(multiplicacao);
    //declaro uma função com parâmetros e chamo uma função com argumentos.
}
comParametro(70, 80)
comParametro(30, 2)
//posso enviar variáveis valores de argumentos para minha função!!

function mudarCor(){
    const h1 = document.querySelector("h1");
    h1.style.color = "red";
}