//greeting
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e){
    //모든 EventListener function의 첫번째 인자는 항상 event object이다.(지금 막 벌어진 일들에 대한 정보)
    e.preventDefault(); // 이벤트의 기본 동작을 막는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    
    //greeting.innerHTML="Hello " + username;
    paintingGreeting(username);
    
}

function paintingGreeting(username){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML=`${username}님 환영합니다.`;
}

//loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else{
    paintingGreeting(savedUsername);
}