let juego; 
let imgMenu;
let imgPiedra;
function preload() {
  imgMenu = loadImage("img/Imagen0.png");
  imgPiedra = loadImage("img/piedra.png");
}

function setup() {
createCanvas(640,480);
juego = new Juego (imgMenu);
}


function draw() {
 background (255,100,10);
 juego.mostrar();
}   
