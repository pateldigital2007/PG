document.addEventListener("click",function(){
document.getElementById("bgmusic").play();
},{once:true});

for(let i=0;i<40;i++){
let f=document.createElement("div");
f.className="flower";
f.innerHTML=["🌸","🌹","🌺","🌼","🌷"][Math.floor(Math.random()*5)];
f.style.left=Math.random()*100+"vw";
f.style.animationDuration=(4+Math.random()*6)+"s";
document.body.appendChild(f);
}

let slides=document.querySelectorAll(".slide");
let current=0;

function next(){

slides[current].classList.remove("active");

current++;

if(current<slides.length){
slides[current].classList.add("active");
}

}

function forgive(){

for(let i=0;i<30;i++){

let h=document.createElement("div");
h.className="heart";
h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";
h.style.bottom="0";

document.body.appendChild(h);

}

next();

}