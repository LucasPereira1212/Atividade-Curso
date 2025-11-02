//eXERCICIO 1

const venda = {
  Prtoduto: "Cadeira",
  quantidade: 10,
  precoUnitario: 50,
  desconto: 10,

  verificarEstoque: function (quantidade) {
    const estoquePositivo = quantidade <= this.quantidade;
    console.log(
      "Se for verdadeiro, é venda é possivel, caso contrario, a venda não é possivel: " +
        estoquePositivo
    );
  },

  atualizarQuantidade: function (atualizar) {
    this.quantidade = atualizar;
  },

  aplicarDesconto: function (desconto) {
    this.desconto = (this.precoUnitario * this.quantidade) / desconto;
  },

  calcularTotal: function () {
    const total = this.precoUnitario * this.quantidade;
    return total - total * (this.desconto / 100);
  },
  detalharVenda: function () {
    console.log(
      "Sua venda foi da " +
        this.Prtoduto +
        " Você vendeu " +
        this.quantidade +
        " Cada uma custou R$" +
        this.precoUnitario +
        " Com o desconto de R$" +
        this.desconto +
        " E to total foi de  R$ " +
        this.calcularTotal()
    );
  },
};

//Exercicio 2

venda.aplicarDesconto(5);
venda.detalharVenda();

//Exercicio 3

venda.atualizarQuantidade(5);
venda.detalharVenda();

//Exercicio 4

venda.verificarEstoque(5);

//Exercicio 5

console.log(Object.entries(venda));

//Exercicio 6

console.log(Object.keys(venda));

//Exercicio 7

console.log(Object.values(venda));

//Exercicio 8

console.log(venda.hasOwnProperty("desconto"));

//Exercicio 9

const novaVenda = {};
Object.assign(novaVenda, venda);
console.log(Object.entries(novaVenda));

//Exercicio 10

Object.defineProperty(venda, "Data", {
  value: "2024-08-03",
  enumerable: false,
});

//Exercicio 11

const descontoEspecial = Object.create(venda);
descontoEspecial.desconto = 20;

//Exercicio 12

delete venda.desconto;
