//전체 내용 초기화
const btnReset=document.querySelector(".reset_cont");
btnReset.addEventListener("click",()=>{
    localStorage.clear();
    location.reload();
});