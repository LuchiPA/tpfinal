class Jugador{
   constructor(ancho,alto,gravedad,salto) {
    this.x= 240;
    this.y= 380 - alto;
    this.tam= ancho;
    this.alto= alto;
    this.altoOriginal= alto;
    this.velY= 0;
    this.salto= salto; //fuerza de salto
    this.gravedad = gravedad;
    this.enTierra = true;
 
   }
   
   
   
   dibujarJ() {
   
    fill(0)
   if (keyIsDown(DOWN_ARROW)) {
    rect(this.x, this.y + this.altoOriginal / 2, this.tam, this.altoOriginal / 2);
  } else {
    rect(this.x, this.y, this.tam, this.altoOriginal);
  }
   }
   
   
   mover(){
     //salto
     if (keyIsDown(UP_ARROW) && this.enTierra) {
     this.velY = -this.salto;
     this.enTierra = false;
     }
     //agacharse
      
     this.velY += this.gravedad;
     this.y += this.velY;
     
     if( this.y + this.alto > 380) {
     this.y = 380 - this.alto;
     this.velY = 0;
     this.enTierra = true;
     }
   }
     
}
