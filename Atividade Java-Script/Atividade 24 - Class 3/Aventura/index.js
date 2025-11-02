<<<<<<< HEAD
import { Soldado } from "./classes/Soldado.js";
import { Engenheiro } from "./classes/Engenheiro.js";
import { Piloto } from "./classes/Piloto.js";
import { Medico } from "./classes/Medico.js";

const soldado = new Soldado("Soldado", 100, 100, 30, 50);
const engenheiro = new Engenheiro("Engenheiro", 100, 40, 40, 50);
const piloto = new Piloto("Piloto", 100, 100, 50, 20);
const medico = new Medico("Medico", 100, 20, 80, 100);

console.log(soldado.atacar(engenheiro));
console.log(engenheiro);
console.log(medico.atacar(engenheiro));
console.log(engenheiro);
console.log(piloto.atacar(soldado));
console.log(soldado);
console.log(engenheiro.atacar(soldado));
console.log(soldado);
=======
import { Soldado } from "./classes/Soldado.js";
import { Engenheiro } from "./classes/Engenheiro.js";
import { Piloto } from "./classes/Piloto.js";
import { Medico } from "./classes/Medico.js";

const soldado = new Soldado("Soldado", 100, 100, 30, 50);
const engenheiro = new Engenheiro("Engenheiro", 100, 40, 40, 50);
const piloto = new Piloto("Piloto", 100, 100, 50, 20);
const medico = new Medico("Medico", 100, 20, 80, 100);

console.log(soldado.atacar(engenheiro));
console.log(engenheiro);
console.log(medico.atacar(engenheiro));
console.log(engenheiro);
console.log(piloto.atacar(soldado));
console.log(soldado);
console.log(engenheiro.atacar(soldado));
console.log(soldado);
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
