<<<<<<< HEAD
import { Personagem } from "./Personagem.js";

export class Soldado extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, poderEscudo) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.poderEscudo = poderEscudo;
    this.addEscudo();
  }

  addEscudo() {
    return (this.poderDefesa = this.poderDefesa + this.poderEscudo);
  }

  atacar(alvo) {
    const energiaAlvo = alvo.energia;
    const poderAtaque = this.poderAtaque;
    const poderDefesa = alvo.poderDefesa;

    if (poderDefesa > poderAtaque) {
      alvo.poderDefesa = poderDefesa - poderAtaque;
      return `O poder de defesa do ${
        alvo.nome
      } é ${poderDefesa} e seu poder de ataque é inferior, então o escudo diminuira para ${
        poderDefesa - poderAtaque
      } e não dimunuira a energia do ${alvo.nome}`;
    } else {
      const dano = poderAtaque - poderDefesa;
      alvo.poderDefesa = 0;
      alvo.energia = energiaAlvo - dano;
      return `O escudo do ${alvo.nome} foi quebrado, e foi reduzido a energia dele para ${alvo.energia}`;
    }
  }
}
=======
import { Personagem } from "./Personagem.js";

export class Soldado extends Personagem {
  constructor(nome, energia, poderAtaque, poderDefesa, poderEscudo) {
    super(nome, energia, poderAtaque, poderDefesa);
    this.poderEscudo = poderEscudo;
    this.addEscudo();
  }

  addEscudo() {
    return (this.poderDefesa = this.poderDefesa + this.poderEscudo);
  }

  atacar(alvo) {
    const energiaAlvo = alvo.energia;
    const poderAtaque = this.poderAtaque;
    const poderDefesa = alvo.poderDefesa;

    if (poderDefesa > poderAtaque) {
      alvo.poderDefesa = poderDefesa - poderAtaque;
      return `O poder de defesa do ${
        alvo.nome
      } é ${poderDefesa} e seu poder de ataque é inferior, então o escudo diminuira para ${
        poderDefesa - poderAtaque
      } e não dimunuira a energia do ${alvo.nome}`;
    } else {
      const dano = poderAtaque - poderDefesa;
      alvo.poderDefesa = 0;
      alvo.energia = energiaAlvo - dano;
      return `O escudo do ${alvo.nome} foi quebrado, e foi reduzido a energia dele para ${alvo.energia}`;
    }
  }
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
