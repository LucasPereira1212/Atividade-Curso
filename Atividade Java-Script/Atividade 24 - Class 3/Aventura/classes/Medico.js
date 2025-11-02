<<<<<<< HEAD
import { Personagem } from "./Personagem.js";

export class Medico extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeCura) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeCura = habilidadeCura;
  }

  atacar(alvo) {
    alvo.energia += this.habilidadeCura;
    return `A energia do ${alvo.nome} foi acrescentada ${this.habilidadeCura} do ${this.nome} 
    para restaurar sua energia`;
  }
}
=======
import { Personagem } from "./Personagem.js";

export class Medico extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, habilidadeCura) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.habilidadeCura = habilidadeCura;
  }

  atacar(alvo) {
    alvo.energia += this.habilidadeCura;
    return `A energia do ${alvo.nome} foi acrescentada ${this.habilidadeCura} do ${this.nome} 
    para restaurar sua energia`;
  }
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
