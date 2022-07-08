const colors = ["#2E8CD5","#904FAD","#EEBC12"];
const h1 = document.querySelector("h1");
h1.style.color = "white";
const color = document.querySelector(".color");


function handleWidthColor() {
    const wframe = window.innerWidth;
    if (wframe <= 500) {
      color.style.backgroundColor = colors[0];
    } else if (wframe > 500 && wframe <= 900) {
      color.style.backgroundColor = colors[1];
    } else if (wframe > 900) {
      color.style.backgroundColor = colors[2];
    }
  }

window.addEventListener("resize",handleWidthColor);