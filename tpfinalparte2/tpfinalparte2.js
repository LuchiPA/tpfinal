let juego; 
let imgMenu;
let imgInstrucciones;
let imgPiedra;
let imgPradera;
function preload() {
  imgMenu = loadImage("img/Imagen0.png");
  imgInstrucciones = loadImage("img/fondo.png");
  imgPiedra = loadImage("img/piedra.png");
  imgPradera = loadImage("img/fondo.png");
}

function setup() {
createCanvas(640,480);
juego = new Juego (imgMenu,imgInstrucciones);
}


function draw() {
 background (255,100,10);
 juego.mostrar();
}   
