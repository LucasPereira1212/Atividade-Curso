//////////////////////////////////Exercicio 1////////////////////////////////////

// function verificarDesconto(precoProduto) {
//   if (precoProduto >= 100) {
//     let desconto1 = precoProduto * 0.1;
//     let desconto2 = precoProduto - desconto1;
//     return console.log(
//       "Descoto Aplicado de 10%, o valor da compra deu R$" + desconto2
//     );
//   } else {
//     return console.log(
//       "O valor do produto não teve desconto, Valor total de R$" + precoProduto
//     );
//   }
// }

// verificarDesconto(100);

////////////////////////////////Exercicio 2///////////////////////////////////////

// function verrificarEstoque(quantidade) {
//   if (quantidade > 0) {
//     return console.log("Estoque disponivel, a quantidade é de " + quantidade);
//   } else {
//     return console.log("Estoque indiponivel, Urgente, comprar mais");
//   }
// }

// verrificarEstoque(0);

///////////////////////////////////Exercicio 3////////////////////////////////////

// function categoriaCliente(fidelidade) {
//   if (fidelidade >= 85) {
//     return console.log("Cliente Premium");
//   } else if (fidelidade >= 50) {
//     return console.log("Cliente Regular");
//   } else {
//     return console.log("Cliente Comum");
//   }
// }

// categoriaCliente(49);

///////////////////////////////Exercicio 4////////////////////////////////////

// function desenpenhoIndividualDeVendas(meta, percentual) {
//   let percentualEmNumero = percentual / 100;
//   let percentualEmNumero2 = percentualEmNumero * meta;

//   if (percentualEmNumero2 >= meta) {
//     return console.log("Excelente Desempenho");
//   } else if (percentualEmNumero <= 0.99 && percentualEmNumero >= 0.9) {
//     return console.log("Muito Bom Desempenho");
//   } else if (percentualEmNumero <= 0.89 && percentualEmNumero >= 0.8) {
//     return console.log("Bom Desempenho");
//   } else if (percentualEmNumero <= 0.79 && percentualEmNumero >= 0.61) {
//     return console.log("Desempenho Satisfatorio");
//   } else {
//     return console.log("Desempenho Insatisfatório");
//   }
// }

// desenpenhoIndividualDeVendas(200, 99);

////////////////////////////Exercicio 5/////////////////////////////////////

// function verificarVelocidade(velocidade) {
//   velocidade <= 80
//     ? console.log("Dentro do limite")
//     : console.log("fora do limite");
// }
// verificarVelocidade(90);

//////////////////////////Exercicio 6///////////////////////////////////////

// function mensagemSemaforo(cor) {
//   cor === "vermelho"
//     ? console.log("Parar")
//     : cor === "amarelo"
//     ? console.log("Atenção")
//     : cor === "verde"
//     ? console.log("Prossiga")
//     : console.log("Cor invalida");
// }

// mensagemSemaforo("amarelo");

//////////////////////////////Exercicio 7////////////////////////////////

// function coresDoSemaforo(cor) {
//   switch (cor) {
//     case "vermelho":
//       console.log("Pare");
//       break;
//     case "amarelo":
//       console.log("Atenção");
//       break;
//     case "verde":
//       console.log("Seguir");
//       break;
//     default:
//       console.log("Cor invalida");
//   }
// }

// coresDoSemaforo("verde");

/////////////////////////////Exercicio 8////////////////////////////////
