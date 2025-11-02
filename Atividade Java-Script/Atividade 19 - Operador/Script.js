<<<<<<< HEAD
//Atividade 1

const clientes = [
  {
    nome: "Ana",
    enderecos: [{ cidade: "São Paulo" }, { cidade: "Campinas" }],
  },
  { nome: "Pedro", enderecos: [{ cidade: "Rio de Janeiro" }] },
  { nome: "Maria", enderecos: [] },
];

const clientesCidade = clientes
  .map((cliente) => cliente.enderecos?.map((endereco) => endereco.cidade) ?? [])
  .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []);

// console.log(clientesCidade);

//Exercicio 2

const produtos = [
  { nome: "Camiseta", quantidade: 10 },
  { nome: "Calça", quantidade: null },
  { nome: "Tênis", quantidade: 5 },
  { nome: "Jaqueta", quantidade: 0 },
];

const produtoEmEstoque = produtos.filter(
  (produto) => (quantidade = produto.quantidade ?? 0 > 0)
);

// console.log(produtoEmEstoque);

//Exercicio 3

function calcularTotal(...valores) {
  return valores.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);
}

// console.log(calcularTotal(100, 200, 300, 400, 500));

//Exercicio 4

const produtos2 = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 150 },
];

const novaLista = produtos2.map((produto) => [{ ...produto, emEstoque: true }]);

// console.log(novaLista);

//Exercicio 5

const vendas = [
  { vendedor: "Ana", valor: 1000, mes: "Agosto" },
  { vendedor: "Pedro", valor: 1500, mes: "Agosto" },
  { vendedor: "Maria", valor: 1200, mes: "Julho" },
];

let tamanhoLista = 0;

const mediaVendas = vendas
  .filter(({ mes }, index, array) => mes === "Agosto")
  .reduce((acumulador, { valor }, index, array) => {
    tamanhoLista = array.length;
    return acumulador + valor;
  }, 0);

// console.log(mediaVendas / tamanhoLista);
=======
//Atividade 1

const clientes = [
  {
    nome: "Ana",
    enderecos: [{ cidade: "São Paulo" }, { cidade: "Campinas" }],
  },
  { nome: "Pedro", enderecos: [{ cidade: "Rio de Janeiro" }] },
  { nome: "Maria", enderecos: [] },
];

const clientesCidade = clientes
  .map((cliente) => cliente.enderecos?.map((endereco) => endereco.cidade) ?? [])
  .reduce((acumulador, cidadeCliente) => acumulador.concat(cidadeCliente), []);

// console.log(clientesCidade);

//Exercicio 2

const produtos = [
  { nome: "Camiseta", quantidade: 10 },
  { nome: "Calça", quantidade: null },
  { nome: "Tênis", quantidade: 5 },
  { nome: "Jaqueta", quantidade: 0 },
];

const produtoEmEstoque = produtos.filter(
  (produto) => (quantidade = produto.quantidade ?? 0 > 0)
);

// console.log(produtoEmEstoque);

//Exercicio 3

function calcularTotal(...valores) {
  return valores.reduce((acumulador, valorTotal) => acumulador + valorTotal, 0);
}

// console.log(calcularTotal(100, 200, 300, 400, 500));

//Exercicio 4

const produtos2 = [
  { nome: "Camiseta", preco: 50 },
  { nome: "Calça", preco: 100 },
  { nome: "Tênis", preco: 150 },
];

const novaLista = produtos2.map((produto) => [{ ...produto, emEstoque: true }]);

// console.log(novaLista);

//Exercicio 5

const vendas = [
  { vendedor: "Ana", valor: 1000, mes: "Agosto" },
  { vendedor: "Pedro", valor: 1500, mes: "Agosto" },
  { vendedor: "Maria", valor: 1200, mes: "Julho" },
];

let tamanhoLista = 0;

const mediaVendas = vendas
  .filter(({ mes }, index, array) => mes === "Agosto")
  .reduce((acumulador, { valor }, index, array) => {
    tamanhoLista = array.length;
    return acumulador + valor;
  }, 0);

// console.log(mediaVendas / tamanhoLista);
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
