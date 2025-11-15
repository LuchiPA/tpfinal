let juego; 
let imgMenu;
let imgInstrucciones;
let imgPradera;
let imgPerder;
let imgGanar;
let imgCreditos;
let imgPasto;
function preload() {
  imgMenu = loadImage("img/Imagen0.png");
  imgInstrucciones = loadImage("img/fondo.png");
  imgPradera = loadImage("img/fondo.png");
  imgPerder = loadImage("img/perder.png");
  imgGanar = loadImage("img/Imagen0.png");
  imgCreditos = loadImage("img/creditos.png")
  imgPasto= loadImage("img/pasto.png")
  
}

function setup() {
createCanvas(640,480);
juego = new Juego (imgMenu,imgInstrucciones);
}


function draw() {
  background(0);
 juego.mostrar();
}   
