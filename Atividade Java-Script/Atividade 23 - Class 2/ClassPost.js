<<<<<<< HEAD
export default class Post {
  constructor(title, content, autor) {
    this.title = title;
    this.content = content;
    this.dataDePublicacao = new Date();
    this.autor = autor;
    this.comentarios = [];
  }

  addComment = (comment) => this.comentarios.push(comment);

  commentList = () =>
    this.comentarios.map(
      (comentario) => `${comentario.autor}: ${comentario.conteudo}`
    );
}
=======
export default class Post {
  constructor(title, content, autor) {
    this.title = title;
    this.content = content;
    this.dataDePublicacao = new Date();
    this.autor = autor;
    this.comentarios = [];
  }

  addComment = (comment) => this.comentarios.push(comment);

  commentList = () =>
    this.comentarios.map(
      (comentario) => `${comentario.autor}: ${comentario.conteudo}`
    );
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
