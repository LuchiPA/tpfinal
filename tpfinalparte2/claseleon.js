class Leon{
constructor(x, y) {
  this.x = 240;
  this.y = 380;
  this.anchoL = 50;
  this.altoL = 50;
  this.velL= 2;
  this.colorL = color (150);
   
      
}    
       
dibujarL() {
  fill(this.color);
  rect(this.x, this.y, this.ancho, this.alto);
}

mover() {
  this.x -= this.velocidad;
  if (this.x + this.ancho < 0) {
    this.x = width + random(200, 400);
  }
}
hitBox (jugador) {
    let jugadorX = jugador.x;
    let jugadorY = jugador.y;
    let jugadorAncho = jugador.tam;
    let jugadorAlto = jugador.alto;
    let margen = 5;

    let colisionX =
      jugadorX + jugadorAncho > this.x + margen &&
      jugadorX < this.x + this.ancho - margen;
    let colisionY =
      jugadorY + jugadorAlto > this.y + margen &&
      jugadorY < this.y + this.alto - margen;

    return colisionX && colisionY;
  }
}
