//Resolução Exercicio 1

function media(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

const mediaAluno = media(9, 8, 10);
console.log("A média desse aluno foi: " + mediaAluno);

// Resolução Exercicio 2

function mediaRecuperativa(resultadoFinal) {
  return (mediaAluno + resultadoFinal) / 2;
}

const mediaFinal = mediaRecuperativa(10);

console.log("A média final desse aluno é: " + mediaFinal);

//Resoução Exercicio 3

function conversaoFarenheit(temperatura) {
  return (9 / 5) * temperatura + 32;
}

const temperaturaEmFarenheit = conversaoFarenheit(32);
console.log(
  "a temperatura correspondente em Farenheit é de " +
    temperaturaEmFarenheit +
    "ºF"
);

//Resolução Exercicio 4

function imposto(produto) {
  return produto + 0.8875;
}
const impostoPagar = imposto(10);
console.log("O valor a ser pago é: " + impostoPagar);
