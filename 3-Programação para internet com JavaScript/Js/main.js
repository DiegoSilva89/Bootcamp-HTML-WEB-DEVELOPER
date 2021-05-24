

function clicou(){
    document.getElementById("Agradecimento").innerHTML = "Obrigado por clicar";
    //console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://ringabell.com.br/");
    //window.location.href = "https://ringabell.com.br/";
}


function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar";
    //alert("trocar texto");

}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}


function funcaoChange(elemento){
console.log(elemento.value);

}


/*function soma(n1, n2){
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*var count;
for(count=0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/*var idade = prompt("Qual sua idade");
if (idade <= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
}
*/

/*var frutas = [{nome:"maça", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var frutas = {nome:"maça", cor:"vermelha"}
console.log(frutas.nome);
alert(frutas.cor);
*/

//var lista = ["maça", "pêra", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));

//var nome = "Diego Silva";
//var idade = 31;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão", "Brasil"));
//console.log(frase.toUpperCase());
//console.log(frase.toLowerCase());
//alert(frase.replace("Japão", "Brasil"));
