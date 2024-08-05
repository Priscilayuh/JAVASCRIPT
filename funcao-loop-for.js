function palavra(string){
    for(var i = 0; i < string.length; i++){
        console.log(string[i])
        //vai acessar cada caracter na posição que meu iterador percorrer e exibi-lo
    }
}
palavra("bola")

//Meu loop continuará executando com base no número de posições da minha string funciona assim: 0 é menor que que o número de posições da minha string? Se sim, continue o looping

function cor(cor1){
    for(var i = 0; i < cor1.length; i++){
        
        if(cor1 === "amarelo"){
            console.log("Remete a alegria, entusiasmo")
        }
        break
    }
}
      

cor("amarelo");

function brincar(brinquedo, letra){
    for(var i = 0; i < brinquedo.length; i++){
        
        if(brinquedo[i] === letra){
            console.log("Encontrou o " + letra + " na posição " + i)
        }
        
    }
}
      

brincar("carrinho", "n");