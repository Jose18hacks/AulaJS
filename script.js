//Linguagem Interpretada
//Node.js
//Tipagem Fraca

//Condicionais (if, else, operadores lógicos)

/*const idade = 20;
const temDocumento = true;
const estaLista = true;

if (idade >= 18 && temDocumento && estaLista) {
    console.log("Pode entrar!!");
} else {
    console.log("Acesso Negado!!")
}

const temDinheiro = false;
const temCartao = true;
const temPix = false;

if (temDinheiro || temCartao || temPix) {
    console.log("Pode pagar")
} else {
    console.log("Nao pode pagar")
}

/*const user = "admin";
const senha = "1234";

const senhaCorreta = (senha === "1234");
const ehAdmin = (usuario === "admin");
const ehGerente = (usuario === "gerente");

if ((ehAdmin && senhaCorreta) || (ehGerente && senhaCorreta)) {
    console.log("Acesso liberado!")
} else {
    console.log("Acesso negado!")
}

if ((ehAdmin || ehGerente) && senhaCorreta) {

} else {

}*/

/*const usuario = prompt("Usuario:");
const senha = prompt("Senha:");

const acessoAdmin = (usuario === "jose" && senha === "2508");
const acessUser= (usuario === "user" && senha === "1234");

if (acessoAdmin || acessUser) {
    console.log("Acesso liberado")
} else {
    console.log("Acesso Negado")
} */

/*const nota = 60;

if (nota >= 80) {
    console.log("Aprovado!");
} else if (nota >= 60) {
    console.log("Recuperacao!");
} else {
    console.log("Reprovado!");
} */

/*const temp = Number(prompt("Digite a temperatura em Graus Celsius: "))

if (Number.isNaN(temp)) {
    console.log("Digite apenas Numeros")
} else if(temp < 0) {
    console.log("Muito frio")
} else if (temp >= 0 && temp < 15) 
    console.log("Frio");
     else if (temp > 15 && temp <= 26) {
    console.log("Agradável"); // Agora inclui o 26
} else if (temp > 26 && temp <= 32) {
    console.log("Quente");
} else {
    console.log("Muito quente"); // Captura tudo acima de 32
} */

/*const nome = prompt("Digite seu nome: ")
console.log("Olá," + nome + "!") */

/*let peso = Number(prompt("Digite o peso (Kg)"))
let altura = Number(prompt("Digite a altura (M)")) */

//let resultado = numero1 + numero2
//let media = (numero1 + numero2) /2
 
/*let imc = peso / altura ** 2

if (imc <=18) {
    console.log("Abaixo do peso")
} 
else if (imc > 18 && imc <=24){
    console.log("Normal")
} 
else {
    console.log("Sobrepeso")
}

console.log(imc.toFixed(2))
alert(imc.toFixed(2)) */

// && -> condicao: todas as condicoes devem ser TRUE

// || -> se alguma condicao for certa, vai entrar no IF

// ! -> significa NAO. Ele inverte o valor do boleano

/*console.log(!true) //false

let idade = 12;
 //se NAO idade maior ou igual a 18
if (!(idade >=18)){

    console.log("Não é Maior de idade")
} */

//EXERCICIOS DE JAVASCRIPT SENAI



// Nível 1 Fácil



/*1. Verificar maioridade

Crie um programa que solicite a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade. */

/*const idade = Number(prompt("Digite sua idade: "))

if (idade >= 18){
     console.log("Você é MAIOR de idade!")
    }
else {
  console.log("Você é MENOR de idade!")
    } */



 /* 2. Positivo ou Negativo
Solicite um número ao usuário e informe se ele é positivo ou negativo. Considere o número 0 como negativo.
 */

/*const num = Number(prompt("Digite um número: "))

if (num <= 0) {
    console.log("Esse número é NEGATIVO")
}
else {
    console.log("Esse número é POSITIVO")
} */


/*3. Aprovação em uma prova
Peça ao usuário a nota final de um aluno (de 0 a 100). Caso a nota seja 60 ou maior, informe que ele foi Aprovado. Caso contrário, informe que foi Reprovado. */

/*const nota = Number(prompt("Digite a nota do aluno: "))

if (nota >= 60) {
    console.log("Aluno Aprovado!")
} else {
    console.log("Aluno Reprovado!")
} */


    /*4. Positivo, Negativo ou Zero
Leia um número informado pelo usuário e indique se ele é:
Positivo; 
Negativo; 
Zero.  */


