<<<<<<< HEAD
import { Component } from "./Component.js";

export class Form extends Component {
  constructor() {
    super("form");
    this.build();
  }

  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
=======
import { Component } from "./Component.js";

export class Form extends Component {
  constructor() {
    super("form");
    this.build();
  }

  addChild(component) {
    if (component instanceof Component) {
      this.element.appendChild(component.element);
    }
  }
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
