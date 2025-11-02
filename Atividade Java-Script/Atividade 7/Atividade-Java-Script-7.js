//Exercici 1

let entrada1 = "150.50";
let entrada2 = "200px";
let entrada3 = "abc";

console.log(Number.parseFloat(entrada1));
console.log(Number.parseFloat(entrada2));
console.log(Number.parseFloat(entrada3));

//Exercicio 2

let entrada21 = "10";
let entrada22 = "20.5";

let novoNumero21 = Number.parseFloat(entrada21);
let novoNumero22 = Number.parseFloat(entrada22);

console.log(novoNumero21 + novoNumero22);

//Exercicio 3

let entrada31 = 1234.56789;
console.log("valor formatado: " + entrada31.toFixed(2));

//Exercicio 4

let entrada41 = 12345.6789;
console.log(entrada41.toPrecision(4));

//Exercicio 5

let entrada51 = "123abc";
console.log("A entrada " + Number.isNaN(entrada51) + " não é um numero valido");

//Exercicio 6
