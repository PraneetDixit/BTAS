window.onload = function(){
    const tHeight = window.innerHeight;
    const mHeight = 
parseInt(window.getComputedStyle(document.getElementsByTagName("nav")[0]).height);
    document.getElementById("carousel").style.height = `${tHeight - mHeight}px`;
}

let currentSlide = 1;
let back = document.getElementById("back");
let forth = document.getElementById("forward");

let current = 1;
const byX = parseInt(window.getComputedStyle(document.getElementById("i1")).width);

function ahead(){
    if(current<4){
        document.getElementById("imgCont").scroll(byX*current,0);
        current++;
    }else{
        document.getElementById("imgCont").scroll(0,0);
        current = 1; 
    }
}

back.addEventListener("click", function(){
    if(current>1){
        current--;
        document.getElementById("imgCont").scroll(byX*(current-1),0);
    }else{
        current = 4; 
        document.getElementById("imgCont").scroll(byX*current,0);
    }
});

forth.addEventListener("click", ahead);

setInterval(ahead, 4000);