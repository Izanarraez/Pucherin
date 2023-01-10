const prompt = require("prompt-sync")();

var puntos = 0;
var fichas = 0;

var jugadores = {
    1: {
        fichas: 0,
        casillas: [],
        puntos: 0
    },
    2: {
        fichas: 0,
        casillas: [],
        puntos: 0
    },
    3: {
        fichas: 0,
        casillas: [],
        puntos: 0
    },
    4: {
        fichas: 0,
        casillas: [],
        puntos: 0
    },
    5: {
        fichas: 0,
        casillas: [],
        puntos: 0
    }
}

function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    let suma = dado1+dado2;
    return suma;
}

function empezar(participantes){
    return Math.ceil(Math.random()*(participantes-0)+0);
}

function reparto_fichas(jugador,turno){
    switch (jugador) {
        case 1:
            jugadores[1].fichas = 50;
            break;
        case 2:
                jugadores[1].fichas = 25;
                jugadores[2].fichas = 25;
            break;
        case 3:
            if(turno == 1){
                jugadores[1].fichas = 17;
                jugadores[2].fichas = 17;
                jugadores[3].fichas = 16;
            }
            else if(turno == 2){
                jugadores[1].fichas = 16;
                jugadores[2].fichas = 17;
                jugadores[3].fichas = 17;
            }
            else{
                jugadores[3].fichas = 17;
                jugadores[1].fichas = 17;
                jugadores[2].fichas = 16;
            }
            break;
        case 4:
            if(turno == 1){
                jugadores[1].fichas = 13;
                jugadores[2].fichas = 13;
                jugadores[3].fichas = 12;
                jugadores[4].fichas = 12;
            }
            else if(turno == 2){
                jugadores[1].fichas = 12;
                jugadores[2].fichas = 13;
                jugadores[3].fichas = 13;
                jugadores[4].fichas = 12;
            }
            else if(turno == 3){
                jugadores[1].fichas = 12;
                jugadores[2].fichas = 12;
                jugadores[3].fichas = 13;
                jugadores[4].fichas = 13;
            }
            else{
                jugadores[3].fichas = 13;
                jugadores[4].fichas = 13;
                jugadores[1].fichas = 12;
                jugadores[2].fichas = 12;
            }
            break;
        case 5:
                jugadores[3].fichas = 10;
                jugadores[4].fichas = 10;
                jugadores[5].fichas = 10;
                jugadores[1].fichas = 10;
                jugadores[2].fichas = 10;
            break;
    }
}

function mostrar_numero_jugadores(participantes){
    let j = 1;
    console.log("---------------------");
    for(let i=1;i<=participantes;i++){
        console.log(`Jugador ${i}`);
        console.log(`\tFichas: ${jugadores[j++].fichas}`);
        console.log(`\tCasillas: ${0}`);
        console.log(`\tPuntos: ${0}`); // flata hacer los puntos
    }
    console.log("---------------------");
}

function cerrar1(){
    return a = false;
}
function cerrar2(){
    return b = false;
}

function Tablero(){
    console.log("---------------------");
    console.log("-Tablero-");
    console.log("---------");
    for(let i=2;i<=11;i++){
        console.log(`\t${i}: ${0}`);
    }
    console.log("---------------------");
}

function turno(empezar){
    switch (empezar) {
        case 1:
            jugadores[1].fichas = 50;
            break;
        case 2:
                jugadores[1].fichas = 25;
                jugadores[2].fichas = 25;
            break;
        case 3:
            if(turno == 1){
                jugadores[1].fichas = 17;
                jugadores[2].fichas = 17;
                jugadores[3].fichas = 16;
            }
            else if(turno == 2){
                jugadores[1].fichas = 16;
                jugadores[2].fichas = 17;
                jugadores[3].fichas = 17;
            }
            else{
                jugadores[3].fichas = 17;
                jugadores[1].fichas = 17;
                jugadores[2].fichas = 16;
            }
            break;
        case 4:
            if(turno == 1){
                jugadores[1].fichas = 13;
                jugadores[2].fichas = 13;
                jugadores[3].fichas = 12;
                jugadores[4].fichas = 12;
            }
            else if(turno == 2){
                jugadores[1].fichas = 12;
                jugadores[2].fichas = 13;
                jugadores[3].fichas = 13;
                jugadores[4].fichas = 12;
            }
            else if(turno == 3){
                jugadores[1].fichas = 12;
                jugadores[2].fichas = 12;
                jugadores[3].fichas = 13;
                jugadores[4].fichas = 13;
            }
            else{
                jugadores[3].fichas = 13;
                jugadores[4].fichas = 13;
                jugadores[1].fichas = 12;
                jugadores[2].fichas = 12;
            }
            break;
        case 5:
                jugadores[3].fichas = 10;
                jugadores[4].fichas = 10;
                jugadores[5].fichas = 10;
                jugadores[1].fichas = 10;
                jugadores[2].fichas = 10;
            break;
    }
}

//Motor de juego
let a = true;
let b = true;
do{
    let participantes = parseInt(prompt("Ingrea los participantes: "));
    do{
        /*console.log(Participantes(participantes));
        console.log(Tablero());*/
        /*console.log("EL numero de participnates es:");*/
        //dados();
        //console.log(Tablero());
        //let sip = prompt("Pulse enter");
        //if(sip == ""){
            reparto_fichas(participantes,empezar(participantes));
            mostrar_numero_jugadores(participantes);
            jugadores[1].fichas -= 1;
            mostrar_numero_jugadores(participantes);
            cerrar2();
        //}
    }while(b == true);
    cerrar1();
}while(a == true);

