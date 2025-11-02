<<<<<<< HEAD
//Desafio 1

//Lista de contatos
const contactList = [
  { name: "Ana", phone: "1234-5678" },
  { name: "Lucas", phone: "12121212" },
];

//Funções

const addContact = (contactList, name, phone) => {
  return [...contactList, { name, phone }];
};

const updateContact = (contactList, name, newPhone) =>
  contactList.map((item) =>
    item.name === name ? { ...item, phone: newPhone } : item
  );

const removeContact = (contactList, name) =>
  contactList.filter((item) => item.name !== name);

// Variaveis que gurdam a função

const updateAddContact = addContact(contactList, "pedro", "1145-6746");
const updatePhoneContact = updateContact(updateAddContact, "Ana", "0000-0000");
const updateRemoveContact = removeContact(updatePhoneContact, "Ana");

//Execução das funções

console.log("Original: ", contactList);
console.log("Adicionar: ", updateAddContact);
console.log("Atualizar: ", updatePhoneContact);
console.log("Remover: ", updateRemoveContact);
=======
//Desafio 1

//Lista de contatos
const contactList = [
  { name: "Ana", phone: "1234-5678" },
  { name: "Lucas", phone: "12121212" },
];

//Funções

const addContact = (contactList, name, phone) => {
  return [...contactList, { name, phone }];
};

const updateContact = (contactList, name, newPhone) =>
  contactList.map((item) =>
    item.name === name ? { ...item, phone: newPhone } : item
  );

const removeContact = (contactList, name) =>
  contactList.filter((item) => item.name !== name);

// Variaveis que gurdam a função

const updateAddContact = addContact(contactList, "pedro", "1145-6746");
const updatePhoneContact = updateContact(updateAddContact, "Ana", "0000-0000");
const updateRemoveContact = removeContact(updatePhoneContact, "Ana");

//Execução das funções

console.log("Original: ", contactList);
console.log("Adicionar: ", updateAddContact);
console.log("Atualizar: ", updatePhoneContact);
console.log("Remover: ", updateRemoveContact);
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
