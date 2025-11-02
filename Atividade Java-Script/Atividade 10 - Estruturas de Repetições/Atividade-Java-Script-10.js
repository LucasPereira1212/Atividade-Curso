/////////////////////////////Exercicio 1///////////////////////////////

// function faturamento(segunda, terca, quarta, quinta, sexta, sabado, domingo) {
//   let lista = [segunda, terca, quarta, quinta, sexta, sabado, domingo];
//   let valorAcumulado = 0;
//   for (let i = 0; i <= 6; i++) {
//     valorAcumulado = lista[i] * 10 + valorAcumulado;
//   }
//   return valorAcumulado;
// }
// console.log(
//   "O valor total vendido essa semana é de R$" +
//     faturamento(10, 15, 5, 30, 16, 18, 50)
// );

/////////////////////////////Exercicio 2///////////////////////////////

// function cardapio() {
//   let cardapioAlimentos = ["Carne", "Frango", "Peixe", "Sobremesa"];
//   let cardapioPreço = [20, 15, 30, 50];
//   for (let i = 0; i < cardapioAlimentos.length; i++) {
//     console.log(cardapioAlimentos[i] + " Por apenas R$" + cardapioPreço[i]);
//   }
// }

// cardapio();

/////////////////////////////Exercicio 3///////////////////////////////

// function realizarVendas(totalVendasDesejado) {
//   let dinheiroRecebido = 0;
//   let vendaConcluida = false;
//   let vendasRealizadas = 0;
//   while (!vendaConcluida) {
//     const valorDaVenda = 20; // Valor da venda (exemplo)
//     // Simulando uma venda
//     dinheiroRecebido += valorDaVenda;
//     vendasRealizadas++;
//     // Verificando se atingiu o número desejado de vendas
//     if (vendasRealizadas >= totalVendasDesejado) {
//       vendaConcluida = true;
//     }
//   }
//   console.log(`Total de dinheiro recebido: R$${dinheiroRecebido.toFixed(2)}`);
// }
// const totalVendasDesejado = 5; // Defina o número desejado de vendas
// realizarVendas(totalVendasDesejado);

/////////////////////////////Exercicio 4///////////////////////////////

// function entregas() {
//   let listaDeEntregas = [
//     "Entrega",
//     "Entrega",
//     "Entrega",
//     "Entrega",
//     "Entrega",
//     "Entrega",
//   ];
//   let v = 1;
//   while (listaDeEntregas.length > 0) {
//     console.log("Entrega " + v);
//     v++;
//     listaDeEntregas.shift();
//   }
//     console.log("Todas as entregas foram realizadas");
// }
// entregas();

/////////////////////////////Exercicio 5///////////////////////////////

// function adivinharNumeroSecreto() {
//   const numeroSecreto = Math.floor(Math.random() * 100);
//   let tentativa;
//   let tentativas = 0;
//   do {
//     tentativa = Math.floor(Math.random() * 100);
//     tentativas++;
//     if (tentativa === numeroSecreto) {
//       console.log(
//         `Parabéns! Você adivinhou o número secreto (${numeroSecreto}) em
// ${tentativas} tentativas.`
//       );
//     }
//   } while (tentativa !== numeroSecreto);
// }
// adivinharNumeroSecreto();

/////////////////////////////Exercicio 6///////////////////////////////

const estoqueLanchonete = {
  hamburguer: 20,
  batataFrita: 15,
  refrigerante: 30,
  milkshake: 10,
};
function atualizarEstoque(estoque, itemEmFalta, quantidadeAdicionar) {
  if (estoque.hasOwnProperty(itemEmFalta)) {
    estoque[itemEmFalta] += quantidadeAdicionar;
    console.log(`Estoque atualizado: ${itemEmFalta}:
${estoque[itemEmFalta]}`);
  } else {
    console.log("Item não encontrado no estoque.");
  }
}
console.log("Estoque da Lanchonete:");
console.log(estoqueLanchonete);
let continuarAdicionando = true;
let itemNaoEncontrado = false;
do {
  const itemEmFalta = "hamburguer";
  const quantidadeAdicionar = 5;
  if (!estoqueLanchonete.hasOwnProperty(itemEmFalta)) {
    if (!itemNaoEncontrado) {
      console.log("Item não encontrado no estoque.");
      itemNaoEncontrado = true;
    }
  } else if (estoqueLanchonete[itemEmFalta] + quantidadeAdicionar > 50) {
    continuarAdicionando = false;
    console.log(
      `Limite de estoque (${itemEmFalta}: ${estoqueLanchonete[itemEmFalta]})
atingido.`
    );
  } else {
    atualizarEstoque(estoqueLanchonete, itemEmFalta, quantidadeAdicionar);
  }
} while (continuarAdicionando);
console.log("Estoque final:");
console.log(estoqueLanchonete);
