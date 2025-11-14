class Leon {
 constructor(x, y) {
this.x = x;
this.y = y;
this.velocidad = 2; 
this.ancho = 40;
this.alto = 60;
}
mover() {
    this.x += this.velocidad;
}
dibujar() {
fill(150); // gris
rect(this.x, this.y, this.ancho, this.alto);
  }
}
