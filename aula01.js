function submit(){
    const text = document.getElementById("emailInput").value;
    document.querySelector("p").innerHTML = "Um email com um link foi enviado para " + text;
}
