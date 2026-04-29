function alerta() {
    alert("Olá mundo");
    let nome = "César Augusto";
    alert (nome);
    let num1 = 7;
    let num2 = 8;
    let soma = num1 + num2;
    alert(soma);
}
function divi() {
    document.getElementById("divi").style.backgroundColor = "rgb(8, 190, 245)";
}
function mudar8() {
    document.getElementById("mudar8").textContent = "Você clicou";
}
function apagar (){
    document.getElementById("apagar").textContent = ""
}

function mudar5(){
    document.getElementById("mudar5").textContent = "mudou tudo hehe";
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
    document.body.style.backgroundColor = "#7B1E3A";
}
function tamanho() {
    document.getElementById("tamanho").style.fontSize = "200%";
}
function azul() {
    document.getElementById("azul").style.color = "rgb(8, 190, 245)";
}
function texto() {
    document.getElementById("seila").textContent = "É O 67";
    document.getElementById("nsei").textContent = "É O CRISTIANO RONALDOOOO";
}

function texto2() {
    document.getElementById("seila2").textContent = "É O CÉSAR";
    document.getElementById("nsei2").textContent = "É O CÉSAR";
    document.getElementById("nsei3").textContent = "É O CÉSAR";
}
//Difíceis
function mudar() {
    document.getElementById('mudar').style.color = "rgb(8, 190, 245)";
    document.getElementById('mudar').style.fontSize = "200%";
    document.getElementById('mudar').textContent = "mudou tudo, viu?";
}
function mudamuda() {
    let caixa22 = document.getElementById('caixa22');
    let caixa3 = document.getElementById('caixa3');
    let par = document.getElementById('mudamuda').textContent;
    caixa3.value = par;
    caixa22.value = par;
}
function mudartudo1() {
    document.getElementById('mudartudu1').textContent = "sou o melhor de todos";
}
function mudartudo2() {
    document.getElementById('mudartudu1').style.color = "rgb(8, 190, 245)";
}
function mudartudo3() {
    document.getElementById('mudartudu1').style.fontSize = "200%";
}
function betano(){
    document.getElementById('verde').style.backgroundColor = "green";
    document.getElementById('vermelho').style.backgroundColor = "red";
}
function betano2() {
   document.getElementById("caixa4");
   document.getElementById("bebe").textContent = caixa4.value
   document.getElementById("bebe").style.color = "red";
}

 function clear() {
       document.getElementById("resultado").textContent = ""
    }