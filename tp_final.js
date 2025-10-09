let imagenes = [];
let click = 0;
let texto =[];
let posXBotonInicial;//Estos son los botones que hacen arrancar el juego
let posYBotonInicial;//Estos son los botones que hacen arrancar el juego
let tamBoton; //Este es el boton del tamaño que yo renombre mal :P
let posXBoton2Creditos;//Estos son los botones que llevan a los creditos
let posYBoton2Creditos; //Estos son los botones que llevan a los creditos
let posXBoton;  //Estos son los botones de decisión
let posYBoton; //Estos son los botones de decisión
let posXBoton2; //Estos son los botones de decisión
let posYBoton2; //Estos son los botones de decisión

function preload() {
  for (let i = 0; i < 23; i++) {
    imagenes[i] = loadImage('img/imagen'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  tamBoton = 50;
  posXBotonInicial = width / 2 - (tamBoton * 1.5);
  posYBotonInicial = height - 150;
  posXBoton2Creditos = posXBotonInicial;
  posYBoton2Creditos = posYBotonInicial + tamBoton + 20;
 posXBoton =width / 6;
 posYBoton =height - height / 3 + 70;
 posXBoton2 = width - width / 3;
 posYBoton2 =height - height / 3 + 70;
 tamBoton = 50;
  for (let i=0; i<23; i++) {
    textSize (25);
    texto [0]='La Sabana';
    texto [1]='Este es el hogar de los Hadley, una familia acomodada que se ha mudado recientmente a esta casa automatizada. La familia esta compuesta del George Hadley, su esposa  Lydia, y sus hijos, Peter y Wendy.';
    texto [2]='Últimamente Peter y Wendy han estado obsecionados en su cuarto de juego con una simulación hiperrealista de una sabana africana con sanguinarios leones';
    texto [3]='Lydia: Estoy preocupada por los niños, George. Esa simulación de la sabana lleva reproduciendose hace semanas, ¿Que deberíamos de hacer?';
    texto [4]='Seguro que no es nada, Lydia. A veces hay que dejar a los niños ser niños. Viendo la resistencia de su esposo, Lydia decide no seguir con el tema y continuar con la cena';
    texto [5]='Días despues, aun dudosa, la señora Hardley, nota que los niños siguen con la proyección de la sabana. -Los niños siguen con esos leones...¿No sería buena idea llamar al señor McClean? Él es psicologo.';
    texto [6]='George lo pensó unos segundos, ¿Podría ser que hubiera algo malo con el cuarto? Pero pronto borró esos pensamiento. Era solo una habitación holográfica';
    texto [7]='-McClean es un hombre ocupad, Lydia, ¿Vos crees que va a tener tiempos para poder ver una habitación llena de leones? Seguro que es solo una fase. Ya se les pasará';
    texto [8]='Sin el apoyo de su esposo, Lydia, se cansa de intentar y decide dejar ser a los niños. Tal vez es como su marido dice y solo necesitan espacio. Peter y Wendy comienzan a separarse mas y mas de sus padres, abstrayendose en su mundo africano';
    texto [9]='George va a investigar y se encuentra que la habitación no responde a sus comandos. Además halla su billetera mordida y escuchas gritos a los lejos, ¿Que debería de hacer?';
    texto [10]='Tienes razón, Lydia, esto de los niños se esta saliendo de control. Por la mañana, George, contacta a su amigo McClean, para que analice la habitación';
    texto [11]='McClean recomienda apagar la habitación totalmente e increpa a George por haber dejado que la casa criara a su familia, pues ahora sus hijos no lo respetan y usan la habitación de forma hostil, ¿Que debería de hacer George?';
    texto [12]='-¿McClean?¿No crees que exageras?Además, no importa lo que los niños hagan en ese cuarto. Es solo un juego. Rindiendose por la negación de su amigo, McClean decide irse, esperando lo mejor para la familia Hardley.';
    texto [13]='George decide desconectar todos los aparatos de la casa y planea llevarse a la familia a un viaje a Iowa para desconectarlos de la tecnología, lo cual pone de mal humor a Peter y a Wendy';
    texto [14]='George, ¿Podría conectar la habitación de nuevo? Los niños estan haciendo un escandalo. Por favor. ¿Que debería de hacer George?';
    texto [15]='Esta bien, Lydia, pero que sepas que no es lo que recomendó McClean.';
    texto [16]='George y Lydia empacan para irse a Iowa de vacaciones con los niños, los cuales cedieron luego de un poco de oposición de su parte.';
    texto [17]='Fue entonces cuando Lydia y George escucharon los gritos de sus hijos desde el cuarto de juego. ¡Mama! ¡Papa! ¡Vengan!';
    texto [18]='Al llegar al cuarto, los niños encierran a George y a Lydia, dejandolos contra los leones. -¡Déjenos salir, niños!';
    texto [22]='Creditos: Lucas Ortega y Luciano';
  }
}

function draw() {
  background(0);
  image(imagenes[click], 0, 0, 640, 480);
if (click == 0) {
  fill(0, 0, 0, 90);
  rect(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton, 10);
  rect(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton, 10);
  fill (255);
  textSize (20);
  textAlign (CENTER, CENTER);
  text("Inicio", posXBotonInicial + (tamBoton * 1.5), posYBotonInicial + tamBoton / 2);
  text("Créditos", posXBoton2Creditos + (tamBoton * 1.5), posYBoton2Creditos + tamBoton / 2);
} 
  else if (click == 1) {
    fill(0, 0, 0, 90);
    rect(-12, 310, 660, 200, 20); //Acá moví el rect un poco mas abajo
    fill(255);
    textSize(22);
    textAlign(LEFT, TOP);
    text(texto[click], 40, 330, 560, 200); //esto mueve el texto un poco mas abajo 
  }
//Este else if hace que las otra imagenes de dibujen normalmente
  else if (click != 19 && click != 20 && click != 21 && click != 22) {
    fill(0, 0, 0, 90);
    rect(-12, 280, 660, 200, 20);
    fill(255);
    textSize(22);
    textAlign(LEFT, TOP);
    text(texto[click], 40, 300, 560, 200);
}
if (click == 0) {
    // Botones de inicio y créditos
    fill(0, 0, 0, 90);
    rect(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton, 10);
    rect(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton, 10);

    fill(255);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Inicio", posXBotonInicial + (tamBoton * 1.5), posYBotonInicial + tamBoton / 2);
    text("Créditos", posXBoton2Creditos + (tamBoton * 1.5), posYBoton2Creditos + tamBoton / 2);
  }

  if (click == 3) {
    // Botones de decisión
    fill(0, 0, 0, 120);
    rect(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10);
    
    fill (255);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Ir a investigar", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
    text ("Ignorar el problema", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
}
if (click == 9){
     fill(0, 0, 0, 120);
    rect(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10);
    rect(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10);
    
    fill (255);
    textSize (19);
    textAlign (CENTER, CENTER);
    text ("Ignorar el problema", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
    text ("Llamar a McClean", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2)); 
}
}
function mousePressed () {
  if (click == 0) {  
    // BOTONES DE MENÚ INICIAL
    if (
      mouseX > posXBotonInicial &&
      mouseX < posXBotonInicial + tamBoton * 3 &&
      mouseY > posYBotonInicial &&
      mouseY < posYBotonInicial + tamBoton
    ) {
      click = 1;  // Ir a la imagen uno
    }

    if (
      mouseX > posXBoton2Creditos &&
      mouseX < posXBoton2Creditos + tamBoton * 3 &&
      mouseY > posYBoton2Creditos &&
      mouseY < posYBoton2Creditos + tamBoton
    ) {
      click = 22; // Ir a créditos
    }

  } else if (click == 3) {
    //BOTONES DE DECISIÓN EN IMAGEN 3
    // Botón 1: Ir a investigar lleva a la imagen 4
    if (
      mouseX > posXBoton - 50 &&
      mouseX < posXBoton - 50 + tamBoton * 4 &&
      mouseY > posYBoton &&
      mouseY < posYBoton + tamBoton
    ) {
      click = 9;
    }

    // Botón 2: Ignorar el problema lleva a la imagen 10
    if (
      mouseX > posXBoton2 - 50 &&
      mouseX < posXBoton2 - 50 + tamBoton * 4 &&
      mouseY > posYBoton2 &&
      mouseY < posYBoton2 + tamBoton
    ) {
      click = 4;
    }
} else if (click == 9) {
    //BOTONES DE DECISIÓN EN IMAGEN 9
    // Botón 1: Ignorar el problema a la imagen 6
    if (
      mouseX > posXBoton - 50 &&
      mouseX < posXBoton - 50 + tamBoton * 4 &&
      mouseY > posYBoton &&
      mouseY < posYBoton + tamBoton
    ) {
      click = 6;
    }

    // Botón 2: Llamara a McClean a la imagen 10 
    if (
      mouseX > posXBoton2 - 50 &&
      mouseX < posXBoton2 - 50 + tamBoton * 4 &&
      mouseY > posYBoton2 &&
      mouseY < posYBoton2 + tamBoton
    ) {
      click = 10;
    }
  } else {
    if (click < imagenes.length - 1) {
      click++;
    } else {
      click = 0;
    }
  }
}
