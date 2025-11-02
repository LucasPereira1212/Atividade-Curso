<<<<<<< HEAD
//Exercicio 1

const currentSalary = [3000, 4500, 5000, 6000, 7500];

let salaryWithIncrease = currentSalary.map((salary) => {
  return Math.floor((salary / 100) * 10 + salary); // Jeito mais complexo de realizar uma soma de porcentagem
});

// console.log(salaryWithIncrease);

//Exercicio 2

const storePrice = [50, 100, 150, 200, 250];

let storePriceAdjusted = storePrice.map((price) => {
  return price * 1.05; // Jeito mais simplificado de realizar uma soma de porcentagem 0.05 + 1
});

// console.log(storePriceAdjusted);

//Exercicio 3

const employees = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

const employeesWithId = employees.map((name, index) => {
  return {
    Id: index + 1,
    Nome: name,
  };
});

// console.log(employeesWithId);

//Objeto para os exercicios 4, 5 e 6

const realEstate = [
  {
    id: 1,
    tipo: "Apartamento",
    valor: 400000,
    disponivel: true,
    bairro: "Centro",
  },
  {
    id: 2,
    tipo: "Casa",
    valor: 550000,
    disponivel: false,
    bairro: "Subúrbio",
  },
  {
    id: 3,
    tipo: "Cobertura",
    valor: 900000,
    disponivel: true,
    bairro: "Centro",
  },
  {
    id: 4,
    tipo: "Apartamento",
    valor: 300000,
    disponivel: false,
    bairro: "Zona Sul",
  },
  {
    id: 5,
    tipo: "Casa",
    valor: 700000,
    disponivel: true,
    bairro: "Centro",
  },
];

//Exercicio 4

const realEstateAvailable = realEstate.filter((available) => {
  return available.disponivel === true;
});

// console.log(realEstateAvailable);

//Exercicio 5

const realEstatePrice = realEstate.filter((price) => {
  return price.valor > 500000;
});

// console.log(realEstatePrice);

//Exercicio 6

const realEstateLocale = realEstate.filter((locale) => {
  return locale.bairro === "Centro";
});

// console.log(realEstateLocale);

//Exercicio 7

const vendas = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
  { id: 4, valor: 4100 },
  { id: 5, valor: 1800 },
];

const totalVendas = vendas.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual.valor;
}, 0); //Zero obrigatorio

// console.log(totalVendas);

//Exercicio 8

const avaliacao = [
  { cliente: "João", pontuacao: 4 },
  { cliente: "Maria", pontuacao: 5 },
  { cliente: "Pedro", pontuacao: 3 },
  { cliente: "Ana", pontuacao: 4 },
  { cliente: "Lucas", pontuacao: 5 },
];

const mediaAvaliaca = avaliacao.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual.pontuacao;
}, 0);

// console.log(mediaAvaliaca / avaliacao.length);

//Exercicio 9

const produtosVendidios = [
  { nome: "Camisa", categoria: "Vestuário" },
  { nome: "Calça", categoria: "Vestuário" },
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Celular", categoria: "Eletrônicos" },
  { nome: "Tênis", categoria: "Calçados" },
  { nome: "Meias", categoria: "Vestuário" },
];

const vendasPorCategoria = produtosVendidios.reduce(
  (acumulador, elementoAtual) => {
    acumulador[elementoAtual.categoria] =
      (acumulador[elementoAtual.categoria] || 0) + 1;
    return acumulador;
  },
  {}
);

// console.log(vendasPorCategoria);

//Exercicio 10

const precoProduto = 200;
const percentualDesconto = 15;

function calcularDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}

const precoFuncaoTradicional = calcularDesconto(
  precoProduto,
  percentualDesconto
);

// console.log(precoFuncaoTradicional);

//Arrow function

const calcularDescontoArrow = (preco, descnto) =>
  preco - preco * (descnto / 100);

// console.log(calcularDescontoArrow(precoProduto, percentualDesconto));

//Exercicio 11

const produtos = [
  { nome: "Camisa", categoria: "Vestuário" },
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Tênis", categoria: "Calçados" },
  { nome: "Calça", categoria: "Vestuário" },
];
const categoriaDesejada = "Vestuário";

function filtrarPorCategoria(listaProduto, categoria) {
  return listaProduto.filter(function (produto) {
    return produto.categoria === categoria;
  });
}

// console.log(filtrarPorCategoria(produtos, categoriaDesejada));

//Arrow function

const filtrarPorCategoriaArrow = (listaProduto, categoria) =>
  listaProduto.filter((produto) => produto.categoria === categoria);

// console.log(filtrarPorCategoriaArrow(produtos, categoriaDesejada));

//Exercicio 12

const vendas2 = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
];

function calcularFaturamentoTotal(listaDeVenda) {
  return listaDeVenda.reduce(function (total, totalValor) {
    return total + totalValor.valor;
  }, 0);
}

// console.log(calcularFaturamentoTotal(vendas2));

//Arrow function

const calcularFaturamentoTotalArrow = (listaDeVenda) =>
  listaDeVenda.reduce((total, totalVenda) => total + totalVenda.valor, 0);

// console.log(calcularFaturamentoTotalArrow(vendas2));
=======
//Exercicio 1

const currentSalary = [3000, 4500, 5000, 6000, 7500];

