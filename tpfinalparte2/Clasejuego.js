class Juego {
  constructor() {
    this.jugador = new Jugador (60,100,0.9,18);
    this.obstaculos = [];
    this.leon = new Leon(680, 320); //ESTO ES DE LEON
}
  mostrar() {
    fill(100, 200, 100);
    rect(0, 380, width, 100);
    this.jugador.dibujarJ();
    this.jugador.mover();
    this.leon.mover();//ESTO ES DE LEON
    this.leon.dibujar();//ESTO ES DE LEON
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.obstaculos.length === 0 || this.obstaculos[this.obstaculos.length - 1].x < width - random(260,600)){
      this.crearObstaculo();
          
  }
 }
 for (let i = 0;i < this.obstaculos.length; i++) {
 let obTemp = this.obstaculos[i];
 obTemp.mover();
 obTemp.dibujarO();
 
 if (obTemp.hitBox (this.jugador)){
    this.perder();
 }
 }
}
crearObstaculo() {
  let tipo = int(random(4));
  let nuevo;

  if (tipo === 0) {
    nuevo = new Obstaculos(680, 290, 40, 90, 5,"arbusto");
  } else if (tipo === 1) {
    nuevo = new Obstaculos(680, 320, 40, 60, 5,"piedra");
  } else if (tipo === 2) {
    nuevo = new Obstaculos(680, 260, 40, 30, 5, "pajaro");
  } else if (tipo === 3){
    nuevo = new Obstaculos(680, 350, 260, 30, 5, "tronco");
  }

  this.obstaculos.push(nuevo);
}

perder(){
  noLoop();
  fill(255,0,0);
  textSize(40);
  textAlign(CENTER,CENTER);
  text("Perdiste",width / 2, height /2);
}
}
