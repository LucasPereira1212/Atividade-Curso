<<<<<<< HEAD
import Post from "./ClassPost.js";

export default class Author {
  constructor(nome) {
    this.nome = nome;
    this.posts = [];
  }

  creatPost = (title, content) => {
    const newPost = new Post(title, content, this);
    this.posts.push(newPost);
    return newPost;
  };

  listPost = () => this.posts.map((post) => post.title);
}
=======
import Post from "./ClassPost.js";

export default class Author {
  constructor(nome) {
    this.nome = nome;
    this.posts = [];
  }

  creatPost = (title, content) => {
    const newPost = new Post(title, content, this);
    this.posts.push(newPost);
    return newPost;
  };

  listPost = () => this.posts.map((post) => post.title);
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
