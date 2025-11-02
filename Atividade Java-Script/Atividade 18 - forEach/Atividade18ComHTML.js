<<<<<<< HEAD
const listaMedicamneto = document.getElementById("listaMedicamento");
const listaMedicamneto2 = document.getElementById("listaMedicamento2");
const medicamentoFalta = document.getElementById("medicamentosFalta");
const p_medicamentoFalta = document.getElementById("p_medicamentoFalta");

const medicamentos = [
  { nome: "Paracetamol", estoque: 150, preco: 5.99 },
  { nome: "Amoxicilina", estoque: 80, preco: 9.5 },
  { nome: "Ibuprofeno", estoque: 200, preco: 7.8 },
  { nome: "dipirona", estoque: 0, preco: 10 },
  { nome: "dorflex", estoque: 400, preco: 11 },
  { nome: "cinegrip", estoque: 0, preco: 3.2 },
  { nome: "nebacetin", estoque: 0, preco: 5.5 },
  { nome: "vic", estoque: 0, preco: 20 },
];

let contadorMedicamentoFaltando = 0;

medicamentos.forEach((item) => {
  listaMedicamneto.innerHTML += `<li>Nome:${item.nome}, --- Estoque:${item.estoque}</li>`;
  listaMedicamneto2.innerHTML += `<li>Nome: ${
    item.nome
  }, ---  Preço:R$${item.preco.toFixed(2)}</li>`;
  if (item.estoque <= 0) {
    contadorMedicamentoFaltando++;
    p_medicamentoFalta.innerText = `Medicamentos em falta: ${contadorMedicamentoFaltando}`;
  }
});

const medicamentoFaltas = medicamentos.forEach((item) => {
  if (item.estoque <= 0) {
    medicamentoFalta.innerHTML += `<li>${item.nome}</li>`;
  }
});
=======
const listaMedicamneto = document.getElementById("listaMedicamento");
const listaMedicamneto2 = document.getElementById("listaMedicamento2");
const medicamentoFalta = document.getElementById("medicamentosFalta");
const p_medicamentoFalta = document.getElementById("p_medicamentoFalta");

const medicamentos = [
  { nome: "Paracetamol", estoque: 150, preco: 5.99 },
  { nome: "Amoxicilina", estoque: 80, preco: 9.5 },
  { nome: "Ibuprofeno", estoque: 200, preco: 7.8 },
  { nome: "dipirona", estoque: 0, preco: 10 },
  { nome: "dorflex", estoque: 400, preco: 11 },
  { nome: "cinegrip", estoque: 0, preco: 3.2 },
  { nome: "nebacetin", estoque: 0, preco: 5.5 },
  { nome: "vic", estoque: 0, preco: 20 },
];

let contadorMedicamentoFaltando = 0;

medicamentos.forEach((item) => {
  listaMedicamneto.innerHTML += `<li>Nome:${item.nome}, --- Estoque:${item.estoque}</li>`;
  listaMedicamneto2.innerHTML += `<li>Nome: ${
    item.nome
  }, ---  Preço:R$${item.preco.toFixed(2)}</li>`;
  if (item.estoque <= 0) {
    contadorMedicamentoFaltando++;
    p_medicamentoFalta.innerText = `Medicamentos em falta: ${contadorMedicamentoFaltando}`;
  }
});

const medicamentoFaltas = medicamentos.forEach((item) => {
  if (item.estoque <= 0) {
    medicamentoFalta.innerHTML += `<li>${item.nome}</li>`;
  }
});
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
