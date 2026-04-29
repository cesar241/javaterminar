function alerta() {
    alert("Olá mundo");
    let nome = "César Augusto";
    alert (nome);
    let num1 = 15;
    let num2 = 18;
    let soma = num1 + num2;
    alert(soma);
}
function mudar5(){
    document.getElementById("mudar5").textContent = "mudou tudo hehe"
}
//Médios
function funcao() {
    let par = document.getElementById("paragrafo");
    let cax = document.getElementById("caixa");
    let escrita = par.textContent;
    cax.value = escrita;
}
function soma() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let resultado = Number(num1) + Number(num2);
    let local = document.getElementById("resultado");
    local.textContent = resultado;
}
function cor() {
    document.body.style.backgroundColor = "#7B1E3A"
}
function tamanho() {
    document.getElementById("tamanho").style.fontSize = "200%"
}
function azul() {
    document.getElementById("azul").style.color = "rgb(8, 190, 245)"
}
function texto() {
    document.getElementById("seila").textContent = "É O 67"
    document.getElementById("nsei").textContent = "É O CRISTIANO RONALDOOOO"
}

function texto2() {
    document.getElementById("seila2").textContent = "É O CÉSAR"
    document.getElementById("nsei2").textContent = "É O CÉSAR"
    document.getElementById("nsei3").textContent = "É O CÉSAR"
}
//Difíceis
function mudar() {
    document.getElementById('mudar').style.color = "rgb(8, 190, 245)"
    document.getElementById('mudar').style.fontSize = "200%"
    document.getElementById('mudar').textContent = "mudou tudo, viu?"
}