let salaryWithIncrease = currentSalary.map((salary) => {
  return Math.floor((salary / 100) * 10 + salary); // Jeito mais complexo de realizar uma soma de porcentagem
});

// console.log(salaryWithIncrease);

//Exercicio 2

const storePrice = [50, 100, 150, 200, 250];

let storePriceAdjusted = storePrice.map((price) => {
  return price * 1.05; // Jeito mais simplificado de realizar uma soma de porcentagem 0.05 + 1
});

// console.log(storePriceAdjusted);

//Exercicio 3

const employees = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

const employeesWithId = employees.map((name, index) => {
  return {
    Id: index + 1,
    Nome: name,
  };
});

// console.log(employeesWithId);

//Objeto para os exercicios 4, 5 e 6

const realEstate = [
  {
    id: 1,
    tipo: "Apartamento",
    valor: 400000,
    disponivel: true,
    bairro: "Centro",
  },
  {
    id: 2,
    tipo: "Casa",
    valor: 550000,
    disponivel: false,
    bairro: "Subúrbio",
  },
  {
    id: 3,
    tipo: "Cobertura",
    valor: 900000,
    disponivel: true,
    bairro: "Centro",
  },
  {
    id: 4,
    tipo: "Apartamento",
    valor: 300000,
    disponivel: false,
    bairro: "Zona Sul",
  },
  {
    id: 5,
    tipo: "Casa",
    valor: 700000,
    disponivel: true,
    bairro: "Centro",
  },
];

//Exercicio 4

const realEstateAvailable = realEstate.filter((available) => {
  return available.disponivel === true;
});

// console.log(realEstateAvailable);

//Exercicio 5

const realEstatePrice = realEstate.filter((price) => {
  return price.valor > 500000;
});

// console.log(realEstatePrice);

//Exercicio 6

const realEstateLocale = realEstate.filter((locale) => {
  return locale.bairro === "Centro";
});

// console.log(realEstateLocale);

//Exercicio 7

const vendas = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
  { id: 4, valor: 4100 },
  { id: 5, valor: 1800 },
];

const totalVendas = vendas.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual.valor;
}, 0); //Zero obrigatorio

// console.log(totalVendas);

//Exercicio 8

const avaliacao = [
  { cliente: "João", pontuacao: 4 },
  { cliente: "Maria", pontuacao: 5 },
  { cliente: "Pedro", pontuacao: 3 },
  { cliente: "Ana", pontuacao: 4 },
  { cliente: "Lucas", pontuacao: 5 },
];

const mediaAvaliaca = avaliacao.reduce((acumulador, elementoAtual) => {
  return acumulador + elementoAtual.pontuacao;
}, 0);

// console.log(mediaAvaliaca / avaliacao.length);

//Exercicio 9

const produtosVendidios = [
  { nome: "Camisa", categoria: "Vestuário" },
  { nome: "Calça", categoria: "Vestuário" },
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Celular", categoria: "Eletrônicos" },
  { nome: "Tênis", categoria: "Calçados" },
  { nome: "Meias", categoria: "Vestuário" },
];

const vendasPorCategoria = produtosVendidios.reduce(
  (acumulador, elementoAtual) => {
    acumulador[elementoAtual.categoria] =
      (acumulador[elementoAtual.categoria] || 0) + 1;
    return acumulador;
  },
  {}
);

// console.log(vendasPorCategoria);

//Exercicio 10

const precoProduto = 200;
const percentualDesconto = 15;

function calcularDesconto(preco, desconto) {
  return preco - preco * (desconto / 100);
}

const precoFuncaoTradicional = calcularDesconto(
  precoProduto,
  percentualDesconto
);

// console.log(precoFuncaoTradicional);

//Arrow function

const calcularDescontoArrow = (preco, descnto) =>
  preco - preco * (descnto / 100);

// console.log(calcularDescontoArrow(precoProduto, percentualDesconto));

//Exercicio 11

const produtos = [
  { nome: "Camisa", categoria: "Vestuário" },
  { nome: "Notebook", categoria: "Eletrônicos" },
  { nome: "Tênis", categoria: "Calçados" },
  { nome: "Calça", categoria: "Vestuário" },
];
const categoriaDesejada = "Vestuário";

function filtrarPorCategoria(listaProduto, categoria) {
  return listaProduto.filter(function (produto) {
    return produto.categoria === categoria;
  });
}

// console.log(filtrarPorCategoria(produtos, categoriaDesejada));

//Arrow function

const filtrarPorCategoriaArrow = (listaProduto, categoria) =>
  listaProduto.filter((produto) => produto.categoria === categoria);

// console.log(filtrarPorCategoriaArrow(produtos, categoriaDesejada));

//Exercicio 12

const vendas2 = [
  { id: 1, valor: 1500 },
  { id: 2, valor: 2300 },
  { id: 3, valor: 3200 },
];

function calcularFaturamentoTotal(listaDeVenda) {
  return listaDeVenda.reduce(function (total, totalValor) {
    return total + totalValor.valor;
  }, 0);
}

// console.log(calcularFaturamentoTotal(vendas2));

//Arrow function

const calcularFaturamentoTotalArrow = (listaDeVenda) =>
  listaDeVenda.reduce((total, totalVenda) => total + totalVenda.valor, 0);

// console.log(calcularFaturamentoTotalArrow(vendas2));
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
