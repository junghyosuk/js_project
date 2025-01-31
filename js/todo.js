const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

const TODO_KEY = "todo";

let toDo = [];

// 체크 상태를 저장하는 함수
function saveTodo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
}

// 할일 삭제
function deleteTodo(e) {
    const li = e.target.parentElement;
    li.remove();
    toDo = toDo.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

// 할일 추가 및 체크 상태 저장
function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("chk_todo");
    checkbox.checked = newTodo.checked; // 체크 상태 설정
    checkbox.addEventListener("change", () => {
        newTodo.checked = checkbox.checked; // 체크 상태 업데이트
        saveTodo(); // 상태 저장
    });

    li.appendChild(checkbox);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

// 할일 제출 처리
function handleTodoSubmit(e) {
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        checked: false // 기본적으로 체크되지 않음
    };
    toDo.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

// 할일 목록 불러오기
todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if (savedTodo != null) {
    const parsedTodo = JSON.parse(savedTodo);
    toDo = parsedTodo;
    parsedTodo.forEach(paintTodo);
}
