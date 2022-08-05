//alert("Aqui está a funcionar");
var info="Agora estou na console";

function soma(a, b) {
    if (a<0) {
        console.log(a+" é negativo.");        
        
    }
    return a+b;
    
}
console.log(info);
console.log(soma(-2,2));

function clique(){
    document.getElementById("agradecimento").innerHTML = "Muito obrigado por clicar!";
}

function redir() {
    window.open("https://www.instagram.com/pedro_artss/");
    window.location.href = "https://www.instagram.com/pedro_artss/"
}

function trocar(elemento) {
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
    elemento.innerHTML = "passe o cursor";
    
}