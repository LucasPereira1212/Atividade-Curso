//Global
import { EventEmitter } from "node:events";

//? Exercício 1: Crie um programa Node.js onde você tenha um EventEmitter. Emita um evento
//? chamado mensagemRecebida e ouça esse evento para exibir a mensagem "Mensagem
//? recebida com sucesso!".

const evento = new EventEmitter();

evento.addListener("mensagemRecebida", () => {
  console.log("Mensagem recebida com sucesso");
});

evento.emit("mensagemRecebida");

//? Exercício 2: Altere o código anterior para que o evento mensagemRecebida aceite um
//? argumento contendo a mensagem recebida e exiba essa mensagem no console.

const evento1 = new EventEmitter();

evento1.addListener("mensagemRecebida", (Emprestimo) => {
  console.log(`Mensagem recebida com sucesso, o ${Emprestimo}`);
});

evento1.emit("mensagemRecebida", "Emprestimo liberado");

//? Exercício 3: Crie uma classe chamada Conversa que herde de EventEmitter. A classe
//? deve ter um método chamado enviarMensagem que emita o evento mensagemEnviada. O
//? evento deve aceitar um argumento com a mensagem enviada e exibir no console quando a
//? mensagem for enviada.

class Conversa extends EventEmitter {
  enviarMensagem(mensagem) {
    super.emit("mensagemEnviada", mensagem);
  }
}

const mensagem = new Conversa();

mensagem.addListener("mensagemEnviada", (mensagem) => {
  console.log(`Mensagem enviada, o contedudo da mensagem é ${mensagem}`);
});

mensagem.enviarMensagem("Ola, como vai você");

//? Exercício 4: Modifique o código da classe Conversa para herdar a emissão de eventos e
//? adicione um novo evento chamado mensagemRecebida. Ao receber a mensagem, exiba
//? "Nova mensagem recebida!" e a própria mensagem.

class Conversa1 extends EventEmitter {
  enviarMensagem(mensagem) {
    super.emit("mensagemEnviada", mensagem);
  }

  receberMensagem(msg) {
    super.emit("mensagemRecebida", msg);
  }
}

const mensagem1 = new Conversa1();

mensagem1.addListener("mensagemRecebida", (mensagem) => {
  console.log(`Mensagem Recebida, o contedudo da mensagem é ${mensagem}`);
});

mensagem1.receberMensagem("Ola, como vai você");

//? Exercício 5: Modifique o código da classe Conversa para adicionar dois ouvintes diferentes
//? para o evento mensagemRecebida. O primeiro ouvinte deve exibir o conteúdo da mensagem,
//? e o segundo ouvinte deve contar quantas mensagens foram recebidas.

class Conversa2 extends EventEmitter {
  constructor() {
    super();
    this.totalMensagens = 0;
  }

  enviarMensagem(mensagem) {
    super.emit("mensagemEnviada", mensagem);
  }

  receberMensagem(msg) {
    super.emit("mensagemRecebida", msg);
  }
}

const mensagem2 = new Conversa2();

mensagem2.addListener("mensagemRecebida", (mensagem) => {
  console.log(`Mensagem Recebida, o contedudo da mensagem é ${mensagem}`);
});

mensagem2.on("mensagemRecebida", () => {
  mensagem2.totalMensagens++;
  console.log(`Total mensagem: ${mensagem2.totalMensagens}`);
});

mensagem2.receberMensagem("a");

//? Exercício 6: Crie um sistema de login que herda de EventEmitter. O sistema deve emitir
//? um evento loginAttempt toda vez que uma tentativa de login é feita. Se o usuário e senha
//? forem corretos, emita o evento loginSuccess, caso contrário, loginFailure. Use um
//? callback para simular uma operação assíncrona (como consultar um banco de dados) que leva
//? 1 segundo.

// class SistemaLogin extends EventEmitter {
//   constructor(login, senha) {
//     super();
//     this.login = login;
//     this.senha = senha;
//   }

//   loginUsuario(usuario, senha) {
//     this.emit("loginAttempt", usuario);

//     setTimeout(() => {
//       if (usuario === this.login && senha === this.senha) {
//         this.emit("loginSuccess", usuario);
//       } else {
//         this.emit("loginFailure");
//       }
//     }, 1000);
//   }
// }

// let sistemaLogin = new SistemaLogin("Lucas", "1234");

// sistemaLogin.addListener("loginAttempt", (user) => {
//   console.log(`Tentativa de login de ${user}`);
// });
// sistemaLogin.addListener("loginSuccess", (user) => {
//   console.log(`Login bem sucessido ${user}`);
// });
// sistemaLogin.addListener("loginFailure", () => {
//   console.log(`Não tem conhecemos `);
// });

// sistemaLogin.loginUsuario("Lucas", "1234");

//? Exercício 7: Crie um sistema de fila que herde  de EventEmitter. A fila deve permitir
//? adicionar "tarefas" (strings) e processá-las uma por vez a cada 2 segundos, emitindo um evento
//? taskProcessed cada vez que uma tarefa for completada. Quando todas as tarefas forem
//? processadas, emita um evento allTasksProcessed.

// class Fila extends EventEmitter {
//   constructor() {
//     super();
//     this.tarefas = [];
//     this.processamento = false;
//   }

//   adicionarTarefa(tarefa) {
//     this.tarefas.push(tarefa);
//     this.emit("taskAdded", tarefa);
//     if (!this.processamento) {
//       this.processarTarefa();
//     }
//   }

