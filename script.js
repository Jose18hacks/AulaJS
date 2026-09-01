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


//1 a 10

/*const numeroSecreto = Math.floor(Math.random() * 10) +1;

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

}while(palpite != numeroSecreto)*/






//FOR -> LOOP




//let conta = 0; Variavel de controle

//conta < 10; analise de condicao

//conta++ O que acontece na variável de controle


/*for (let conta = 0; conta < 10; conta++){
    console.log(conta)

}
console.log("O loop acabou")*/





/*const numero = Number(prompt("Tabuada de qual numero? "));

if (Number.isNaN(numero)){
    console.log("❌ Numero inválido! ");
}
else {

    //console.log("Tabuada do " + numero) MESMA COISA ABAIXO
    console.log(`\n Tabuada do ${numero} \n`); //OUTRO JEITO DE JUNTAR STRING COM VARIAVEL

    for ( let i = 1; i<=10;  i++ ){

        const resultado = numero * i;
        //console.log(numero + " x " + i + " = " + resultado)
        console.log(`${numero} x ${i} = ${resultado}`);
    }
}
console.log("FIM")*/



//EXIBA NUMEROS PARES DE 0 A 20


/*console.log("Numeros Pares de 0 a 20: \n")

//pares = pares +2 MESMO CODIGO DE OPERACAO

for( let pares=0; pares<=20; pares += 2  ){

    console.log(pares)
}*/



//CONTAGEM REGRESSIVA COM FOR

/*console.log("Lancamento em: \n")

for (let conta = 10; conta >= 1; conta--){
    console.log(conta + "...")
}
console.log("DECOLAR!!")*/



/*for (let numero = 1; numero <= 3; numero++){

    let linha = "";

    for (let repeticao = 1; repeticao <= 3; repeticao ++){
        linha += numero + " "
    }

    console.log(linha)

}*/


/*for (let linha = 1; linha <=5; linha ++){

    let coluna = ""
    
    for (asterisco = 1; asterisco <= linha; asterisco ++){
        coluna += "*" + " "
    }
    console.log(coluna)
}*/








//EXERCICOS DE REPETIÇÃO





//NIVEL 1 FACIL





/*1. Contagem de 1 a 10
Crie um programa que exiba todos os números de 1 até 10, um por linha.*/


/*num = 0

while (num < 10){
    num += 1
    console.log(num)
}*/






/*2. Tabuada de um número
Solicite um número ao usuário e exiba sua tabuada de multiplicação de 1 a 10.
Exemplo para o número 5:
5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50*/


/*const num = Number(prompt("Digite um numero para ver sua tabuada: "))

if (Number.isNaN(num)){

    console.log("Numero Inválido!");
}
else {

    console.log(`Tabuada do ${num}`)

    for (let i=1; i<=10; i++){
        
        let resultado = num * i

        console.log(`${num} x ${i} = ${resultado}`)
    }

}*/






/*3. Soma dos primeiros N números
Solicite um número inteiro positivo ao usuário e calcule a soma de todos os números de 1 até esse valor.
Exemplo:
Entrada: 5 
Saída: 15 
(1 + 2 + 3 + 4 + 5 = 15)*/

/*const numero = Number(prompt("Digite um numero e veja a soma de seus antecessores: "))

if (Number.isNaN(numero)){
    alert("Numero Invalido")
}
else {
    let soma = 0

    for (let i = 1; i <= numero; i++){
        soma += i
       
    }
     console.log(soma)
}*/









//NIVEL 2 INTERMEDIARIO







 /*4. Números pares de 1 a 50
Exiba todos os números pares entre 1 e 50, um por linha.*/



/*console.log("Numeros pares de 1 a 50")

for(let pares = 1; pares <=50; pares++){

    if (pares %2==0){

        console.log(pares)
    }
    
}*/




/*5. Jogo de adivinhação
Crie um programa que gere um número aleatório entre 1 e 100.
O usuário deverá informar palpites até acertar o número.
Durante o jogo:
Se o palpite for maior que o número secreto, informe que o número é menor. 
Se o palpite for menor que o número secreto, informe que o número é maior. 
Quando acertar, exiba uma mensagem de parabéns e encerre o programa. */



/*const numeroSecreto = Math.floor(Math.random() * 100) + 1; 
let palpite; 
let tentativas = 0; 

console.log("Adivinhe o número entre 1 e 100."); 

do { 
    palpite = Number(prompt("Seu palpite:")); 
    
    if (Number.isNaN(palpite)) { 
        alert("Digite um número válido"); 
        continue; // Pula para a próxima iteração sem contar tentativa
    } 
    
    tentativas++; 

    if (palpite === numeroSecreto) { 
        alert("Acertou!! Você precisou de " + tentativas + " tentativa(s)."); 
    } else if (palpite < numeroSecreto) { 
        alert("Muito baixo, tente um número maior"); 
    } else if (palpite > numeroSecreto) { 
        alert("Muito alto, tente um número menor"); 
    } 
} while (palpite !== numeroSecreto);*/



/*6. Solicite um número inteiro ao usuário e faça uma contagem regressiva até 0, exibindo cada número.
Exemplo:
Entrada:
5
Saída:
5
4
3
2
1
0*/




