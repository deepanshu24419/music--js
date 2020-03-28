window.addEventListener('load',()=> {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector('.visual');
const colors =[
   " #60d394",
    "#d36060",
    "#333",
    "yellow",
    "pink",
    "aqua"
] ;   

    //lets get going with sound
    pads.forEach((pad,index) =>{
 pad.addEventListener('click',function(){
   
sounds[index].currentTime =0;     
 sounds[index].play() 
    createBubbles(index); 
        });
    });
    //create function for bubble
    const createBubbles = (index) => {
        const bubble= document.createElement("div")
        visual.appendChild(bubble);
        bubble.style.background = colors[index];
        bubble.style.animation="jump 1s ease";
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    };
    
    
    
});