/*const num = Number(prompt("Digite um número: "))

if (num < 0) {
    console.log("Esse número é NEGATIVO")
}
else if (num > 0){
    console.log("Esse número é POSITIVO") 
}
else {
    console.log("Número ZERO")
} */

    /*5. Classificação por idade
Solicite a idade de uma pessoa e classifique-a conforme as regras abaixo:
Criança: de 0 a 12 anos; 
Adolescente: de 13 a 17 anos; 
Adulto: 18 anos ou mais. */


/*const idade = Number(prompt("Digite sua idade: ")

if (idade <0){
    
    console.log("Idade inválida")

} else if (idade >= 0 && idade <=12) {

    console.log(idade, "Ano(s), Você é uma criança!")

} else if (idade >12 && idade <=17) {

    console.log(idade, "Anos, Você é um adolescente!")
} else {

    console.log(idade, "Anos, Você é maior de idade!")
} */


    /*6. Par ou Ímpar
Solicite um número inteiro ao usuário e informe se ele é par ou ímpar. */

/*const num = Number(prompt("Digite um número: "))

if (num %2 == 0){

    console.log("Número Par")

} else {

    console.log("Número Ímpar")
} */



    //Nivel 2 Intermediário



    /*1. Calculadora simples
Crie uma calculadora que:
Solicite o primeiro número; 
Solicite a operação desejada (+, -, * ou /); 
Solicite o segundo número. 
Ao final, exiba o resultado da operação escolhida. Caso seja informada uma operação inválida, exiba uma mensagem de erro. */

/*let num1 = Number(prompt("Digite o Primeiro número: "));
let operacao = prompt("Digite a operação desejada: ");
let num2 = Number(prompt("Digite o Segundo Número: "));

if (operacao !=="+" && operacao !== "-" && operacao !== "*" && operacao !==  "/") {

    console.log ("Operção Inválida")

} else if (operacao === "+") {

    console.log(num1 + num2)

} else if (operacao === "-") {

    console.log(num1 - num2)

} else if (operacao === "*") {

    console.log(num1 * num2)

} else {
    
    console.log(num1 / num2)
} */



    /*2. Maior entre três números
Solicite três números diferentes ao usuário e informe qual deles é o maior.*/


/*const num1 = Number(prompt("Digite o Primeiro Número"))
const num2 = Number(prompt("Digite o Segundo Número"))
const num3 = Number(prompt("Digite o Terceiro Número"))

if (num1 >= num2 && num1 >= num3) {

    console.log(num1, "É maior")

} else if (num2 >= num1 && num2 >= num3) {

    console.log(num2, "É maior")

} else {

    console.log(num3, "É maior")
} */


    /*3. Desconto em compras
Uma loja oferece 10% de desconto para compras acima de R$ 100,00.
Solicite o valor da compra e informe o valor final que deverá ser pago.
Caso a compra não atinja esse valor, informe o preço sem desconto. */


/*const valor = Number(prompt("Digite o valor"));
let total;

if (valor > 100) {

    total = valor * 0.10;
    valor = valor - total;
    console.log("O valor final do produto com 10% de desconto será de R$" ,valor.toFixed(2))

} else {
    console.log("O valor do produto é de R$" ,valor)
} */



    /*4. Sistema de login
Crie um programa que solicite um nome de usuário e uma senha.
Considere que:
Usuário: admin 
Senha: 1234*/



/*const user = prompt("Digite o Nome de Usuário: ")
const senha = prompt("Digite a Senha: ")

if (user !== "admin" || senha!== "1234") {
    alert("Acesso Negado!")
} else {
    alert("Login bem-sucedido!")
} */



    /*Nivel 3 Dificil



    1. Classificação de triângulos
Solicite ao usuário os comprimentos dos três lados de um possível triângulo.
Primeiro, verifique se os valores realmente podem formar um triângulo.
Caso possam, classifique-o como:
Equilátero (todos os lados iguais); 
Isósceles (dois lados iguais); 
Escaleno (todos os lados diferentes). 
Caso não seja possível formar um triângulo, informe isso ao usuário.*/




