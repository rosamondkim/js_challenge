// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>


const title = document.querySelector("h2");

const superEventHandler = {
    mouseenter:function(){
        title.style.color= colors[0];
        title.innerText ="The mouse is here!";
    },
    mouseleave:function(){
        title.style.color= colors[1];
        title.innerText = "The mouse is gone!";
    },
    contextmenu:function(){
        title.style.color= colors[4];
        title.innerText = "That was a right click!";
    },
    resize:function(){
        title.style.color= colors[2];
        title.innerText = "You just resized!";
    }
};
    
title.addEventListener("mouseenter",superEventHandler.mouseenter);
title.addEventListener("mouseleave",superEventHandler.mouseleave);
window.addEventListener("contextmenu",superEventHandler.contextmenu);
window.addEventListener("resize",superEventHandler.resize);