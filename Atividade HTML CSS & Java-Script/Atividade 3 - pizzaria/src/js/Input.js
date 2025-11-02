<<<<<<< HEAD
import { Component } from "./Component.js";

export class Input extends Component {
  constructor(typer = "text", placeholder = "") {
    super("input");
    this.build();
    this.element.typer = typer;
    this.element.placeholder = placeholder;
  }
}
=======
import { Component } from "./Component.js";

export class Input extends Component {
  constructor(typer = "text", placeholder = "") {
    super("input");
    this.build();
    this.element.typer = typer;
    this.element.placeholder = placeholder;
  }
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
