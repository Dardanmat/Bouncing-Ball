var v = 1;
var x = 0;
var y = 0;

var dx = 1;
var dy = 1;

var td = 1;

function initialize(e){

    aggiorna(e);

    setTimeout(() =>{
        initialize(e);
    },td)
}

function aggiorna(e){
    checkBorders(e);
    
    x += dx *v;
    y += dy *v;

    e.style.left = x + "px";
    e.style.top = y + "px";
}

function checkBorders(e){
    if(x >= width || x < 0){
       dx = -dx; 
    }
    if(y >= height || y < 0){
        dy = -dy; 
     }
}

var width = window.innerWidth;
var height = window.innerHeight;

function aggiornaFinestra(){

    width = window.innerWidth;
    height = window.innerHeight;

    setTimeout(() => {
        aggiornaFinestra();
    }, 10);
}