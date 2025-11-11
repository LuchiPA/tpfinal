class Obstaculos{
     constructor(x,y,ancho,alto,velocidad) {
       this.x = x;
       this.y = y;
       this.alto = alto;
       this.ancho = ancho;
       this.velocidad = velocidad
   }
   
   dibujarO(){
   fill(150);
   rect(this.x, this.y, this.ancho, this.alto);
   
   
   
   
   }
   mover(){
     this.x -= this.velocidad;
   
   
   
   }
}
