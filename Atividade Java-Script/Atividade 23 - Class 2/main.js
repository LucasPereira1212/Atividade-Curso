<<<<<<< HEAD
import Comment from "./ClassComment.js";
import Author from "./ClassAuthor.js";

const autor1 = new Author("Marcos Silva");

const post1 = autor1.creatPost(
  "Introdução ao javaScript",
  "Esse é um conteudo sobre fundamentos do javaScript"
);

const post2 = autor1.creatPost(
  "Dicas de CSS",
  "Aqui estão algumas dicas úteis de estilização"
);

const comentario1 = new Comment("Ana", "JavaScript é incrivel");
const comentario2 = new Comment("José", "Adorei o conteudo");

post1.addComment(comentario1);
post1.addComment(comentario2);

console.log(`Poster de ${autor1.nome}:`, autor1.listPost());
console.log(`Comentario do post: ${post1.commentList()}`);
=======
import Comment from "./ClassComment.js";
import Author from "./ClassAuthor.js";

const autor1 = new Author("Marcos Silva");

const post1 = autor1.creatPost(
  "Introdução ao javaScript",
  "Esse é um conteudo sobre fundamentos do javaScript"
);

const post2 = autor1.creatPost(
  "Dicas de CSS",
  "Aqui estão algumas dicas úteis de estilização"
);

const comentario1 = new Comment("Ana", "JavaScript é incrivel");
const comentario2 = new Comment("José", "Adorei o conteudo");

post1.addComment(comentario1);
post1.addComment(comentario2);

console.log(`Poster de ${autor1.nome}:`, autor1.listPost());
console.log(`Comentario do post: ${post1.commentList()}`);
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
