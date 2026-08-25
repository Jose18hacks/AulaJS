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

const temp = Number(prompt("Digite a temperatura em Graus Celsius: "))

if (Number.isNaN(temp)) {
    console.log("Digite apenas Numeros")
} else if(temp < 0) {
    console.log("Muito frio")
} else if (temp >= 0 && temp >= 15) {
    console.log("Frio" || "Agradavel")
}