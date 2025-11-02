//Exercicio 1

const arredondar = {
  valorInteiroProximo: function (numero) {
    return Math.round(numero);
  },
  paraCima: function (numero) {
    return Math.round(numero);
  },
  paraBaixo: function (numero) {
    return Math.round(numero) - 1;
  },
};

// console.log(arredondar.valorInteiroProximo(10.4));
// console.log(arredondar.paraCima(10.4));
// console.log(arredondar.paraBaixo(10.4));

//Exercicio 2

const max_E_Min = {
  max: function (lista) {
    return Math.max(...lista);
  },
  min: function (lista) {
    return Math.min(...lista);
  },
};

console.log(max_E_Min.max([10, 5, 20, 40, 1, 7]));
console.log(max_E_Min.min([10, 5, 20, 40, 1, 7]));

//Exercicio 3

const aleatorio = {
  de0A1: function () {
    return Math.random();
  },
  de0A100: function () {
    return Math.random() * 100;
  },
};

console.log(aleatorio.de0A1());
console.log(aleatorio.de0A100());

//Exercicio 4

function calcularDiferencaEmDias(dataInicial, dataFinal) {
  let diferencaMilissegundos = new Date(dataFinal) - new Date(dataInicial);
  let diferencaEmDias = diferencaMilissegundos / (1000 * 60 * 60 * 24);
  // milesegundos 1000 = 1 segundo => 60 converte segundos em minutos 60 seg = 1min=>
  // 60 converte para minutos 60 minutos = 1hora => 24 horas = 1 dia.
  console.log(diferencaMilissegundos);
  console.log("A diferença entre as datas é " + diferencaEmDias + " Dias");
}

calcularDiferencaEmDias("2024-01-01", "2024-10-07");

//Exercicio 5

const extrair = {
  ano: function (dataString) {
    let data = new Date(dataString);
    let ano = data.getFullYear();
    console.log("O ano é " + ano);
  },
  mes: function (dataString) {
    let data = new Date(dataString);
    let mes = data.getMonth() + 1;
    console.log("O mês é " + mes);
  },
  dia: function (dataString) {
    let data = new Date(dataString);
    let dia = data.getDate();
    console.log("O dia é " + dia);
  },

  anoMesDia: function (dataString) {
    let data = new Date(dataString);
    let ano = data.getFullYear();
    let mes = data.getMonth() + 1;
    let dia = data.getDate();
    console.log("Dia " + dia + " Mês " + mes + " Ano " + ano);
  },
};

extrair.ano("2024-10-07T00:00:00");
extrair.mes("2024-10-07T00:00:00");
extrair.dia("2024-10-07T00:00:00");
extrair.anoMesDia("2024-10-07T00:00:00");
//Exercicio 6

function calcularIdade(dataNascimento) {
  let nascimento = new Date(dataNascimento);
  let hoje = new Date();
  let idade = hoje.getFullYear() - nascimento.getFullYear();

  //Criar a data do Aniversario atual
  let AniversarioAtual = new Date(
    hoje.getFullYear(),
    nascimento.getMonth(),
    nascimento.getDate()
  );

  //Calcular diferen;a em millessegundos e converter em dias
  let diferencaDias = (hoje - AniversarioAtual) / (100 * 60 * 60 * 24);

  //Ajuste de idade
  let ajuste = (diferencaDias < 0) * 1;

  idade = idade - ajuste;
  console.log("minha idade é: " + idade);
}
calcularIdade("1990-05-15");

//Desafio

function formatarPadraoBrasileiro(dataString) {
  //Dividir e converter
  let data = new Date(dataString);
  let dia = getDate();
  let mes = getMonth() + 1;
  let ano = getFullYear();
}
