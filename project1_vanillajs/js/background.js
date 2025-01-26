const images=["bg1.jpg","bg2.jpg","bg3.jpg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];//랜덤으로 이미지를 선택
const bgImage=document.createElement("img");//이미지 태그 생성
bgImage.src=`images/${chosenImage}`;//이미지 태그의 src속성에 이미지 경로를 넣는다.
bgImage.classList.add("bg_img");//이미지 태그에 클래스를 추가한다.
document.body.appendChild(bgImage);//body태그에 이미지태그를 추가한다.