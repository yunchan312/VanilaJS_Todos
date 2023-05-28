const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const todoListsContainer = document.querySelector("#todo-list-form-container");
const loginName = document.querySelector("#name");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN);
  todoListsContainer.classList.remove(HIDDEN);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greetings(username);
}
function greetings(username) {
  loginName.innerText = `${username}'s Todo Lists`;
  loginForm.classList.add(HIDDEN);
  todoListsContainer.classList.remove(HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  greetings(savedUsername);
}
