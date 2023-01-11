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

var dado = {}

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

/*function conceder_puntos(puntos){
    if(puntos == 2){
        return 2;
    }
    else if(dados == 3){
       return 3;
    }
    else if(dados == 4){
        return 4;
    }
    else if(dados == 5){
        return 5;
    }
    else if(dados == 6){
        return 6;
    }
    else if(dados == 7){
        return 4;
    }
    else if(dados == 8){
        return 8;
    }
    else if(dados == 9){
        return 9;
    }
    else if(dados == 10){
        return 10;
    }
    else if(dados == 11){
        return 11;
    }
    else{
        return casillas[7];
    }
}*/

function rellenar_casillas(dados,jug){
    if(dados == 2){
        if(casillas[2] > 0 && casillas[2] <=2){
            casillas[2]++;
        }
        else{
            jug += 2;
            casillas[2] = 0;
        }
    }
    else if(dados == 3){
        if(casillas[3] > 0 && casillas[3] <=3){
            casillas[3]++;
        }
        else{
            jug += 3;
            casillas[3] = 0;
        }
    }
    else if(dados == 4){
        if(casillas[4] > 0 && casillas[4] <=4){
            casillas[4]++;
        }
        else{
            jug += 4;
            casillas[4] = 0;
        }
    }
    else if(dados == 5){
        if(casillas[5] > 0 && casillas[5] <=5){
            casillas[5]++;
        }
        else{
            jug += 5;
            casillas[5] = 0;
        }
    }
    else if(dados == 6){
        if(casillas[6] > 0 && casillas[6] <=6){
            casillas[6]++;
        }
        else{
            jug += 6;
            casillas[6] = 0;
        }
    }
    else if(dados == 7){
        if(casillas[7] > 0 && casillas[7] <=4){
            casillas[7]++;
        }
        else{
            jug += 4;
            casillas[7] = 0;
        }
    }
    else if(dados == 8){
        if(casillas[8] > 0 && casillas[8] <=8){
            casillas[8]++;
        }
        else{
            jug += 8;
            casillas[8] = 0;
        }
    }
    else if(dados == 9){
        if(casillas[9] > 0 && casillas[9] <=9){
            casillas[9]++;
        }
        else{
            jug += 9;
            casillas[9] = 0;
        }
    }
    else if(dados == 10){
        if(casillas[10] > 0 && casillas[10] <=10){
            casillas[10]++;
        }
        else{
            jug += 10;
            casillas[10] = 0;
        }
    }
    else if(dados == 11){
        if(casillas[11] > 0 && casillas[11] <=11){
            casillas[11]++;
        }
        else{
            jug += 11;
            casillas[11] = 0;
        }
    }
    else{
        jug += casillas[7];
        casillas[7] = 0;
    }
}
function sin_fichas(){}

function jugar(turno){
    if(turno == 1){
        rellenar_casillas(dados(),jugadores[1].puntos);
    }
    else if(turno == 2){
        rellenar_casillas(dados(),jugadores[2].puntos);
    }
    else if(turno == 3){
        rellenar_casillas(dados(),jugadores[3].puntos);
    }
    else if(turno == 4){
        rellenar_casillas(dados(),jugadores[4].puntos);
    }
    else{
        rellenar_casillas(dados(),jugadores[5].puntos);
    }
}

//organizar turnoas de hugadores

var mov = 0;
var tur = 0;

