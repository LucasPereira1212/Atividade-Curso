//Exercicio 1

let produto = ["Computador", "mouse", "teclado"];
console.log(produto);
console.log(produto[1]);
produto[2] = "Notebook";
console.log(produto);
console.log(produto[2]);

//Exercicio 2

let cliente = ["Lucas", "Marcos", "Leticia"];
console.log(cliente);
cliente[cliente.length] = "Fabricio";
console.log(cliente);
cliente.length = cliente.length - 1;
console.log(cliente);

//Exercicio 3

let produto1 = {
  nome: "corda",
  preco: 10,
  quantidade: 5,
};

console.log(produto1);
console.log(produto1.nome);

produto1.preco = 5;

console.log(produto1);

//Exercicio 4

let venda = {
  cliente: "Marcia",
  produto: "Gabinete",
  Valor: 10,
};

venda.data = "16/03/2006";

console.log(venda);

delete venda.produto;

console.log(venda);

//Exercicio 5

let estoque = [1, 2, 3];

let novoEstoque = [...estoque];

novoEstoque[0] = 10;

console.log(estoque);
console.log(novoEstoque);

let funcionario = {
  nome: "Matheus",
};

let novoFuncionario = { ...funcionario };

novoFuncionario.nome = "Felipe";

console.log(funcionario);
console.log(novoFuncionario);
