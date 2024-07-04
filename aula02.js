function share(){
    const entradaTextarea = document.getElementById("postText").value;
    const paragrafo = document.getElementById("post"). innerHTML = entradaTextarea;
}
function enviarAvaliacao(){
    const nomeCliente = document.getElementById("nomeCliente").value;
    const experienciaText = document.getElementById("experienciaText").value;
    const acessarExperiencia = document.getElementById("acessarExperiencia").innerHTML = "Nome: " + nomeCliente  + "<br>"+ "Sua experiência: " + experienciaText;
}