let current = 1;

function nextSlide(){

document.getElementById("slide"+current).classList.add("hidden");

current++;

let next = document.getElementById("slide"+current);

if(next){
next.classList.remove("hidden");
}

}

setInterval(()=>{

let heart = document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left = Math.random()*100 + "vw";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

},500);


window.addEventListener("click", ()=>{

let music = document.getElementById("bgmusic");

music.play().catch(()=>{});

});