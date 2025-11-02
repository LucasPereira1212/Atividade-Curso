<<<<<<< HEAD
//Atividade 1

const imprimirMensagem = (callback) => {
  callback();
};

imprimirMensagem(() => {
  console.log("Ola");
});

//Exercico 2

const fs = require("fs");

function lerArquivo(arquivo, callback) {
  fs.readFile(arquivo, "utf-8", (err, data) => {
    if (err) {
      console.error("Deu ruim", err.message);
      return;
    } else {
      callback(data);
    }
  });
}

lerArquivo("./textoExercicio2.txt", (conteudo) => {
  console.log(conteudo);
});

//Exercicio 3

const resolucaoAtraso = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

resolucaoAtraso.then(() => {
  console.log("Promise resolvida");
});

//Exercicio 4

const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Ola");
  }, 1000);
});

const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Mundo");
  }, 2000);
});

p1.then((primeiroNome) => {
  p2.then((SegundoNome) => {
    console.log(primeiroNome + ", " + SegundoNome);
  });
});

//Exercicio 5

const erroProposital = new Promise((resolve, reject) => {
  let sucesso = false;
  setTimeout(() => {
    if (sucesso) {
      resolve();
    } else {
      reject("Não teve sucesso ao conectar ao banco de dados");
    }
  }, 1000);
});

erroProposital
  .then(() => {
    console.log("Deu certo");
  })
  .catch((erro) => {
    console.error("Deu ruim", erro);
  });

//Exercicio 6

const a1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Um");
  }, 1000);
});

const a2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dois");
  }, 2000);
});

const a3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Tres");
  }, 3000);
});

Promise.all([a1, a2, a3]).then((resultado) => {
  console.log(resultado);
});

//Exercicio 7

function pegarDadosNaAPI(nomeUsuario) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        nome: nomeUsuario,
        age: Math.floor(80 * Math.random()),
        favorite_programming_language: "Javascript",
      });
    }, 2000);
  });
}

async function buscarDados(nomeUsuario) {
  const resposta = await pegarDadosNaAPI(nomeUsuario);
  console.log(resposta);
}

buscarDados("Lucas");

//Exercicio 8

function buscarDados() {
  return new Promise((resolve, reject) => {
    const numeroAleatorio = Math.random();
    setTimeout(() => {
      if (numeroAleatorio > 0.5) {
        resolve({
          color: "#51f",
          shape: "rectangule",
        });
      } else {
        reject(new Error("Error obtaining data"));
      }
    }, 1000);
  });
}

async function obterDados() {
  try {
    const data = await buscarDados();
    console.log(data);
  } catch (error) {
    console.error("Deu ruim", error.message);
  }
}

obterDados();

//Exercicio 9

async function buscarMultiplosDados() {
  const result = await Promise.all([
    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados1");
      }, 1000);
    }),

    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados2");
      }, 1500);
    }),

    new Promise((resolve) => {
      setTimeout(() => {
        resolve("dados3");
      }, 2000);
    }),
  ]);

  console.log(result);
}
buscarMultiplosDados();

//Exercicio 10

const times = [
  "Flamengo",
  "Fluminense",
  "Vasco",
  "Botafogo",
  "Corinthians",
  "Santos",
  "Internacional",
  "Grêmio",
  "São Paulo",
  "Palmeiras",
  "Cruzeiro",
  "Grêmio",
  "Atlético MG",
];

function descobrirCampeaoBrasileiro2025() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorioEntre0e1 = Math.random();
      if (numeroAleatorioEntre0e1 < 0.2) {
        resolve(Math.floor(times.length * Math.random()));
      } else {
        reject(new Error("Erro buscando time campeão"));
      }
    }, 1500);
  });
}

async function obterDadosComFallback() {
  try {
    const indice = await descobrirCampeaoBrasileiro2025();
    console.log(
      `O time campeão do campeonato do time Brasileiro de 2025 será o ${times[indice]}`
    );
  } catch (error) {
    console.error(error.message);
    console.log(
      "Ja que não conseguimos adivinhar o time vencedor, por logica, o time vencedor será o flamengo"
    );
  }
}

obterDadosComFallback();
=======
//Atividade 1

// const imprimirMensagem = (callback) => {
//   callback();
// };

