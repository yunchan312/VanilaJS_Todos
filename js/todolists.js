const todoList = document.querySelector("#todo-lists");
const todoForm = document.querySelector("#todo-list-form");
const todoInput = document.querySelector("#todo-list-form input");
const todoButton = document.querySelector("#todo-list-form button");

let toDos = [];
const TODOS_KEY = "todos";

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo);
  span.innerText = todoObj.text;
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  saveToDos();
}

const savedTodos = localStorage.getItem(TODOS_KEY);
function handleTodoFormSubmit(e) {
  e.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todoInput.value = "";
  if (toDos.length > 19) {
    alert("Too many todos! (20/20)");
  } else {
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
  }
  console.log(toDos.length);
}

if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo);
}

todoForm.addEventListener("submit", handleTodoFormSubmit);
