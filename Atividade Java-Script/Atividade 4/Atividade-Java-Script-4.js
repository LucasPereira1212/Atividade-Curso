//Exercicio 1

let Exercicio1 = "javascript é divertido";

console.log(Exercicio1.replace("javascript", "JAVASCRIPT"));

//Exercicio 2

let Exercicio2 = "Aprendendo Javascript";

let extrair = Exercicio2.substring(0, 10).toLowerCase();

console.log(extrair);

//Exercicio 3

let Exercicio3 = "Aprendendo Python";

console.log(Exercicio3.replace("Python", "JavaScript"));

//Exercicio 4

let Exercicio4 = "cadeira, mesa, sofá, armário";

let array = Exercicio4.split(",");

array.splice(array.indexOf("sofá"), 1);

console.log(array);
