const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");
let toDos = [];
const TODOS_KEY = "toDos";

function saveTodos () {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function toDosFilter (toDosId, liId) {
    return toDosId !== liId;
}

function deleteTodo (event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((item) => toDosFilter(item.id, parseInt(li.id)));
    li.remove();
    saveTodos();
}

function paintTodo (newTodoObj) {
    const newTodoLi = document.createElement("li");
    const newTodoSpan = document.createElement("span");
    const toDoDeleteBtn = document.createElement("button");

    toDoDeleteBtn.innerText = "❌";
    toDoDeleteBtn.addEventListener("click", deleteTodo);
    newTodoSpan.innerText = newTodoObj.text;
    toDoDeleteBtn.className = "todos-delete";
    newTodoLi.id = newTodoObj.id;
    newTodoLi.appendChild(toDoDeleteBtn);
    newTodoLi.appendChild(newTodoSpan);
    toDoList.appendChild(newTodoLi);
}

function handleTodoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };

    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !==  null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintTodo(item));
}
