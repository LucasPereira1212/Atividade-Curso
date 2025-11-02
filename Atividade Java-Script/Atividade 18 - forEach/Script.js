<<<<<<< HEAD
const pacotes = [
  { destino: "Paris", preco: 3500, vagasDisponiveis: true },
  { destino: "Nova York", preco: 4200, vagasDisponiveis: false },
  { destino: "Rio de Janeiro", preco: 1500, vagasDisponiveis: true },
];

// Exercicio 1

// const resumoViagens = pacotes.forEach((item) =>
//   console.log(`Seu destino a ${item.destino} está no preço de ${item.preco}`)
// );

// const viagensDisponiveis = pacotes.forEach((item) => {
//   if (item.vagasDisponiveis) {
//     console.log(`Seu destino a ${item.destino} está disponivel para compra`);
//   } else {
//     console.log(
//       `Seu destino a ${item.destino} está não está disponivel para compra`
//     );
//   }
// });

let totalViagens = 0;

const totalDisponiveis = pacotes.forEach((item) => {
  if (item.vagasDisponiveis) {
    totalViagens++;
  }
});

console.log(
  `Temos ${pacotes.length} viagens no painel, porem apenas ${totalViagens} estão disponíveis`
);
=======
const pacotes = [
  { destino: "Paris", preco: 3500, vagasDisponiveis: true },
  { destino: "Nova York", preco: 4200, vagasDisponiveis: false },
  { destino: "Rio de Janeiro", preco: 1500, vagasDisponiveis: true },
];

// Exercicio 1

// const resumoViagens = pacotes.forEach((item) =>
//   console.log(`Seu destino a ${item.destino} está no preço de ${item.preco}`)
// );

// const viagensDisponiveis = pacotes.forEach((item) => {
//   if (item.vagasDisponiveis) {
//     console.log(`Seu destino a ${item.destino} está disponivel para compra`);
//   } else {
//     console.log(
//       `Seu destino a ${item.destino} está não está disponivel para compra`
//     );
//   }
// });

let totalViagens = 0;

const totalDisponiveis = pacotes.forEach((item) => {
  if (item.vagasDisponiveis) {
    totalViagens++;
  }
});

console.log(
  `Temos ${pacotes.length} viagens no painel, porem apenas ${totalViagens} estão disponíveis`
);
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