function caso1(){
        console.log("Turno jugador1");
        tur = 1;
  }
  function caso2(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1");
            mov = 1;
            tur = 1;
        }
        else{
            console.log("Turno jugador2");
            mov = 0;
            tur = 2;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador2");
            mov = 1;
            tur = 2;
        }
        else{
            console.log("Turno jugador1");
            mov = 0;
            tur = 1;
        }
    }
  }
  function caso3(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1")
            mov = 1;
            tur = 1;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            tur = 2;
        }
        else{
            console.log("Turno jugador3")
            mov = 0;
            tur = 3;
        }
    }
    else if(empezar == 2){
        if(mov == 0){
            console.log("Turno jugador2")
            mov = 1;
            tur = 2;
        }
        else if(mov == 1){
            console.log("Turno jugador3")
            mov = 2;
            tur = 3;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            tur = 1;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador3")
            mov = 1;
            tur = 3;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            tur = 2;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            tur = 1;
        }
    }
  }
  function caso4(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1")
            mov = 1;
            tur = 1;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            tur = 2;
        }
        else if(mov == 2){
            console.log("Turno jugador3")
            mov = 3;
            tur = 3;
        }
        else{
            console.log("Turno jugador4")
            mov = 0;
            tur = 4;
        }
    }
    else if(empezar == 2){
        if(mov == 0){
            console.log("Turno jugador2")
            mov = 1;
            tur = 2;
        }
        else if(mov == 1){
            console.log("Turno jugador3")
            mov = 2;
            tur = 3;
        }
        else if(mov == 2){
            console.log("Turno jugador4")
            mov = 3;
            tur = 4;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            tur = 1;
        }
    }
    else if(empezar == 3){
        if(mov == 0){
            console.log("Turno jugador3")
            mov = 1;
            tur = 3;
        }
        else if(mov == 1){
            console.log("Turno jugador4")
            mov = 2;
            tur = 4;
        }
        else if(mov == 2){
            console.log("Turno jugador1")
            mov = 3;
            tur = 1;
        }
        else{
            console.log("Turno jugador2")
            mov = 0;
            tur = 2;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador4")
            mov = 1;
            tur = 4;
        }
        else if(mov == 1){
            console.log("Turno jugador1")
            mov = 2;
            tur = 1;
        }
        else if(mov == 2){
            console.log("Turno jugador2")
            mov = 3;
            tur = 2;
        }
        else{
            console.log("Turno jugador3")
            mov = 0;
            tur = 3;
        }
    }
  }
  function caso5(empezar){
    if(empezar == 1){
        if(mov == 0){
            console.log("Turno jugador1")
            mov = 1;
            tur = 1;
        }
        else if(mov == 1){
            console.log("Turno jugador2")
            mov = 2;
            tur = 2;
        }
        else if(mov == 2){
            console.log("Turno jugador3")
            mov = 3;
            tur = 3;
        }
        else if(mov == 3){
            console.log("Turno jugador4")
            mov = 4;
            tur = 4;
        }
        else{
            console.log("Turno jugador5")
            mov = 0;
            tur = 5;
        }
    }
    else if(empezar == 2){
        if(mov == 0){
            console.log("Turno jugador2")
            mov = 1;
            tur = 2;
        }
        else if(mov == 1){
            console.log("Turno jugador3")
            mov = 2;
            tur = 3;
        }
        else if(mov == 2){
            console.log("Turno jugador4")
            mov = 3;
            tur = 4;
        }
        else if(mov == 3){
            console.log("Turno jugador5")
            mov = 4;
            tur = 5;
        }
        else{
            console.log("Turno jugador1")
            mov = 0;
            tur = 1;
        }
    }
    else if(empezar == 3){
        if(mov == 0){
            console.log("Turno jugador3")
            mov = 1;
            tur = 3;
        }
        else if(mov == 1){
            console.log("Turno jugador4")
            mov = 2;
            tur = 4;
        }
        else if(mov == 2){
            console.log("Turno jugador5")
            mov = 3;
            tur = 5;
        }
        else if(mov == 3){
            console.log("Turno jugador1")
            mov = 4;
            tur = 1;
        }
        else{
            console.log("Turno jugador2")
            mov = 0;
            tur = 2;
        }
    }
    else if(empezar == 4){
        if(mov == 0){
            console.log("Turno jugador4")
            mov = 1;
            tur = 4;
        }
        else if(mov == 1){
            console.log("Turno jugador5")
            mov = 2;
            tur = 5;
        }
        else if(mov == 2){
            console.log("Turno jugador1")
            mov = 3;
            tur = 1;
        }
        else if(mov == 3){
            console.log("Turno jugador2")
            mov = 4;
            tur = 2;
        }
        else{
            console.log("Turno jugador3")
            mov = 0;
            tur = 3;
        }
    }
    else{
        if(mov == 0){
            console.log("Turno jugador5")
            mov = 1;
            tur = 5;
        }
        else if(mov == 1){
            console.log("Turno jugador1")
            mov = 2;
            tur = 1;
        }
        else if(mov == 2){
            console.log("Turno jugador2")
            mov = 3;
            tur = 2;
        }
        else if(mov == 3){
            console.log("Turno jugador3")
            mov = 4;
            tur = 3;
        }
        else{
            console.log("Turno jugador4")
            mov = 0;
            tur = 4;
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
    return tur;
  }

//Motor de juego
let a = true;
let b = true;
do{
    let participantes = parseInt(prompt("Ingrea los participantes: "));
    do{
        const c = empezar(participantes);
        /*console.log(Participantes(participantes));*/
        Tablero();
        reparto_fichas(participantes,empezar(participantes)); //muestra el numero de fichas
        mostrar_numero_jugadores(participantes); //muestra el numero de jugadores
        //let sip = prompt("Pulse enter");
        //if(sip == ""){
            //console.log(Tablero());
            console.log(c);
            for(let i=0;i<6;i++){
                jugar(turno(participantes,c));
                Tablero();
            }
            cerrar2();
        //}
    }while(b == true);
    cerrar1();
}while(a == true);



