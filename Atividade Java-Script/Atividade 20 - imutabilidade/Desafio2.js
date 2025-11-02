<<<<<<< HEAD
//Desafio 2

//Objeto de livros

const books = [
  { title: "JavaScript Avançado", author: "Fulano", status: "Disponível" },
];

//Funções de criação

const addBook = (listBooks, newTitle, newAuthor) => [
  ...listBooks,
  { title: newTitle, author: newAuthor, status: "Disponível" },
];

const updateBookStatus = (listBooks, title, newStatus) =>
  listBooks.map((book) =>
    book.title === title ? { ...book, status: newStatus } : book
  );

const removeBook = (listBooks, title) =>
  listBooks.filter((book) => book.title !== title);

//Criação de variaveis

const updateAddBook = addBook(books, "Imutabilidade em JS", "Beltrano");
const updateBook = updateBookStatus(
  updateAddBook,
  "JavaScript Avançado",
  "Emprestado"
);
const updateRemove = removeBook(updateBook, "JavaScript Avançado");

//Teste de funções

console.log("Original: ", books);
console.log("Adicionar: ", updateAddBook);
console.log("Atualizar: ", updateBook);
console.log("Remover: ", updateRemove);
=======
//Desafio 2

//Objeto de livros

const books = [
  { title: "JavaScript Avançado", author: "Fulano", status: "Disponível" },
];

//Funções de criação

const addBook = (listBooks, newTitle, newAuthor) => [
  ...listBooks,
  { title: newTitle, author: newAuthor, status: "Disponível" },
];

const updateBookStatus = (listBooks, title, newStatus) =>
  listBooks.map((book) =>
    book.title === title ? { ...book, status: newStatus } : book
  );

const removeBook = (listBooks, title) =>
  listBooks.filter((book) => book.title !== title);

//Criação de variaveis

const updateAddBook = addBook(books, "Imutabilidade em JS", "Beltrano");
const updateBook = updateBookStatus(
  updateAddBook,
  "JavaScript Avançado",
  "Emprestado"
);
const updateRemove = removeBook(updateBook, "JavaScript Avançado");

//Teste de funções

console.log("Original: ", books);
console.log("Adicionar: ", updateAddBook);
console.log("Atualizar: ", updateBook);
console.log("Remover: ", updateRemove);
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
