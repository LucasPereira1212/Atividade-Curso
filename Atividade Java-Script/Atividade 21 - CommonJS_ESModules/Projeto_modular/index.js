<<<<<<< HEAD
import { addUser, deleteUser, updateUser } from "./userManager.js";

const userName = document.getElementById("userName");
const newUserIndo = document.getElementById("newUserInfo");

document.getElementById("addUserBtn").addEventListener("click", () => {
  addUser(userName.value);
});

document.getElementById("deleteUserBtn").addEventListener("click", () => {
  deleteUser(userName.value);
});

document.getElementById("updateUserBtn").addEventListener("click", () => {
  updateUser(userName.value, newUserIndo.value);
});
=======
import { addUser, deleteUser, updateUser } from "./userManager.js";

const userName = document.getElementById("userName");
const newUserIndo = document.getElementById("newUserInfo");

document.getElementById("addUserBtn").addEventListener("click", () => {
  addUser(userName.value);
});

document.getElementById("deleteUserBtn").addEventListener("click", () => {
  deleteUser(userName.value);
});

document.getElementById("updateUserBtn").addEventListener("click", () => {
  updateUser(userName.value, newUserIndo.value);
});
>>>>>>> 5e29ff19378e07df7d801c124942f540bcda1524
