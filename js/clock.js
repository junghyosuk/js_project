const clock=document.querySelector('#clock');

function getClock(){
    const date = new Date();
    const hours=String(date.getHours()).padStart(2, "0"); //2자리 숫자로 만들어준다. 1->01
    const minutes=String(date.getMinutes()).padStart(2, "0"); //2자리 숫자로 만들어준다. 1->01;
    const seconds=String(date.getSeconds()).padStart(2, "0"); //2자리 숫자로 만들어준다. 1->01;
    clock.innerText = `현재시간 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //1초마다 getClock함수를 실행한다.