// imprimirMensagem(() => {
//   console.log("Ola");
// });

//Exercico 2

// const fs = require("fs");

// function lerArquivo(arquivo, callback) {
//   fs.readFile(arquivo, "utf-8", (err, data) => {
//     if (err) {
//       console.error("Deu ruim", err.message);
//       return;
//     } else {
//       callback(data);
//     }
//   });
// }

// lerArquivo("./textoExercicio2.txt", (conteudo) => {
//   console.log(conteudo);
// });

//Exercicio 3

// const resolucaoAtraso = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve();
//   }, 1000);
// });

// resolucaoAtraso.then(() => {
//   console.log("Promise resolvida");
// });

//Exercicio 4

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Ola");
//   }, 1000);
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Mundo");
//   }, 2000);
// });

// p1.then((primeiroNome) => {
//   p2.then((SegundoNome) => {
//     console.log(primeiroNome + ", " + SegundoNome);
//   });
// });

//Exercicio 5

// const erroProposital = new Promise((resolve, reject) => {
//   let sucesso = false;
//   setTimeout(() => {
//     if (sucesso) {
//       resolve();
//     } else {
//       reject("Não teve sucesso ao conectar ao banco de dados");
//     }
//   }, 1000);
// });

// erroProposital
//   .then(() => {
//     console.log("Deu certo");
//   })
//   .catch((erro) => {
//     console.error("Deu ruim", erro);
//   });

//Exercicio 6

// const a1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Um");
//   }, 1000);
// });

// const a2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Dois");
//   }, 2000);
// });

// const a3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Tres");
//   }, 3000);
// });

// Promise.all([a1, a2, a3]).then((resultado) => {
//   console.log(resultado);
// });

//Exercicio 7

// function pegarDadosNaAPI(nomeUsuario) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         nome: nomeUsuario,
//         age: Math.floor(80 * Math.random()),
//         favorite_programming_language: "Javascript",
//       });
//     }, 2000);
//   });
// }

// async function buscarDados(nomeUsuario) {
//   const resposta = await pegarDadosNaAPI(nomeUsuario);
//   console.log(resposta);
// }

// buscarDados("Lucas");

//Exercicio 8

// function buscarDados() {
//   return new Promise((resolve, reject) => {
//     const numeroAleatorio = Math.random();
//     setTimeout(() => {
//       if (numeroAleatorio > 0.5) {
//         resolve({
//           color: "#51f",
//           shape: "rectangule",
//         });
//       } else {
//         reject(new Error("Error obtaining data"));
//       }
//     }, 1000);
//   });
// }

// async function obterDados() {
//   try {
//     const data = await buscarDados();
//     console.log(data);
//   } catch (error) {
//     console.error("Deu ruim", error.message);
//   }
// }

// obterDados();

//Exercicio 9

// async function buscarMultiplosDados() {
//   const result = await Promise.all([
//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("dados1");
//       }, 1000);
//     }),

//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("dados2");
//       }, 1500);
//     }),

//     new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("dados3");
//       }, 2000);
//     }),
//   ]);

//   console.log(result);
// }
// buscarMultiplosDados();

//Exercicio 10

const times = [
  "Flamengo",
  "Fluminense",
  "Vasco",
  "Botafogo",
  "Corinthians",
  "Santos",
  "Internacional",
  "Grêmio",
  "São Paulo",
  "Palmeiras",
  "Cruzeiro",
  "Grêmio",
  "Atlético MG",
];

// function descobrirCampeaoBrasileiro2025() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const numeroAleatorioEntre0e1 = Math.random();
//       if (numeroAleatorioEntre0e1 < 0.2) {
//         resolve(Math.floor(times.length * Math.random()));
//       } else {
//         reject(new Error("Erro buscando time campeão"));
//       }
//     }, 1500);
//   });
// }

// async function obterDadosComFallback() {
//   try {
//     const indice = await descobrirCampeaoBrasileiro2025();
//     console.log(
//       `O time campeão do campeonato do time Brasileiro de 2025 será o ${times[indice]}`
//     );
//   } catch (error) {
//     console.error(error.message);
//     console.log(
//       "Ja que não conseguimos adivinhar o time vencedor, por logica, o time vencedor será o flamengo"
//     );
//   }
// }

// obterDadosComFallback();
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
