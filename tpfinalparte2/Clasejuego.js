class Juego {
  constructor() {
    this.jugador = new Jugador (60,100,1,18);
    this.obstaculos = [];

}
  mostrar() {
    fill(100, 200, 100);
    rect(0, 380, width, 100);
    this.jugador.dibujarJ();
    this.jugador.mover();
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.obstaculos.length === 0 || this.obstaculos[this.obstaculos.length - 1].x < width - random(260,600)){
      this.crearObstaculo();
  }
 }for (let i = 0;i < this.obstaculos.length; i++) {
 let obTemp = this.obstaculos[i];
 obTemp.mover();
 obTemp.dibujarO();
 }
}
crearObstaculo() {
  let tipo = int(random(4));
  let nuevo;

  if (tipo === 0) {
    nuevo = new Obstaculos(680, 300, 40, 100, 5);
  } else if (tipo === 1) {
    nuevo = new Obstaculos(680, 340, 40, 60, 5);
  } else if (tipo === 2) {
    nuevo = new Obstaculos(680, 240, 40, 60, 5);
  } else if (tipo === 3){
    nuevo = new Obstaculos(680, 360, 260, 30, 5);
  }

  this.obstaculos.push(nuevo);
}
}