/*let l1 = Number(prompt("Digite o Primeiro lado"))
let l2 = Number(prompt("Digite o Segundo lado"))
let l3 = Number(prompt("Digite o Terceiro lado"))
  
if ((l1 < l2 + l3) && (l2 < l1 + l3) && (l3 < l1 + l2) ) {
    console.log ("É possiível formar esse triângulo")
    if (l1 === l2 && l2 === l3) {

        console.log("Triângulo Equilátero")

    } else if (l1 === l2 || l2 === l3 || l1 === l3) {

        console.log("Triângulo Isóceles")
    } else {
        
        console.log("Triângulo Escaleno")
    }
    
} else {

    alert("Impossível Formar o triângulo")
} */




    /*2. Conversão de notas (Conceitos)
Solicite uma nota entre 0 e 100 e converta-a para um conceito conforme a tabela abaixo:
A: 90 a 100 
B: 80 a 89 
C: 70 a 79 
D: 60 a 69 
F: abaixo de 60 
Exiba o conceito correspondente.*/




/*let nota = Number(prompt("Digite a nota do aluno: "))
if (nota > 100 || nota < 0) {

    alert("Nota Inválida")

} else if (nota <60 ) {
    
    console.log("F")

} else if (nota >= 60 && nota <=69) {

    console.log("D")
}
 else if (nota >= 70 && nota <=79) {

    console.log("C")

}
 else if (nota >= 80 && nota <=89) {

    console.log("B")
}
 else {

    console.log("A")
} */


/*3. Cálculo de IMC
Solicite o peso (em quilogramas) e a altura (em metros) de uma pessoa.
Calcule o Índice de Massa Corporal (IMC) e informe sua classificação:
Abaixo do peso 
Peso normal 
Sobrepeso 
Obesidade */







/*4. Ano Bissexto
Solicite ao usuário um ano e informe se ele é bissexto ou não bissexto.
Considere as seguintes regras:
Um ano é bissexto se for divisível por 400; ou 
Se for divisível por 4 e não for divisível por 100. 
Caso contrário, o ano não é bissexto.*/

/*const ano = Number(prompt("Digite o Ano: "))

//se o resto da divisao por 4 for igual a 0, o ano é bissexto
//se o resto da divisao de ano por 100 é diferente de zero

//ou o resto da divisao de ano por 400 é igual a zero


if ( (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(ano + " É um ano bissexto")
}
else {
    alert(ano + " NÃO é um ano bissexto")
}*/










//Laços de Repetição
//perimite criar loops que são executados zero ou mais vezes
//Enquanto condicao for TRUE, executa bloco de código

/*while (false){
    console.log("Ao infinito e... Além!")
}*/


//contador que exiba na tela de 1 a 5

/*let contador = 1;

while (contador <=5){

    console.log("Contagem: " + contador)

    //contador = (contador + 1) contador recebe ele +1

    contador++ //contador recebe ele +1
}*/

//contagem regressiva


/*let tempo = 10;

while (tempo > 0){

    console.log(tempo)

    //tempo = tempo -1 Retira 1 do tempo
    tempo-- //Retira -1 do tempo

}*/


//validacao de senha

//const senhaCorreta = "148supersenha"
/*let tentativa =""


while (tentativa != senhaCorreta){

    tentativa = prompt("Digite a Senha: ")

    if(tentativa === senhaCorreta)
        console.log("Senha correta! Acesso liberado.")

    else {
        console.log("Senha incorreta. Tente novamente")
    }
}*/


/*let soma = 0;
let numero = 0;

while (soma <=100){

     numero = Number(prompt("Digite um Número: "));

     soma = soma + numero;
}

console.log("A soma dos numeros chegou em " + soma);*/




//DO - WHILE Perimite criar loops que são executados uma ou mais vezes



/*let repetir = false

//FAÇA
do{
    console.log("Só uma vez.")

}while(repetir) //ENQUANTO A CONDIÇÃO FOR TRUE


//WHILE vs DO..WHILE

let num = 10;

while (num < 5){
    console.log("Isso não vai aparecer")
}
////////////////////////////////////////////

do{
    console.log("Isso vai aparecer uma vez")
}while(num < 5)*/






//ADVINHE O NUMERO


//1 a 100

const numeroSecreto = Math.floor(Math.random() * 10) +1;

let palpite;
let tentativas = 0;

console.log("Advinhe o numero entre 1 a 10.");


do{

    //alert(Math.floor(Math.random() * 10) +1)

    palpite = Number(prompt("Seu palpite: "));
    tentativas++

    if (Number.isNaN(palpite)){
        alert("Digite um número válido")
    }

    else if (palpite == numeroSecreto){
        alert("Acertou!! " + tentativas + " tentativas");
    }
    else if(palpite < numeroSecreto){
        alert("Muito baixo, tente um número maior");
    }
    else if(palpite > numeroSecreto){
        alert("Muito alto, tente um número menor");
    }

}while(palpite != numeroSecreto)