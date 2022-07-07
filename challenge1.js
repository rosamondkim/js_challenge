const title = document.getElementById("title");

function handleClickTitle(){
    const currentColor = title.style.color;
    let newColor ;
    if (currentColor === "black"){
        newColor = "green";
    } else {
        newColor = "black";
    }
    title.style.color = newColor;
}

title.addEventListener("click",handleClickTitle);