class Juego {
  constructor(imgMenu, imgInstrucciones) {
    this.estado = "menu";
    this.menu = "menu";
    this.imgMenu = imgMenu;
    this.imgInstrucciones = imgInstrucciones;
    this.instrucciones = false;
    this.ganaste 
  this.botonInicio = {x:
  width/2 - 75, y:
  height/2 + 90, ancho:
  150, alto:
    60
  };
  this.jugador = new Jugador (60, 100, 0.9, 18);
  this.obstaculos = [];
  this.leon = new Leon(this.jugador, this.obstaculos);
  this.puerta = new Puerta(this.jugador, 5);
  this.puntos = 0;  // contadora de obstáculos
  this.puntosPuerta = 60;
}
mostrar() {
  if (this.estado === "menu") {
    this.mostrarMenu(); // solo muestra el menú
  } else if (this.estado === "instrucciones") {
    this.mostrarInstrucciones();
  } else if (this.estado === "jugando") {
    if (imgPradera) {
        image(imgPradera, 0, 0, width, height);
      } 
    //suelo
    fill(100, 200, 100);
    rect(0, 380, width, 100);
    
   

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
      if (!obTemp.obsPasado && obTemp.x + obTemp.ancho < this.jugador.x && obTemp.tipoObs !== "tronco") {
        obTemp.obsPasado = true;  // para no contarlo dos veces
        this.puntos++;             // sumar un punto
      }
    }
      fill(255); // color blanco
  textSize(25);
  textAlign(LEFT, TOP);
  text("Puntos: " + this.puntos, 20, 20);
if (this.puntos >= this.puntosPuerta) {
    this.puerta.activar(); // hace que la puerta sea visible
}
     //jugador y leon
    this.jugador.dibujarJ();
    this.jugador.mover();
    this.leon.seguirJugador();
    this.leon.dibujar();
    if (this.leon.hitBox(this.jugador)) {
      this.perder();
    }
// Mostrar la puerta y chequear colisión
this.puerta.mostrar();
if (this.puerta.Colision()) {
    this.ganar();
}
  }
}


crearObstaculo() {
  let tipo = int(random(4));
  let nuevo;

  if (tipo === 0) {
    nuevo = new Obstaculos(680, 290, 40, 90, 5, "arbusto");
  } else if (tipo === 1) {
    nuevo = new Obstaculos(680, 320, 40, 60, 5, "piedra");
  } else if (tipo === 2) {
    nuevo = new Obstaculos(680, 260, 40, 30, 5, "pajaro");
  } else if (tipo === 3) {
    nuevo = new Obstaculos(680, 350, 260, 30, 5, "tronco");
  }

  this.obstaculos.push(nuevo);
}
ganar(){
    noLoop();
    fill(0,255,0);
    textSize(100);
    textAlign(CENTER,CENTER);
    text("Ganaste!", width/2, height/2);
    this.estado = "ganaste";
}
perder() {
  noLoop();
  fill(255, 0, 0);
  textSize(100);
  textAlign(CENTER, CENTER);
  text("Perdiste", width / 2, height /2);
  this.estado = "perdiste";
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
  textAlign(CENTER, CENTER);
  text("INICIAR", this.botonInicio.x + this.botonInicio.ancho/2, this.botonInicio.y + this.botonInicio.alto/2);

  if (mouseIsPressed) {
    if (mouseX > this.botonInicio.x && mouseX < this.botonInicio.x + this.botonInicio.ancho &&
      mouseY > this.botonInicio.y && mouseY < this.botonInicio.y + this.botonInicio.alto) {
      this.estado = "instrucciones" // cambiar al estado de juego
    }
  }
}
mostrarInstrucciones() {
  if (this.imgInstrucciones) {
    image(this.imgInstrucciones, 0, 0, width, height);
  } else {
    background(0);
  }
  let instrucciones = [
    "Instrucciones:",
    "- Evita los obstáculos",
    "- Flecha ARRIBA: saltar",
    "- Flecha ABAJO: Agacharse",
    "- Flecha DERECHA: avanzar",
    "- LLega a 60 puntos para ganar",
    "Presiona ESPACIO para comenzar"
  ];

  fill(255);
  textSize(25);
  textAlign(CENTER, CENTER);

  let yInicial = height / 2 - 80; // empieza un poco arriba
  let espacio = 35; // espacio entre cada línea

  for (let i = 0; i < instrucciones.length; i++) {
    text(instrucciones[i], width/2, yInicial + i * espacio);
  }

  // Al presionar espacio, se inicia el juego
  if (keyIsDown(32)) {
    this.instrucciones = false;
    this.estado = "jugando"; // ahora sí empezamos el juego
  }
}
}


////////////////clase puerta
class Puerta {
  constructor(jugador, velocidad) {
    this.jugador = jugador;
    this.ancho = jugador.tam + 20;
    this.alto = jugador.alto + 20;
    this.x = width + 50; // empieza fuera de pantalla
    this.y = 320 - 60;   // sobre el suelo
    this.velocidad = velocidad;
    this.visible = false;
    this.ganada = false;
  }
    mostrar() {
    if (!this.visible) return; // si puerta no es visible
    fill(150, 75, 0);
    rect(this.x, this.y, this.ancho, this.alto);
    // mover puerta hacia la izquierda 
    this.x -= this.velocidad;
  }

  activar() {
    this.visible = true; // hace que la puerta aparezca
  }

  Colision() {
    if (!this.visible) return false;
    // colisión con jugador
    if (
      this.jugador.x + this.jugador.tam > this.x &&
      this.jugador.x < this.x + this.ancho &&
      this.jugador.y + this.jugador.alto > this.y &&
      this.jugador.y < this.y + this.alto
    ) {
      this.ganada = true;
      return true
    }
    return false
}
}
