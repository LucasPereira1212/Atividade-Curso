<<<<<<< HEAD
import { Personagem } from "./Personagem.js";

export class Engenheiro extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeConcerto) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeConcerto = habilidadeConcerto;
  }

  atacar(alvo) {
    alvo.energia = this.habilidadeConcerto + alvo.energia;
    return `A energia do ${alvo.nome} foi acrescentada ${this.habilidadeConcerto} do ${this.nome} 
    para restaurar sua energia`;
  }
}
=======
import { Personagem } from "./Personagem.js";

export class Engenheiro extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeConcerto) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeConcerto = habilidadeConcerto;
  }

  atacar(alvo) {
    alvo.energia = this.habilidadeConcerto + alvo.energia;
    return `A energia do ${alvo.nome} foi acrescentada ${this.habilidadeConcerto} do ${this.nome} 
    para restaurar sua energia`;
  }
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
