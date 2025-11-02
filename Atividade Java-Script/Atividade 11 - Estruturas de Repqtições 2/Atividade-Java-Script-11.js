///////////////////////////Exercicio 1////////////////////////////

// const cardapioLanchonete = [
//   "Hambúrguer",
//   "Batata Frita",
//   "Refrigerante",
//   "Milkshake",
//   "Hot Dog",
//   "Cachorro-Quente",
//   "Pizza",
// ];
// function contarItensDoCardapio(cardapio) {
//   if (cardapio.length === 0) {
//     return 0;
//   } else {
//     cardapio.pop();
//     return 1 + contarItensDoCardapio(cardapio);
//   }
// }

// const totalItens = contarItensDoCardapio(cardapioLanchonete);

// console.log(`Total de itens no cardápio: ${totalItens}`);

///////////////////////////Exercicio 2////////////////////////////

// function calcularValorTotalVendas(vendasDiarias, precoPorHamburguer, dia) {
//   if (dia >= vendasDiarias.length) {
//     return 0;
//   }
//   const valorVendaDiaAtual = vendasDiarias[dia] * precoPorHamburguer;
//   const valorVendaProximoDia = calcularValorTotalVendas(
//     vendasDiarias,
//     precoPorHamburguer,
//     dia + 1
//   );
//   return valorVendaDiaAtual + valorVendaProximoDia;
// }
// const vendasDiarias = [
//   20, 15, 25, 18, 22, 30, 28, 24, 27, 23, 19, 21, 26, 17, 16, 29, 31, 14, 20,
//   22, 18, 24, 25, 30, 28, 27, 29, 26, 21, 17,
// ];
// const precoPorHamburguer = 10;
// const totalVendasMes = calcularValorTotalVendas(
//   vendasDiarias,
//   precoPorHamburguer,
//   0
// );
// console.log(
//   `O valor total das vendas de hambúrgueres no mês é R$${totalVendasMes}`
// );

///////////////////////////Exercicio 3////////////////////////////

// let cardapio = {
//   carne: 20,
//   frango: 60,
//   arroz: 10,
//   macarrão: 80,
// };

// function listarItens(cardapio) {
//   console.log("Cardapio");
//   let o = 1;
//   for (listar in cardapio) {
//     console.log(
//       "Opção " + o + " " + listar + " Por apenas R$" + cardapio[listar]
//     );
//     o++;
//   }
// }

// listarItens(cardapio);

///////////////////////////Exercicio 4////////////////////////////

// const conta = {
//   carne: 2,
//   frango: 4,
//   arroz: 10,
//   macarrão: 20,
// };

// function totalConta(conta) {
//   const valorProduto = 30;
//   let valorTotal = 0;
//   for (info in conta) {
//     valorTotal += valorProduto * conta[info];
//     console.log(
//       "A sua conta tem os itens " + info + " Com a quantidade de " + conta[info]
//     );
//   }
//   console.log("O total da sua conta foi de R$" + valorTotal);
// }

// totalConta(conta);

///////////////////////////Exercicio 5////////////////////////////

// const cardapioLanchonete = [
//   "Hambúrguer",
//   "Batata Frita",
//   "Refrigerante",
//   "Milkshake",
//   "Hot Dog",
//   "Cachorro-Quente",
//   "Pizza",
// ];

// function percorrer(cardapio) {
//   console.log("Cardapio");
//   let o = 1;
//   for (alimentos of cardapio) {
//     console.log("iten " + o + " " + alimentos);
//     o++;
//   }
// }

// percorrer(cardapio);

///////////////////////////Exercicio 6////////////////////////////

// const conta = [
//   { alimento: "Carne", quantidade: 2, preco: 10 },
//   { alimento: "Frango", quantidade: 4, preco: 50 },
//   { alimento: "Arroz", quantidade: 10, preco: 20 },
//   { alimento: "Macarrão", quantidade: 20, preco: 80 },
// ];

// function totalConta(conta) {
//   let valorTotal = 0;
//   let o = 1;
//   console.log("Detalhes da sua conta: ");
//   for (lista of conta) {
//     valorTotal += lista.preco * lista.quantidade;
//     console.log(
//       "Pedido " +
//         o +
//         " " +
//         lista.alimento +
//         " Quantidade " +
//         lista.quantidade +
//         " Com o valor de R$" +
//         lista.preco
//     );
//     o++;
//   }
//   console.log("O valor total foi de R$" + valorTotal);
// }

// totalConta(conta);
