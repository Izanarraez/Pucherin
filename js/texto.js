const prompt = require("prompt-sync")();

var puntos = 0;
var fichas = 0;

var mov = 0;

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

var casillas = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0
}

//reparto aleatorio
function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    let suma = dado1+dado2;
    return suma;
}

function empezar(participantes){
    return Math.ceil(Math.random()*(participantes-0)+0);
}

//reparto de fichas
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

//Mostrar hugadores y tabero
function mostrar_numero_jugadores(participantes){
    console.log("-----------");
    console.log("-Jugadores-");
    console.log("-----------");
    for(let i=1;i<=participantes;i++){
        console.log(`Jugador ${i}`);
        console.log(`\tFichas: ${jugadores[i].fichas}`);
        console.log(`\tCasillas: ${0}`);
        console.log(`\tPuntos: ${0 /*conceder_puntos()*/}`); // flata hacer los puntos
    }
    //console.log("---------------------");
}

function Tablero(){
    console.log("---------");
    console.log("-Tablero-");
    console.log("---------");
    for(let i=2;i<=11;i++){
        console.log(`\t${i}: ${casillas[i]}`);
    }
    //console.log("---------------------");
}

//cerrar el bucle
function cerrar1(){
    return a = false;
}
function cerrar2(){
    return b = false;
}

function conceder_puntos(){}
function rellenar_casillas(daos){
    
}
function jugar(turno){
    if(turno === 1){
        console.log("hola");
    }
}

//organizar turnoas de hugadores
function caso1(){
        console.log("Turno jugador1");
        return 1;
  }
  function caso2(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1");
            mov = 1;
            return 1;
        }
        else{
            console.log("Turno jugador2");
            mov = 0;
            return 2;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador2");
            mov = 1;
            return 2;
        }
        else{
            console.log("Turno jugador1");
            mov = 0;
            return 1;
        }
    }
  }
  function caso3(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1")
            mov = 1;
            return 1;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            return 2;
        }
        else{
            console.log("Turno jugador3")
            mov = 3;
            return 3;
        }
    }
    else if(empezar == 2){
        if(mov == 0){
            console.log("Turno jugador2")
            mov = 1;
            return 2;
        }
        else if(mov == 1){
            console.log("Turno jugador3")
            mov = 2;
            return 3;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            return 1;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador3")
            mov = 1;
            return 3;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            return 2;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            return 1;
        }
    }
  }
  function caso4(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1")
            mov = 1;
            return 1;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            return 2;
        }
        else if(mov == 2){
            console.log("Turno jugador3")
            mov = 3;
            return 3;
        }
        else{
            console.log("Turno jugador4")
            mov = 0;
            return 4;
        }
    }
    else if(empezar == 2){
        if(mov == 0){
            console.log("Turno jugador2")
            mov = 1;
            return 2;
        }
        else if(mov == 1){
            console.log("Turno jugador3")
            mov = 2;
            return 3;
        }
        else if(mov == 2){
            console.log("Turno jugador4")
            mov = 3;
            return 4;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            return 1;
        }
    }
    else if(empezar == 3){
        if(mov == 0){
            console.log("Turno jugador3")
            mov = 1;
            return 3;
        }
        else if(mov == 1){
            console.log("Turno jugador4")
            mov = 2;
            return 4;
        }
        else if(mov == 2){
            console.log("Turno jugador1")
            mov = 3;
            return 1;
        }
        else{
            console.log("Turno jugador2")
            mov = 0;
            return 2;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador4")
            mov = 1;
            return 4;
        }
        else if(mov == 1){
            console.log("Turno jugador1")
            mov = 2;
            return 1;
        }
        else if(mov == 2){
            console.log("Turno jugador2")
            mov = 3;
            return 2;
        }
        else{
            console.log("Turno jugador3")
            mov = 0;
            return 3;
        }
    }
  }
  function caso5(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1")
            mov = 1;
            return 1;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            return 2;
        }
        else if(mov == 2){
            console.log("Turno jugador3")
            mov = 3;
            return 3;
        }
        else if(mov == 3){
            console.log("Turno jugador4")
            mov = 4;
            return 4;
        }
        else{
            console.log("Turno jugador5")
            mov = 0;
            return 5;
        }
    }
    else if(empezar == 2){
        if(mov == 0){
            console.log("Turno jugador2")
            mov = 1;
            return 2;
        }
        else if(mov == 1){
            console.log("Turno jugador3")
            mov = 2;
            return 3;
        }
        else if(mov == 2){
            console.log("Turno jugador4")
            mov = 3;
            return 4;
        }
        else if(mov == 3){
            console.log("Turno jugador5")
            mov = 4;
            return 5;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            return 1;
        }
    }
    else if(empezar == 3){
        if(mov == 0){
            console.log("Turno jugador3")
            mov = 1;
            return 3;
        }
        else if(mov == 1){
            console.log("Turno jugador4")
            mov = 2;
            return 4;
        }
        else if(mov == 2){
            console.log("Turno jugador5")
            mov = 3;
            return 5;
        }
        else if(mov == 3){
            console.log("Turno jugador1")
            mov = 4;
            return 1;
        }
        else{
            console.log("Turno jugador2")
            mov = 0;
            return 2;
        }
    }
    else if(empezar == 4){
        if(mov == 0){
            console.log("Turno jugador4")
            mov = 1;
            return 4;
        }
        else if(mov == 1){
            console.log("Turno jugador5")
            mov = 2;
            return 5;
        }
        else if(mov == 2){
            console.log("Turno jugador1")
            mov = 3;
            return 1;
        }
        else if(mov == 3){
            console.log("Turno jugador2")
            mov = 4;
            return 2;
        }
        else{
            console.log("Turno jugador3")
            mov = 0;
            return 3;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador5")
            mov = 1;
            return 5;
        }
        else if(mov == 1){
            console.log("Turno jugador1")
            mov = 2;
            return 1;
        }
        else if(mov == 2){
            console.log("Turno jugador2")
            mov = 3;
            return 2;
        }
        else if(mov == 3){
            console.log("Turno jugador3")
            mov = 4;
            return 3;
        }
        else{
            console.log("Turno jugador4")
            mov = 0;
            return 4;
        }
    }
  }
  
  function turno(jugadores,empezar){
    switch (jugadores) {
      case 1:
          caso1(empezar);
        break;
      case 2:
          caso2(empezar);
        break;
      case 3:
          caso3(empezar);
        break;
      case 4:
          caso4(empezar);
        break;
      case 5:
          caso5(empezar);
        break;
    }
  }

//Motor de juego
let a = true;
let b = true;
do{
    let participantes = parseInt(prompt("Ingrea los participantes: "));
    do{
        /*console.log(Participantes(participantes));*/
        //Tablero();
        //reparto_fichas(participantes,empezar(participantes)); //muestra el numero de fichas
        //mostrar_numero_jugadores(participantes); //muestra el numero de jugadores
        let sip = prompt("Pulse enter");
        //if(sip == ""){
            //console.log(turno(participantes,empezar()));
            //console.log(Tablero());
            jugar(turno(participantes,empezar()));
            //cerrar2();
        //}
    }while(b == true);
    cerrar1();
}while(a == true);



