https://youtu.be/-zrWG92SA1s
let imagenes = [];
let click = 0;
let texto = [];

let posXbotonMover; 
let posYbotonMover;
let TamBotonMover;

let posXBotonInicial;
let posYBotonInicial;

let tamBoton; 

let posXBoton2Creditos; 
let posYBoton2Creditos;

let posXBoton; 
let posYBoton;

let posXBoton2;
let posYBoton2;

let pradera;
let boton;
let rugidoleon;

function preload() {
    pradera = loadSound("sounds/pradera.mp3");
    boton = loadSound("sounds/boton.mp3");
    rugidoleon = loadSound("sounds/leon.mp3");

    for (let i = 0; i < 22; i++) {
        imagenes[i] = loadImage('img/imagen' + i + '.png');
    }
}

function setup() {
    createCanvas(640, 480);

    tamBoton = 50;

    posXBotonInicial = width / 2 - (tamBoton * 1.5);
    posYBotonInicial = height - 150;

    posXBoton2Creditos = posXBotonInicial;
    posYBoton2Creditos = posYBotonInicial + tamBoton + 20;

    posXbotonMover = width - width / 2 + 90;
    posYbotonMover = height / 6;

    posXBoton = width / 6;
    posYBoton = height - height / 3 + 70;

    posXBoton2 = width - width / 3;
    posYBoton2 = height - height / 3 + 70;

    TamBotonMover = 50;

    textSize(24);

    texto[0] = 'La Sabana';
    texto[1] = 'Este es el hogar de los Hadley, una familia acomodada que se ha mudado recientemente a esta casa automatizada. La familia esta compuesta del George Hadley, su esposa Lydia, y sus hijos, Peter y Wendy.';
    texto[2] = 'Últimamente Peter y Wendy han estado obsesionados en su cuarto de juego con una simulación hiperrealista de una sabana africana con sanguinarios leones';
    texto[3] = 'Lydia: Estoy preocupada por los niños, George. Esa simulación de la sabana lleva reproduciendose hace semanas, ¿Que deberíamos de hacer?';
    texto[4] = 'Seguro que no es nada, Lydia. A veces hay que dejar a los niños ser niños. Viendo la resistencia de su esposo, Lydia decide no seguir con el tema y continuar con la cena';
    texto[5] = 'Días despues, aun dudosa, la señora Hardley, nota que los niños siguen con la proyección de la sabana. -Los niños siguen con esos leones...¿No sería buena idea llamar al señor McClean? Él es psicologo.';
    texto[6] = 'George lo pensó unos segundos, ¿Podría ser que hubiera algo malo con el cuarto? Pero pronto borró esos pensamientos. Era solo una habitación holográfica';
    texto[7] = '-McClean es un hombre ocupado, Lydia, ¿Vos crees que va a tener tiempo para poder ver una habitación llena de leones? Seguro que es solo una fase. Ya se les pasará';
    texto[8] = 'Sin el apoyo de su esposo, Lydia, se cansa de intentar y decide dejar ser a los niños. Tal vez es como su marido dice y solo necesitan espacio. Peter y Wendy comienzan a separarse mas y mas de sus padres, abstrayendose en su mundo africano';
    texto[9] = 'George va a investigar y encuentra que la habitación no responde a sus ordenes. Además halla su billetera mordida y escucha gritos, ¿Que debería hacer?';
    texto[10] = 'Viendo que lo que decía su esposa era verdad, George, decide contactar a su amigo McClean, para que analice la habitación';
    texto[11] = 'McClean recomienda apagar la habitación e increpa a George por haber dejado que la casa criara a su familia, pues ahora sus hijos usan la habitación de forma hostil, ¿Que debería de hacer George?';
    texto[12] = '-¿McClean?¿No crees que exageras?Además, no importa lo que los niños hagan en ese cuarto. Es solo un juego. Rindiendose por la negación de su amigo, McClean decide irse, esperando lo mejor para la familia Hardley.';
    texto[13] = 'George decide desconectar todos los aparatos de la casa y planea llevarse a la familia a un viaje a Iowa para desconectarlos de la tecnología, lo cual pone de mal humor a Peter y a Wendy';
    texto[14] = 'George, ¿Podrías conectar la habitación de nuevo? Los niños estan haciendo un escandalo. Por favor. ¿Que debería de hacer George?';
    texto[15] = 'Esta bien, Lydia, pero tenes que saber que no es lo que recomendó McClean.';
    texto[16] = 'George decide no hacerle caso a Lydia, y empacan para irse a Iowa de vacaciones con los niños, los cuales cedieron luego de un poco de oposición de su parte.';
    texto[17] = 'Fue entonces cuando Lydia y George escucharon los gritos de sus hijos desde el cuarto de juego. ¡Mama! ¡Papa! ¡Vengan!';
    texto[18] = 'Al llegar al cuarto, los niños encierran a George y a Lydia, dejandolos contra los leones. -¡Déjenos salir, niños!';
}

