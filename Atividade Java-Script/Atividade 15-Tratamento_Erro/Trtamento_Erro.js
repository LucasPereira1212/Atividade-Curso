<<<<<<< HEAD
//Exercicio 1

function tratarErroVariavelNaoDefinida() {
  try {
    console.log(variavelNaoDefinida);
  } catch (error) {
    console.error("Essa variavel não é definida", error);
  }
}

// tratarErroVariavelNaoDefinida();

//Exercicio 2

function erroFuncaoNaoDefinida() {
  try {
    funcaoInexistente();
  } catch (error) {
    console.error("Essa função não é definida", error);
  }
}

// erroFuncaoNaoDefinida();

//Exercicio 3

function tratarErroAcessarPropriedadeNull() {
  try {
    const objeto = null;
    console.log(objeto.propriedade);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

// tratarErroAcessarPropriedadeNull();

//Exercicio 4

function tratarErrorPropriedadeInexistente() {
  try {
    const objeto = {};
    console.log(objeto.propriedadeinexistente.valor);
  } catch (error) {
    console.error("Erro: A propriedade não existe no objeto", error);
  }
}

// tratarErrorPropriedadeInexistente();

//Exercicio 5

function tratarErrorConvencaoTipo() {
  try {
    const numero = "123";
    const resultado = parseInt(numero);

    if (isNaN(resultado)) {
      throw new Error("Não foi possivel converter String para um numero");
    } else {
      console.log("Numero convertido com sucesso", resultado);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// tratarErrorConvencaoTipo();

// exercicio 6

function tratarErroDivisaoPorZero() {
  try {
    const dividendo = 10;
    const divisor = 0;
    const resultado = dividendo / divisor;

    if (divisor === 0) {
      throw new Error("Error: Divisor por zero não é permitido");
    } else {
      console.log("Resultado da divisão", resultado);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// tratarErroDivisaoPorZero();

// Exercicio 7

//Moodulo ficticio
function lerArquivo() {
  try {
    //const conteudoArquivo = "Conteudo do arquivo ficticio";
    console.log("Conteudo do arquivo:", conteudoArquivo);
  } catch (error) {
    console.error("Erro: Ocorreu um erro na leitura", error);
  } finally {
    console.log("Bloco finally esta sendo executado e encerra a operação");
  }
}
// lerArquivo();

//Modulo FS

function lerArquivoFS() {
  const fs = require("fs");
  try {
    const conteudoArquivo = fs.readFileSync("Arquivo.txt", "utf-8");
    console.log(conteudoArquivo);
  } catch (error) {
    console.error("Erro: erro ao ler o arquivo", error.message);
  } finally {
    console.log("Bloco finally esta sendo executado e encerra a operação");
  }
}
// lerArquivoFS();

//Exercicio 8

let banco = {
  registro1: { id: 1, nome: "nome 1" },
  registro2: { id: 2, nome: "nome 2" },
  registro3: { id: 3, nome: "nome 3" },
};

function conectarBancoDeDados() {
  try {
    const resultado = banco.registro1;
    if (!resultado) {
      throw new Error("Erro: O registro não foi encontrado");
    } else {
      console.log("Registro encontrado", resultado);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Conexão foi encerrada");
  }
}

// conectarBancoDeDados();
=======
//Exercicio 1

function tratarErroVariavelNaoDefinida() {
  try {
    console.log(variavelNaoDefinida);
  } catch (error) {
    console.error("Essa variavel não é definida", error);
  }
}

// tratarErroVariavelNaoDefinida();

//Exercicio 2

function erroFuncaoNaoDefinida() {
  try {
    funcaoInexistente();
  } catch (error) {
    console.error("Essa função não é definida", error);
  }
}

// erroFuncaoNaoDefinida();

//Exercicio 3

function tratarErroAcessarPropriedadeNull() {
  try {
    const objeto = null;
    console.log(objeto.propriedade);
  } catch (error) {
    console.error("Ocorreu um erro:", error);
  }
}

// tratarErroAcessarPropriedadeNull();

//Exercicio 4

function tratarErrorPropriedadeInexistente() {
  try {
    const objeto = {};
    console.log(objeto.propriedadeinexistente.valor);
  } catch (error) {
    console.error("Erro: A propriedade não existe no objeto", error);
  }
}

// tratarErrorPropriedadeInexistente();

//Exercicio 5

function tratarErrorConvencaoTipo() {
  try {
    const numero = "123";
    const resultado = parseInt(numero);

    if (isNaN(resultado)) {
      throw new Error("Não foi possivel converter String para um numero");
    } else {
      console.log("Numero convertido com sucesso", resultado);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// tratarErrorConvencaoTipo();

// exercicio 6

function tratarErroDivisaoPorZero() {
  try {
    const dividendo = 10;
    const divisor = 0;
    const resultado = dividendo / divisor;

    if (divisor === 0) {
      throw new Error("Error: Divisor por zero não é permitido");
    } else {
      console.log("Resultado da divisão", resultado);
    }
  } catch (error) {
    console.error(error.message);
  }
}

// tratarErroDivisaoPorZero();

// Exercicio 7

//Moodulo ficticio
function lerArquivo() {
  try {
    //const conteudoArquivo = "Conteudo do arquivo ficticio";
    console.log("Conteudo do arquivo:", conteudoArquivo);
  } catch (error) {
    console.error("Erro: Ocorreu um erro na leitura", error);
  } finally {
    console.log("Bloco finally esta sendo executado e encerra a operação");
  }
}
// lerArquivo();

//Modulo FS

function lerArquivoFS() {
  const fs = require("fs");
  try {
    const conteudoArquivo = fs.readFileSync("Arquivo.txt", "utf-8");
    console.log(conteudoArquivo);
  } catch (error) {
    console.error("Erro: erro ao ler o arquivo", error.message);
  } finally {
    console.log("Bloco finally esta sendo executado e encerra a operação");
  }
}
// lerArquivoFS();

//Exercicio 8

let banco = {
  registro1: { id: 1, nome: "nome 1" },
  registro2: { id: 2, nome: "nome 2" },
  registro3: { id: 3, nome: "nome 3" },
};

function conectarBancoDeDados() {
  try {
    const resultado = banco.registro1;
    if (!resultado) {
      throw new Error("Erro: O registro não foi encontrado");
    } else {
      console.log("Registro encontrado", resultado);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Conexão foi encerrada");
  }
}

// conectarBancoDeDados();
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