//   processarTarefa() {
//     if (this.tarefas.length > 0) {
//       this.processamento = true;
//       const tarefaAtual = this.tarefas.shift();
//       setTimeout(() => {
//         this.emit("taskProcessed", tarefaAtual);
//         this.processarTarefa();
//       }, 2000);
//     } else {
//       this.processamento = false;
//       this.emit("allTasksProcessed");
//     }
//   }
// }

// const fila = new Fila();

// fila.addListener("taskAdded", (tarefa) => {
//   console.log(`Tarefa adicionada: ${tarefa} `);
// });
// fila.addListener("taskProcessed", (tarefa) => {
//   console.log(`Tarefa Processada: ${tarefa}`);
// });
// fila.addListener("allTasksProcessed", () => {
//   console.log(`Todas as tarefas foram processadas`);
// });

// for (let i = 0; i < 10; i++) {
//   fila.adicionarTarefa(`Tarefa ${i}`);
// }

//? Exercício 8: Crie um sistema de log que herda de EventEmitter e registra todos os eventos
//? emitidos, como login, logout e error. O sistema deve armazenar as mensagens de log e,
//? ao final de cada dia (simulado por um intervalo de tempo de 5 segundos), emita um evento
//? dailyLogReport com um resumo de todos os logs do dia.

// class SistemaLogin2 extends EventEmitter {
//   constructor() {
//     super();
//     this.logs = [];
//     this.intervalID = null;
//     this.iniciarRelatorioDiario();
//   }

//   registrarEvento(evento, mensagem) {
//     const log = {
//       evento,
//       mensagem,
//       data: new Date().toISOString(),
//     };
//     this.logs.push(log);
//     this.emit("eventoRegistrado", log);
//   }

//   iniciarRelatorioDiario() {
//     this.intervalID = setInterval(() => {
//       this.emit("dailyLogReport", this.logs);
//       this.logs = [];
//     }, 5000);
//   }

//   pararRelatorio() {
//     if (this.intervalID) {
//       clearInterval(this.intervalID);
//       console.log("Relatorio diário interrompido");
//     }
//   }
// }

// const sistema = new SistemaLogin2();

// sistema.on("eventoRegistrado", (log) => {
//   console.log(
//     `Evento Registrado ${log.evento} - ${log.mensagem} - ${log.data}`
//   );
// });

// sistema.on("dailyLogReport", (logs) => {
//   console.log(`Relatorio diário de logs:`);
//   logs.forEach((log) => {
//     console.log(`${log.evento}: ${log.mensagem}. Data:${log.data}`);
//   });
// });

// sistema.registrarEvento("a", "Usuario admin fez login");
// sistema.registrarEvento("b", "Usuario admin fez login");
// sistema.registrarEvento("c", "Usuario admin fez login");

// setTimeout(() => {
//   sistema.pararRelatorio();
// }, 9000);

//? Exercício 9: Crie um EventEmitter que emite o evento ping a cada segundo. O evento ping
//? deve ser emitido no máximo 5 vezes. Após a quinta emissão, o processo deve ser finalizado
//? emitindo um evento pingFinished.

// class PingEmitter extends EventEmitter {
//   constructor() {
//     super();
//     this.contador = 0;
//     this.maxPings = 5;
//   }

//   iniciarPings() {
//     const intervalo = setInterval(() => {
//       this.contador++;
//       if (this.contador <= this.maxPings) {
//         this.emit("ping", this.contador);
//       } else {
//         this.emit("pingFinished");
//         clearInterval(intervalo);
//       }
//     }, 1000);
//   }
// }

// const ping = new PingEmitter();

// ping.on("ping", (contagem) => {
//   console.log(`Ping número ${contagem}`);
// });
// ping.on("pingFinished", () => {
//   console.log(`O número de ping foi atingido`);
// });

// ping.iniciarPings();

//? Exercício 10: Crie um programa Node.js que leia o conteúdo de um arquivo de texto e, ao
//? terminar de ler, emita um evento fileReadSuccess com o conteúdo lido. Em seguida,
//? escreva esse conteúdo em um novo arquivo e, ao finalizar a escrita, emita um evento
//? fileWriteSuccess.

import * as fs from "node:fs";

class ArquivoEmitter extends EventEmitter {
  //TODO método para Ler arquivo
  lerArquivo(caminho) {
    fs.readFile(caminho, "utf-8", (err, dados) => {
      if (err) {
        this.emit("fileReadError", err);
      } else {
        this.emit("fileReadSucess", dados);
      }
    });
  }

  //TODO método para Escrever arquivo
  escreverArquivo(caminho, conteudo) {
    fs.writeFile(caminho, conteudo, (err) => {
      if (err) {
        this.emit("fileWriteError", err);
      } else {
        this.emit("fileWriteSucess", caminho);
      }
    });
  }
}

const arquivoEmitter = new ArquivoEmitter();

//TODO Escutar evento fileReadSucess
arquivoEmitter.on("fileReadSucess", (conteudo) => {
  console.log("Arquivo lido com sucesso");
  console.log(`Conteúdo: ${conteudo}`);
  arquivoEmitter.escreverArquivo("novoArquivo.txt", conteudo);
});

//TODO Escutar evento fileWriteSucess
arquivoEmitter.on("fileWriteSucess", (caminho) => {
  console.log(`Arquivo escrito com sucesso em: ${caminho}`);
});

//TODO Escutar evento fileReadError
arquivoEmitter.on("fileReadError", (erro) => {
  console.error("Erro ao ler o arquivo: ", erro);
});
//TODO Escutar evento fileWriteError
arquivoEmitter.on("fileWriteError", (erro) => {
  console.error("Erro ao escrever o arquivo: ", erro);
});

//TODO Testar método
arquivoEmitter.lerArquivo("arquivo.txt"); //SUCESSO