function draw() {
    background(0);
    mostrarImagen();

    if (click == 0) {
        fill(0, 0, 0, 90);
        mostrarBotonMenu();

        fill(255);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Inicio", posXBotonInicial + (tamBoton * 1.5), posYBotonInicial + tamBoton / 2);
        text("Créditos", posXBoton2Creditos + (tamBoton * 1.5), posYBoton2Creditos + tamBoton / 2);
    } 
    else if (click == 1) {
        fill(0, 0, 0, 90);
        rect(-12, 310, 660, 200, 20); // Acá moví el rect un poco mas abajo
        fill(255);
        textSize(22);
        textAlign(LEFT, TOP);
        text(texto[click], 40, 330, 560, 200); // esto mueve el texto un poco mas abajo
    } 
    else if (click != 19 && click != 20 && click != 21 && click != 22) {
        fill(0, 0, 0, 90);
        rect(-12, 280, 660, 200, 20);
        fill(255);
        textSize(22);
        textAlign(LEFT, TOP);
        text(texto[click], 40, 300, 560, 200);
    }

    // Botones específicos por click
    if (click == 0) {
        fill(0, 0, 0, 90);
        rect(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton, 10);
        rect(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton, 10);
        fill(255);
        textSize(20);
        textAlign(CENTER, CENTER);
        text("Inicio", posXBotonInicial + (tamBoton * 1.5), posYBotonInicial + tamBoton / 2);
        text("Créditos", posXBoton2Creditos + (tamBoton * 1.5), posYBoton2Creditos + tamBoton / 2);
    }

    if ([3,5,9,11,14].includes(click)) {
        // Botones de decisión
        fill(0, 0, 0, 120);
        rect(posXBoton - 50, posYBoton, tamBoton * 4, tamBoton, 10);
        rect(posXBoton2 - 50, posYBoton2, tamBoton * 4, tamBoton, 10);
        fill(255);
        textSize(19);
        textAlign(CENTER, CENTER);

        if (click == 3) {
            text("Ir a investigar", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
            text("Ignorar el problema", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
        }

        if (click == 5) {
            text("Llamar a McClean", posXBoton + (tamBoton), posYBoton + (tamBoton / 2) + 25);
            text("No llamarlo", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2) + 25);
        }

        if (click == 9) {
            text("Ignorar el problema", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
            text("Llamar a McClean", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
        }

        if (click == 11) {
            text("Ignorar el consejo", posXBoton + (tamBoton), posYBoton + (tamBoton / 2) + 25);
            text("Hacerle caso McClean", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2) + 25);
        }

        if (click == 14) {
            text("Escuchar a Lydia", posXBoton + (tamBoton), posYBoton + (tamBoton / 2));
            text("Negarse", posXBoton2 + (tamBoton), posYBoton2 + (tamBoton / 2));
        }
    }

    musica();

    // Mostrar botón de avanzar solo si NO estamos en una pantalla de decisión
    if (![0,3,5,9,11,14].includes(click)) {
        botonAvanzar();
    }
}

function mousePressed() {
    // Logica de decisiones por click
    if (click == 0) {
        // Menu
        if (mouseX > posXBotonInicial && mouseX < posXBotonInicial + tamBoton * 3 &&
            mouseY > posYBotonInicial && mouseY < posYBotonInicial + tamBoton) {
            click = 1; // Ir a la imagen uno
            boton.play();
        }

        if (mouseX > posXBoton2Creditos && mouseX < posXBoton2Creditos + tamBoton * 3 &&
            mouseY > posYBoton2Creditos && mouseY < posYBoton2Creditos + tamBoton) {
            click = 22; // Ir a créditos
            boton.play();
        }
    } 
    else if (click == 3) {
        if (mouseX > posXBoton - 50 && mouseX < posXBoton - 50 + tamBoton * 4 &&
            mouseY > posYBoton && mouseY < posYBoton + tamBoton) {
            click = 9;
            boton.play();
        }

        if (mouseX > posXBoton2 - 50 && mouseX < posXBoton2 - 50 + tamBoton * 4 &&
            mouseY > posYBoton2 && mouseY < posYBoton2 + tamBoton) {
            click = 4;
            boton.play();
        }
    }

    else if (click == 9) {
        if (mouseX > posXBoton - 50 && mouseX < posXBoton - 50 + tamBoton * 4 &&
            mouseY > posYBoton && mouseY < posYBoton + tamBoton) {
            click = 6;
            boton.play();
        }

        if (mouseX > posXBoton2 - 50 && mouseX < posXBoton2 - 50 + tamBoton * 4 &&
            mouseY > posYBoton2 && mouseY < posYBoton2 + tamBoton) {
            click = 10;
            boton.play();
        }
    }

    else if (click == 11) {
        if (mouseX > posXBoton - 50 && mouseX < posXBoton - 50 + tamBoton * 4 &&
            mouseY > posYBoton + 25 && mouseY < posYBoton + 25 + tamBoton) {
            click = 12;
            boton.play();
        }

        if (mouseX > posXBoton2 - 50 && mouseX < posXBoton2 - 50 + tamBoton * 4 &&
            mouseY > posYBoton2 + 25 && mouseY < posYBoton2 + 25 + tamBoton) {
            click = 13;
            boton.play();
        }
    }

    else if (click == 14) {
        if (mouseX > posXBoton - 50 && mouseX < posXBoton - 50 + tamBoton * 4 &&
            mouseY > posYBoton && mouseY < posYBoton + tamBoton) {
            click = 15;
            boton.play();
        }

        if (mouseX > posXBoton2 - 50 && mouseX < posXBoton2 - 50 + tamBoton * 4 &&
            mouseY > posYBoton2 && mouseY < posYBoton2 + tamBoton) {
            click = 16;
            boton.play();
        }
    }

    else if (click == 5) {
        if (mouseX > posXBoton - 50 && mouseX < posXBoton - 50 + tamBoton * 4 &&
            mouseY > posYBoton + 25 && mouseY < posYBoton + 25 + tamBoton) {
            click = 10;
            boton.play();
        }

        if (mouseX > posXBoton2 - 50 && mouseX < posXBoton2 - 50 + tamBoton * 4 &&
            mouseY > posYBoton2 + 25 && mouseY < posYBoton2 + 25 + tamBoton) {
            click = 6;
            boton.play();
        }
    }

    else if (click == 15) {
        click = 17;
    }

    else if (click == 19) {
        click = 0;
    }

    else if (click == 8) {
        click = 21;
    }

    else if (click == 21) {
        click = 0;
    }

    else if (click == 16) {
        click = 20;
    }

    else if (click == 20) {
        click = 0;
    }

    else {
        if (click < imagenes.length - 1) {
            click++;
        } else {
            click = 0;
        }
    }
}

function mostrarImagen() {
    image(imagenes[click], 0, 0, 640, 480);
}

function mostrarBotonMenu() {
    rect(posXBotonInicial, posYBotonInicial, tamBoton * 3, tamBoton, 10);
    rect(posXBoton2Creditos, posYBoton2Creditos, tamBoton * 3, tamBoton, 10);
}

function musica() {
    if ((click == 2 || click == 9 || click == 11 || click == 12 || click == 18 || click == 19) && !pradera.isPlaying()) {
        pradera.loop();
    }

    if (!(click == 2 || click == 9 || click == 11 || click == 12 || click == 18 || click == 19) && pradera.isPlaying()) {
        pradera.stop();
    }

    if (click == 19 && !rugidoleon.isPlaying()) {
        rugidoleon.play();
    }

    if (click != 19 && rugidoleon.isPlaying()) {
        rugidoleon.stop();
    }
}

function botonAvanzar() {
    fill(0, 0, 0, 120);
    noStroke();
    rect(posXbotonMover, posYbotonMover, TamBotonMover * 4, TamBotonMover, 10);

    fill(255);
    textSize(19);
    textAlign(CENTER, CENTER);
    text("Continuar", posXbotonMover + (TamBotonMover * 2), posYbotonMover + (TamBotonMover / 2));
}
