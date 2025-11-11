let juego; 


function setup() {
createCanvas(640,480);
juego = new Juego
}


function draw() {
 background (255,100,10);
 juego.mostrar();
}   


//falta esto:
//leon,seguir jugador
//colision con leon
//imagen y sonido
//perder al colisionar con leon
//ganar al llegar a la puerta (por tiempo o por puntos conseguidos),no hice la puerta todavia 
