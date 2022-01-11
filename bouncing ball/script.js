var block=document.getElementById("block");
var hole=document.getElementById("hole");
var character=document.getElementById("character");
var jumping=0;
var counter=0;

hole.addEventListener('animationiteration',()=>{
var random=-((Math.random()*300)+150);
hole.style.top=random+"px";
counter++;
});
setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
    character.style.top=(characterTop+3)+"px";
    }
    if (characterTop>480) {
        alert("game over .Score: "+counter);
        character.style.top=100+"px";
        counter=0;
    }
},10) 

function jump(){
    jumping=1;
    jumpCount=0;
   var jumpinterval=setInterval(function(){
       var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
       if((characterTop>6) &&(counter<15)){
       character.style.top=(characterTop-53)+"px";
       }
       if (jumpCount>20) {
           clearInterval(jumpinterval);
           jumping=0;
           jumpCount=0;
       }
jumpCount++;
   },10);
}