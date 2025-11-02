<<<<<<< HEAD
import Member from "./ClassMember.js";
import Item from "./ClassItem.js";

//Class Member
console.log("Classe Member:");
const alice = new Member("Alice Johnson", "alice@email.com", "password123");

console.log("Funcionando:");
alice.authenticate("alice@email.com", "password123");

console.log("Não funcionando:");
alice.authenticate("alice@email.com", "wrongpassword");

//Class Item

console.log("Classe Item:");

const chair = new Item(
  "Cadeira de Escritório",
  "Cadeira confortávelcom ajuste de altura",
  150
);

chair.addToInventory(50);

console.log(chair.quantityAvailable); // 50

console.log(chair.applyOffer(20)); // 120

console.log(chair.applyOffer(10)); // 135
=======
import Member from "./ClassMember.js";
import Item from "./ClassItem.js";

//Class Member
console.log("Classe Member:");
const alice = new Member("Alice Johnson", "alice@email.com", "password123");

console.log("Funcionando:");
alice.authenticate("alice@email.com", "password123");

console.log("Não funcionando:");
alice.authenticate("alice@email.com", "wrongpassword");

//Class Item

console.log("Classe Item:");

const chair = new Item(
  "Cadeira de Escritório",
  "Cadeira confortávelcom ajuste de altura",
  150
);

chair.addToInventory(50);

console.log(chair.quantityAvailable); // 50

console.log(chair.applyOffer(20)); // 120

console.log(chair.applyOffer(10)); // 135
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
