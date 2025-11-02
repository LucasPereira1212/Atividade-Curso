<<<<<<< HEAD
const message = document.getElementById("message");

function addUser(newUser) {
  message.textContent = `Usuário ${newUser} adicionado`;
}

function deleteUser(user) {
  message.textContent = `Usuário ${user} foi deletado`;
}

function updateUser(user, newInfo) {
  message.textContent = `O usuário ${user} adicionado nova informação: ${newInfo}`;
}

export { addUser, deleteUser, updateUser };
=======
const message = document.getElementById("message");

function addUser(newUser) {
  message.textContent = `Usuário ${newUser} adicionado`;
}

function deleteUser(user) {
  message.textContent = `Usuário ${user} foi deletado`;
}

function updateUser(user, newInfo) {
  message.textContent = `O usuário ${user} adicionado nova informação: ${newInfo}`;
}

export { addUser, deleteUser, updateUser };
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
