//Exercicio 1

let produtos = ["Produto A", "Produto B"];

produtos.push("Produto C");
console.log(produtos);
produtos.shift();
console.log(produtos);

//Exercicio 2

let produtos1 = ["Produto X", "Produto Y"];
let produto2 = ["Produto A", "Produto  B"];

produtos1.push("Produto Z");
console.log(produtos1.concat(produto2));

//Exercicio 3

let materias = ["Caderno", "Lápis", "Estojo"];
console.log(materias.includes("Lápis"));
console.log(materias.includes("Agenda"));

//Exercicio 4

let numeros = [2, 5, 8, 1];

console.log(numeros.some((numero) => numero > 7));

//Exercicio 5

let numeros2 = [4, 6, 8, 2];

console.log(numeros.every((numero) => numero > 3));
