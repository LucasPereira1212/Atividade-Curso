//////////////////////////////////Atividade 1//////////////////////////////

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar(5, 3));

//////////////////////////////////Atividade 2//////////////////////////////

// let Nomes = ["Ana", "Elias", "Carlos", "Beatriz"];

// function ordenarNomes(Nomes) {
//   return Nomes.sort();
// }

// console.log(ordenarNomes(Nomes));

//////////////////////////////////Atividade 3//////////////////////////////

// function comprarValores(v1, v2) {
//   if (v1 && v2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(comprarValores(0, "Texto"));

//////////////////////////////////Atividade 4//////////////////////////////

// function calcuarRendimento(n1, n2) {
//   let rendimento = n2 / 100;
//   return rendimento * n1;
// }

// console.log(calcuarRendimento(1000, 5));

//////////////////////////////////Atividade 5//////////////////////////////

// let frase = "Esta é uma frase de exemplo";

// function dividirFrase(frase) {
//   return frase.split(" ");
// }

// console.log(dividirFrase(frase));

//////////////////////////////////Atividade 6//////////////////////////////

// function calcularPontos(v, e) {
//   let totalPontos = 0;
//   totalPontos += v * 3;
//   totalPontos += e * 1;
//   return totalPontos;
// }

// console.log(calcularPontos(5, 2));

//////////////////////////////////Atividade 7//////////////////////////////

// function contarVogais(frase) {
//   let contador = 0;
//   for (let i = 0; i < frase.length; i++) {
//     const letra = frase[i].toLowerCase();
//     if (
//       letra === "a" ||
//       letra === "e" ||
//       letra === "i" ||
//       letra === "o" ||
//       letra === "u"
//     ) {
//       contador++;
//     }
//   }
//   return contador;
// }

// console.log(contarVogais("Ola, tudo bem"));

//////////////////////////////////Atividade 8//////////////////////////////

// let gasto = [10, 5, 20, 15];

// function maiorGasto(gasto) {
//   return Math.max(...gasto);
// }

// console.log(maiorGasto(gasto));

//////////////////////////////////Atividade 9//////////////////////////////

// let numeros = [10, 20, 30, 40];

// function calcularMedia(numeros) {
//   let totalNumero = 0;
//   for (let i = 0; i < numeros.length; i++) {
//     totalNumero += numeros[i];
//   }
//   return totalNumero / numeros.length;
// }

// console.log(calcularMedia(numeros));

//////////////////////////////////Atividade 10/////////////////////////////

// function ehPalindromo(palavra) {
//   let palavraInvertida = "";
//   for (let index = palavra.length - 1; index >= 0; index--) {
//     palavraInvertida += palavra[index];
//   }
//   return palavra === palavraInvertida;
// }

// console.log(ehPalindromo("cachorro"));
//////////////////////////////////Atividade 11/////////////////////////////

// function ehPrimo(numero) {
//   if (numero <= 1) return false;

//   for (let i = 2; i < numero; i++) {
//     if (numero % i === 0) return false;
//   }
//   return true;
// }

// console.log(ehPrimo(4));

//////////////////////////////////Atividade 12/////////////////////////////

// function contarPalavras(frase) {
//   let contador = 0;
//   const palavras = frase.trim().split(" ");

//   for (let i = 0; i < palavras.length; i++) {
//     if (palavras[i] != "") {
//       contador++;
//     }
//   }
//   return contador;
// }

// console.log(contarPalavras("Ola, tudo bem"));

//////////////////////////////////Atividade 13/////////////////////////////

// function calcularDistancia(distancia1, distancia2) {
//   if (distancia1 < distancia2) {
//     return "Pessoa 1";
//   } else if (distancia1 > distancia2) {
//     return "Pessoa 2";
//   } else {
//     return "Ambas estão na mesma distancia";
//   }
// }

// console.log(calcularDistancia(20, 20));

//////////////////////////////////Atividade 14/////////////////////////////

// const despesas = [150, 80, 200, 60, 120];

// function controeDespesas(despesas) {
//   const resultado = [];

//   for (let despesa of despesas) {
//     if (despesa > 100) {
//       resultado.push("Alto gasto");
//     } else {
//       resultado.push("Gasto controlado");
//     }
//   }
//   return resultado;
// }

// console.log(controeDespesas(despesas));

//////////////////////////////////Atividade 15/////////////////////////////

// const investimentos = [5000, 2000, 15000];
// const nome = "Maria";

// function gerarListaInvestimento(investimento, nome) {
//   if (investimento.lenth === 0) {
//     return "Vazio";
//   }
//   const lista = [];
//   for (let investimento of investimentos) {
//     lista.push({ investimento: investimento, nome: nome });
//   }

//   lista.sort((a, b) => (a.investimento > b.investimento ? 1 : -1));

//   return lista;
// }

// console.log(gerarListaInvestimento(investimentos, nome));

//////////////////////////////////Atividade 16/////////////////////////////

const fraseCodificar = "a casa e o sol um dia lindo";
const resultado = codificar(fraseCodificar);
const fraseDecodificar = "1 c1s1 2 4 s4l";
// const resultado2 = decodificar(fraseDecodificar);

function codificar(frase) {
  let resultado = frase;

  //   resultado = resultado.replace("a", "1");
  while (resultado.includes("a")) {
    resultado = resultado.replace("a", "1");
  }

  while (resultado.includes("e")) {
    resultado = resultado.replace("e", "2");
  }

  while (resultado.includes("i")) {
    resultado = resultado.replace("i", "3");
  }

  while (resultado.includes("o")) {
    resultado = resultado.replace("o", "4");
  }

  while (resultado.includes("u")) {
    resultado = resultado.replace("u", "5");
  }

  return resultado;
}

// console.log(codificar(fraseCodificar));

function decodificar(frase) {
  let resultado = frase;

  while (resultado.includes("1")) {
    resultado = resultado.replace("1", "a");
  }

  while (resultado.includes("2")) {
    resultado = resultado.replace("2", "e");
  }

  while (resultado.includes("3")) {
    resultado = resultado.replace("3", "i");
  }

  while (resultado.includes("4")) {
    resultado = resultado.replace("4", "o");
  }

  while (resultado.includes("5")) {
    resultado = resultado.replace("5", "u");
  }

  return resultado;
}

const fraseParaDecodificar = codificar(fraseCodificar);

//console.log(decodificar(fraseDecodificar));
//console.log(decodificar(fraseParaDecodificar));

// Expressões regulares - Regex [a-z] [A-Z]

//Refatoração 25 linhas código - 10 linhas
function codificarRegex(frase) {
  let resultado = frase
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
  return resultado;
}

console.log(codificarRegex(fraseCodificar));

function decodificarRegex(frase) {
  let resultado = frase
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
  return resultado;
}

console.log(decodificarRegex(fraseParaDecodificar));

// Documentação MDN - Expressões regulares : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions
