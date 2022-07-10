const body = document.body;
const BIG_SCREEN = "bigScreen";
const MIDIUM_SCREEN = "midiumScreen";
const SMALL_SCREEN = "smallScreen";


function handleWindowWidth(){
    const width = window.innerWidth;
    if (width <= 700){
        body.classList.add(SMALL_SCREEN);
        body.classList.remove(MIDIUM_SCREEN, BIG_SCREEN);
        
    } else if ( width > 700 && width <= 1200 ){
        body.classList.add(MIDIUM_SCREEN);
        body.classList.remove(BIG_SCREEN, SMALL_SCREEN);

    } else {
        body.classList.add(BIG_SCREEN);
        body.classList.remove(MIDIUM_SCREEN,SMALL_SCREEN);
    }
};

window.addEventListener("resize",handleWindowWidth);
