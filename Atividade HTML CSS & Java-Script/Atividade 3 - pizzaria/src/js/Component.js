<<<<<<< HEAD
export class Component {
  #element;
  constructor(tagName) {
    this.tagName = tagName;
    this.#element = null;
    this.build();
  }

  build = () => (this.#element = document.createElement(this.tagName));

  render = (parent) => {
    if (parent && this.#element) {
      parent.appendChild(this.#element);
    }
  };

  get element() {
    return this.#element;
  }
}
=======
export class Component {
  #element;
  constructor(tagName) {
    this.tagName = tagName;
    this.#element = null;
    this.build();
  }

  build = () => (this.#element = document.createElement(this.tagName));

  render = (parent) => {
    if (parent && this.#element) {
      parent.appendChild(this.#element);
    }
  };

  get element() {
    return this.#element;
  }
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