//Nivel 3 Dificil




/*let entrada;

while (true) {
    entrada = Math.floor(Number(prompt("Digite um Número para a contagem Regressiva: ")));

    if (!Number.isNaN(entrada) && entrada >= 0) {
        break;
    }
    
    alert("Entrada inválida! Por favor, digite um número válido.");
}

for (let conta = entrada; conta >= 0; conta--) {
    console.log(conta);
}*/


/*7. Soma dos dígitos
Solicite um número inteiro positivo ao usuário e calcule a soma de todos os seus dígitos.
Exemplo:
Entrada: 1234 
Saída: 10 
(1 + 2 + 3 + 4 = 10)*/


/*let numero;

while (true) {
    numero = prompt("Digite um número inteiro positivo para somar seus dígitos: ");

    if (!Number.isNaN(Number(numero)) && Number(numero) > 0) {
        break;
    }
    alert("Entrada inválida! Por favor, digite um número válido.");
}
let soma = 0;
for (let i = 0; i < numero.length; i++) {
    let digito = Number(numero[i]);
    soma += digito;
}
console.log(soma);*/




/*8. Fatorial
Solicite um número inteiro positivo ao usuário e calcule o seu fatorial.
O fatorial de um número é obtido multiplicando esse número por todos os inteiros positivos menores que ele, até chegar em 1.
Exemplo:
5! = 5 × 4 × 3 × 2 × 1 = 120 
4! = 4 × 3 × 2 × 1 = 24 
3! = 3 × 2 × 1 = 6 
Ao final, exiba o resultado do cálculo. */

/*let numero = Number(prompt("Digite um número inteiro positivo para calcular seu fatorial: "));

if (Number.isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
    alert("Entrada inválida! Por favor, digite um número inteiro positivo.");
} else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
} */


    /*9. Inverter número
Solicite um número inteiro positivo ao usuário e exiba esse número com seus dígitos na ordem inversa.
Exemplo:
Entrada: 12345 
Saída: 54321 */


/*let numero;

while (true) {
    numero = Number(prompt("Digite um número inteiro positivo para inverter seus dígitos: "));
    if (!Number.isNaN(numero) && numero >= 0 && Number.isInteger(numero)) {
        break;
    }
    alert("Entrada inválida! Por favor, digite um número válido.");
}

let numeroInvertido = 0;

while (numero > 0) {

    let digito = numero % 10; 
    numeroInvertido = numeroInvertido * 10 + digito; 
    numero = Math.floor(numero / 10); 
}
console.log(numeroInvertido);*/




/*10. Números perfeitos até 1000
Um número perfeito é aquele cuja soma de todos os seus divisores positivos, exceto ele mesmo, é igual ao próprio número.
Exemplo:
Divisores de 6: 1, 2 e 3 
1 + 2 + 3 = 6 
Crie um programa que encontre e exiba todos os números perfeitos entre 1 e 1000. */

//console.log("Números perfeitos entre 1 e 1000:");

// for (let num = 1; num <= 1000; num++) {

//     let somaDivisores = 0;

//     for (let i = 1; i < num; i++) {

//         if (num % i === 0) {

//             somaDivisores += i;
//         }
//     }
//     if (somaDivisores === num) {

//         console.log(num);
//     }
// }












//ARRAY
//UM ARRAY É UM TIPO DE DADOS QUE SERVE PARA ARMAZENAR VALOR
//SEQUENCIALMENTO EM FORMA DE LISTA.

//ITENS COMEÇAM COM NÚMERO ZERO.

// const numeros = [1, 2, 3, 4, 5];
// const nomes = ["José", "Maria", "João", "Ana", "Pedro", "Alexandre", "Carla", "Lucas", "Fernanda", "Rafael"];


// console.log(numeros[0]); // Acessa o primeiro elemento do array "numeros"
// console.log(nomes[2]); // Acessa o terceiro elemento do array "nomes"

// //LENGTH
// //É UMA PROPRIEDADE QUE RETORNA O TAMANHO DO ARRAY.

// console.log(nomes.length);


// //VAMOS PERCORRER TODA A LISTA DE NOMES E EXIBIR CADA UM DELA NA TELA.
// //E COLOCAR NO CONSOLE CADA ITEM.

// for (let i = 0; i < nomes.length; i++) {

//     console.log(nomes[i]);
// }



//FOR OF
//É UMA FORMA MAIS SIMPLES DE PERCORRER UM ARRAY.

// const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];

// for ( const fruta of frutas) {
//     console.log(fruta);
// }



//FACA A SOMA DE TODOS OS NUMEROS DENTRO DE UM ARAAY

// const listaNumeros = [10, 25, 8, 42, 15, 7];

// let soma = 0;

// for (const numero of listaNumeros) {
//     soma += numero;
// }
// console.log("Numeros ", listaNumeros)
// console.log("Soma ", soma)




const notas = [7.5, 9.0, 6.5, 8.8, 10.0, 5.5];

let maiorNota = notas[0];

for (const nota of notas) {
    if (nota > maiorNota) {
        maiorNota = nota;
    }
}
console.log("Maior nota: ", maiorNota);