let imagenes = [];
let click = 0;
let texto =[];
let posXBoton;
let posYBoton;
let tamBoton;
let posXBoton2;
let posYBoton2;


function preload() {
  for (let i = 0; i < 23; i++) {
    imagenes[i] = loadImage('img/imagen'+i+'.png');
  }
}

function setup() {
  createCanvas(640, 480);
  tamBoton = 50;
  posXBoton = width / 2 - (tamBoton * 1.5);
  posYBoton = height - 150;
  posXBoton2 = posXBoton;
  posYBoton2 = posYBoton + tamBoton + 20;
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
  rect(posXBoton, posYBoton, tamBoton * 3, tamBoton, 10);
  rect(posXBoton2, posYBoton2, tamBoton * 3, tamBoton, 10);
  fill (255);
  textSize (20);
  textAlign (CENTER, CENTER);
  text("Inicio", posXBoton + (tamBoton * 1.5), posYBoton + tamBoton / 2);
  text("Créditos", posXBoton2 + (tamBoton * 1.5), posYBoton2 + tamBoton / 2);
} else if (click != 19 && click != 20 && click != 21 && click != 22) {
  fill(0, 0, 0, 90);
  rect(-12, 280, 660, 200, 20);
  fill(255);
  textSize(22);
  textAlign(LEFT, TOP);
  text(texto[click], 40, 300, 560, 200);
}
}
function mousePressed () {
  if (click<imagenes.length-1) {
    click++;
  } else {
    click=0;
}
}
