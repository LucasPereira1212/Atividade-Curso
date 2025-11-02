//////////////////////////////Variaveis Globais/////////////////////////////////
let despesas = {
  lazer: 500,
  contas: 150,
  trabalho: 1200,
  alimentação: 200,
};
const valorInicial = 1000;
let taxa = 1.5; // Esta em porcentagem
let meses = 12;
let orçamento = 2000;
let meta = 1500;

//////////////////////////////////Funções//////////////////////////////////////

function simularInvestimento(valorInicial, taxa, periodo) {
  let saldoFinal = valorInicial;

  for (let i = 1; i <= periodo; i++) {
    saldoFinal += saldoFinal * (taxa / 100);
  }

  return saldoFinal.toFixed(2);
}

function gerenciaDespesas(despesas) {
  let despesasTotais = 0;
  for (despesa in despesas) {
    despesasTotais += despesas[despesa];
  }
  return despesasTotais;
}

function obterMesAtual() {
  const Meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novenbro",
    "Dezembro",
  ];
  let mesAtual = new Date();

  return Meses[mesAtual.getMonth()];
}

function gerarRelatorio(
  valorInicial,
  taxa,
  periodo,
  despesas,
  orçamento,
  meta
) {
  console.log(
    "                                            Relatorio Financeiro"
  );
  console.log("Mês: " + obterMesAtual());
  console.log(
    "Saldo Final do investimento R$" +
      simularInvestimento(valorInicial, taxa, periodo)
  );
  console.log("Total de despesas R$" + gerenciaDespesas(despesas));
  if (gerenciaDespesas(despesas) >= orçamento) {
    let totalGeral = gerenciaDespesas(despesas) - orçamento;
    console.log("Você exceudeu o investimento em R$" + totalGeral);
  } else {
    console.log("Economia");
  }
  if (simularInvestimento(valorInicial, taxa, meses) >= meta) {
    console.log("Meta atingida");
  } else {
    console.log("Meta não atingida");
  }
  for (categoria in despesas) {
    let formatado = categoria[0].toUpperCase() + categoria.slice(1);
    console.log(
      "Categoria " + formatado + " Foi gasto R$" + despesas[categoria]
    );
  }
}

///////////////////////////////Console.log()///////////////////////////////////

gerarRelatorio(valorInicial, taxa, meses, despesas, orçamento, meta);
