class Juego {
  constructor(imgMenu) {
    this.estado = "menu";
    this.menu = "menu";
    this.imgMenu = imgMenu;
    this.botonInicio = {x:width/2 - 75, y: height/2 + 90, ancho:150, alto:60 };
    this.jugador = new Jugador (60, 100, 0.9, 18);
    this.obstaculos = [];
    this.leon = new Leon(this.jugador, this.obstaculos);
  }
 mostrar() {
   if (this.estado === "menu") {
    this.mostrarMenu(); // solo muestra el menú
  } else if (this.estado === "jugando") {
 //suelo
 fill(100, 200, 100);
 rect(0, 380, width, 100);
 //jugador
 this.jugador.dibujarJ();
 this.jugador.mover();
 
 //crear obstaculos
 if (keyIsDown(RIGHT_ARROW)) {
 if (this.obstaculos.length === 0 || this.obstaculos[this.obstaculos.length - 1].x < width - random(260, 600)) {
 this.crearObstaculo();
 }
 }
 for (let i = 0; i < this.obstaculos.length; i++) {
 let obTemp = this.obstaculos[i];
 obTemp.mover();
 obTemp.dibujarO();
 
 if (obTemp.hitBox (this.jugador)) {
 this.perder();
 }
 }
 this.leon.seguirJugador();
 this.leon.dibujar();
 if (this.leon.hitBox(this.jugador)) {
 this.perder();
 }
 }
 }
 crearObstaculo() {
 let tipo = int(random(4));
 let nuevo;
 
 if (tipo === 0) {
 nuevo = new Obstaculos(680, 290, 40, 90, 5, "arbusto");
 } else if (tipo === 1) {
 nuevo = new Obstaculos(680, 320, 40, 60, 5, "piedra",);
 } else if (tipo === 2) {
 nuevo = new Obstaculos(680, 260, 40, 30, 5, "pajaro");
 } else if (tipo === 3) {
 nuevo = new Obstaculos(680, 350, 260, 30, 5, "tronco");
 }
 
 this.obstaculos.push(nuevo);
 }
 
 perder() {
 noLoop();
 fill(255, 0, 0);
 textSize(100);
 textAlign(CENTER, CENTER);
 text("Perdiste", width / 2, height /2);
 }
 
 
mostrarMenu() {
  if (this.imgMenu) {
    image(this.imgMenu, 0, 0, width, height);
  } else {
    background(0);
  }
  // botón
  fill(0, 200, 100);
  rect(this.botonInicio.x, this.botonInicio.y, this.botonInicio.ancho, this.botonInicio.alto, 15);
  fill(255);
  textSize(25);
  textAlign(CENTER,CENTER);
  text("INICIAR", this.botonInicio.x + this.botonInicio.ancho/2, this.botonInicio.y + this.botonInicio.alto/2);

  if (mouseIsPressed) {
    if (mouseX > this.botonInicio.x && mouseX < this.botonInicio.x + this.botonInicio.ancho &&
      mouseY > this.botonInicio.y && mouseY < this.botonInicio.y + this.botonInicio.alto) {
      this.estado = "jugando"; // cambiar al estado de juego
    }
  }
}
}
