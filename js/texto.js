const prompt = require("prompt-sync")();

var puntos = 0;

function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    let suma = dado1+dado2;
    a = false; // salida del bucle
    return suma;
}

function reparto(jugadores){
    var fichas = 0;
    switch (jugadores) {
        case 1:
             fichas = 50;
            break;
        case 2:
            fichas = 25;
            break;
        case 3:
            fichas = 16; //falta sumar las dos que faltan
            break;
        case 4:
            fichas = 12; //falta sumar las dos que flatan
            break;
        case 5:
            fichas = 10;
            break;
    }
}

function Participantes(participantes){
    switch (participantes) {
        case 1:
                console.log("---------------------");
                console.log("Jugador 1");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos
                console.log("---------------------");
            break;
        case 2:
                console.log("---------------------");
                console.log("Jugador 1");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 2");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos
                console.log("---------------------");
            break;
        case 3:
                console.log("---------------------");
                console.log("Jugador 1");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 2");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 3");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos
                console.log("---------------------");
            break;
        case 4:
                console.log("---------------------");
                console.log("Jugador 1");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 2");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 3");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 4");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos
                console.log("---------------------");
            break;
        case 5:
                console.log("---------------------");
                console.log("Jugador 1");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 2");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 3");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 4");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos

                console.log("Jugador 5");
                console.log(`\tFichas: ${reparto(participantes)}`);
                console.log(`\tPuntos: ${puntos}`); // flata hacer los puntos
                console.log("---------------------");
            break;
    }
}

//Motor de juego
let a = true;

do{
    let participantes = parseInt(prompt("Ingrea los participantes: "));
    console.log(Participantes(participantes));
    /*console.log("EL numero de participnates es:");*/
    dados();
}while(a == true);

