<<<<<<< HEAD
export default class member {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }

  authenticate = (email, password) => {
    if (email === this.email && password === this.password) {
      console.log(`Olá ${this.fullName}, bem vindo de volta`);
    } else {
      console.log(`Login invalido, tente novamente`);
    }
  };
}
=======
export default class member {
  constructor(fullName, email, password) {
    this.fullName = fullName;
    this.email = email;
    this.password = password;
  }

  authenticate = (email, password) => {
    if (email === this.email && password === this.password) {
      console.log(`Olá ${this.fullName}, bem vindo de volta`);
    } else {
      console.log(`Login invalido, tente novamente`);
    }
  };
}
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
