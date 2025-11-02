<<<<<<< HEAD
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Button } from "./Button.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = new Form();
  form.element.id = "pizza-order-form";

  const nameLabel = new Label("nome: ");
  const nameInput = new Input("text", "Digite seu nome");
  nameInput.element.id = "name";

  form.addChild(nameLabel);
  form.addChild(nameInput);

  const pizzaLabel = new Label("Escolha seu sabor de pizza");
  const pizzaInput = new Input("text", "Ex: Calabresa, Marguerida...");
  pizzaInput.element.id = "pizza";

  form.addChild(pizzaLabel);
  form.addChild(pizzaInput);

  const quantityLabel = new Label("Quantidade: ");
  const quantityInput = new Input("Number", "Ex: 2, 3, 1/2...");
  quantityInput.element.id = "quantity";

  form.addChild(quantityLabel);
  form.addChild(quantityInput);

  const submitButton = new Button("Fazer pedido");
  form.addChild(submitButton);

  form.element.addEventListener("submit", (event) => {
    event.preventDefault();
    const pedido = {
      nome: nameInput.element.value,
      pizza: pizzaInput.element.value,
      quantidade: quantityInput.element.value,
    };

    localStorage.setItem("Ultimo pedido", JSON.stringify(pedido));
    alert("Pedido feito com sucesso!");
  });

  form.render(document.body);
});
=======
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { Label } from "./Label.js";
import { Button } from "./Button.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = new Form();
  form.element.id = "pizza-order-form";

  const nameLabel = new Label("nome: ");
  const nameInput = new Input("text", "Digite seu nome");
  nameInput.element.id = "name";

  form.addChild(nameLabel);
  form.addChild(nameInput);

  const pizzaLabel = new Label("Escolha seu sabor de pizza");
  const pizzaInput = new Input("text", "Ex: Calabresa, Marguerida...");
  pizzaInput.element.id = "pizza";

  form.addChild(pizzaLabel);
  form.addChild(pizzaInput);

  const quantityLabel = new Label("Quantidade: ");
  const quantityInput = new Input("Number", "Ex: 2, 3, 1/2...");
  quantityInput.element.id = "quantity";

  form.addChild(quantityLabel);
  form.addChild(quantityInput);

  const submitButton = new Button("Fazer pedido");
  form.addChild(submitButton);

  form.element.addEventListener("submit", (event) => {
    event.preventDefault();
    const pedido = {
      nome: nameInput.element.value,
      pizza: pizzaInput.element.value,
      quantidade: quantityInput.element.value,
    };

    localStorage.setItem("Ultimo pedido", JSON.stringify(pedido));
    alert("Pedido feito com sucesso!");
  });

  form.render(document.body);
});
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
