const todoForm = document.getElementById("todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.getElementById("todoList");

const TODO_KEY="todo";

let toDo=[];

function saveTodo(){
    localStorage.setItem(TODO_KEY, JSON.stringify(toDo));
    //localStorate에는 string만 저장할 수 있고 Array는 저장할 수 없다.
    //그래서 JSON.stringify를 사용하여 Array를 string으로 변환하여 저장한다.
    //반대로 JSON.parse를 사용하여 string을 Array로 변환할수도 있다.
}


function deleteTodo(e){
    const li=e.target.parentElement;
    li.remove();
    toDo=toDo.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodo){
    const li=document.createElement("li");
    li.id=newTodo.id;
    const span=document.createElement("span");   
    span.innerText=newTodo.text;
    const button=document.createElement("button");
    button.innerText="❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    todoList.appendChild(li);

}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj={
        text:newTodo,
        id:Date.now()
    };
    toDo.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodo = localStorage.getItem(TODO_KEY);

if(savedTodo != null){
    const parsedTodo = JSON.parse(savedTodo);
    toDo = parsedTodo;
    parsedTodo.forEach(paintTodo);
}