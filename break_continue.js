//BREAK -> Parar de percorrer a lista

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const procurado = 5;

// for(const num of numeros){

//     console.log(`Número atual: ${num}`);
//     if(num === procurado){
//         console.log(`Número ${procurado} encontrado!`);
//         break; // Para de percorrer a lista
//     }
// }
// console.log('Fim do loop');


//CONTINUE -> Pular para o próximo item da lista

// console.log("Números Impares de 1 a 10");

// for (let i = 1; i <= 10; i++) {

//     //i %2 === 0 -> Se o número for par, pule para o próximo item da lista
//     if (i % 2 === 0) {
//         continue; // Pula todo o restante do código
//     }
//     console.log(i);
// }

// const nomes = ["João", "Maria", "José", "Ana", "Pedro"];

// nomes.reverse() //inverte a ordem da lista

// console.log(nomes);


const alunos = [
    { nome: "João", Nota: 7.5 },
    { nome: "Maria", Nota: 8.0 },
    { nome: "José", Nota: 6.5 },
    { nome: "Ana", Nota: 9.0 },
    { nome: "Pedro", Nota: 7.0 },
    { nome: "Lucas", Nota: 5.5 },
    { nome: "Carla", Nota: 10.0 },
    { nome: "Fernanda", Nota: 2.5 },
];

for (const aprovado of alunos) {
    if (aprovado.Nota < 7) {
        continue;
    }
    console.log(`Aluno(a) ${aprovado.nome} aprovado(a) com nota ${aprovado.Nota}`);
}