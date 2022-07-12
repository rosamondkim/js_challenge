const numberGameForm = document.querySelector("#numberGame");
const numberRange = document.querySelector("#numberRange");
const numberGuess = document.querySelector("#numberGuess");
const numberCompared = document.querySelector(".compared");
const tada = document.querySelector(".tada");

function onNumberGame(event){
    event.preventDefault();
    const randomNumber = Math.ceil(Math.random() * numberRange.value);
    numberCompared.innerHTML = `You chose: ${numberGuess.value}, the machine chose ${randomNumber}.`;
    
    if( numberGuess.value == randomNumber ){
        tada.innerHTML = "You Won!"
    } else {
        tada.innerHTML = "You Lost!"
    }
};
    
numberGameForm.addEventListener("submit",onNumberGame);