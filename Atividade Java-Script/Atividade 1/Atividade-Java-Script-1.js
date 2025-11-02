// Exercício 1: Você tem um produto que custa R$ 200,00 e recebeu um desconto de R$ 40,00.Além disso, há um imposto de R$ 12,00 sobre o preço com desconto. Calcule o preço final do
// produto após aplicar o desconto e o imposto.

//Resolução 1

let produto = 200;
let desconto = 40;
let imposto = 12;

console.log(produto - desconto + imposto);

// Exercício 2: Você comprou um produto por R$ 100,00 e deseja vender com um lucro adicional de R$ 30,00. Calcule o preço de venda do produto.

//Resolução 2

let produto2 = 100;
let lucro = 30;

console.log(produto2 + lucro);

// Exercício 3: Você tem um orçamento de R$ 250,00 e deseja verificar se o custo de um produto, após aplicar um desconto de R$ 50,00, está dentro do orçamento. O custo do produto é R$ 300,00.

let produto3 = 300;
let desconto2 = 50;
let orcamento = 250;

let protudoComDesconto = produto3 - desconto2;

let dentroOrcamento = orcamento <= protudoComDesconto;

console.log(
  "O valor do produto é de " +
    protudoComDesconto +
    " então ele " +
    dentroOrcamento +
    " no orçamento"
);

// Exercício 4: Você tem duas variáveis, uma que representa a quantidade de produtos em um
// estoque como uma string ("20") e outra que representa a quantidade mínima necessária de
// produtos no estoque como um número (20). Verifique se a quantidade atual de produtos é
// suficiente (igual ou maior que a quantidade mínima necessária) após converter a string para um
// número. Imprima no console se a quantidade é suficiente ou não

let estoque = "20";
let estoqueMinimo = 20;

estoque = Number(estoque);

console.log(typeof estoque);

console.log("o estoque minimo é: " + (estoque >= estoqueMinimo));

// Exercício 5: Você tem três variáveis: uma que representa se um produto está disponível como
// um booleano (true), outra que representa a quantidade de produtos no estoque (10), e uma
// terceira que representa a quantidade mínima necessária de produtos no estoque (15). Verifique
// se o produto está disponível e se a quantidade é suficiente (igual ou maior que a quantidade
// mínima necessária) usando operadores lógicos NOT e AND. Imprima no console se o produto
// está disponível e tem a quantidade suficiente.

let disponivel = true;
let estoque2 = 10;
let estoqueMinimo2 = 15;

let verificador = disponivel === true && estoque2 >= estoqueMinimo2;

console.log("Essa informação é: " + verificador);
