const prompt = require("prompt-sync")();

var mov = 0;
var tur = 0;
var jug = 0;

var jugadores = {
    1: {
        fichas: 0,
        dado: 0,
        puntos: 0
    },
    2: {
        fichas: 0,
        dado: 0,
        puntos: 0
    },
    3: {
        fichas: 0,
        dado: 0,
        puntos: 0
    },
    4: {
        fichas: 0,
        dado: 0,
        puntos: 0
    },
    5: {
        fichas: 0,
        dado: 0,
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

/************************************|reparto aleatorio de dados|***********************************************/
function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    return dado1+dado2;
}

/************************************|empezar turnos|***********************************************************/
function empezar(participantes){
    return Math.ceil(Math.random()*(participantes-0)+0);
}

/************************************|reparto de fichas|********************************************************/
function reparto_fichas(jugador,turno){
    switch (jugador) {
        case 1: jugadores[1].fichas = 50;
        break;
        case 2: jugadores[1].fichas = 25;
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
        case 5: jugadores[3].fichas = 10;
                jugadores[4].fichas = 10;
                jugadores[5].fichas = 10;
                jugadores[1].fichas = 10;
                jugadores[2].fichas = 10;
        break;
    }
}

/************************************|Mostrar jugadores|*******************************************************/
function mostrar_numero_jugadores(participantes){
    console.log("-----------");
    console.log("-Jugadores-");
    console.log("-----------");
    for(let i=1;i<=participantes;i++){
        console.log(`Jugador ${i}`);
        console.log(`\tFichas: ${jugadores[i].fichas}`);
        console.log(`\tDados: ${jugadores[i].dado}`);
        console.log(`\tPuntos: ${jugadores[i].puntos}`);
    }
}

/************************************|Tablero|******************************************************************/
function Tablero(){
    console.log("---------");
    console.log("-Tablero-");
    console.log("---------");
    for(let i=2;i<=11;i++){
        if(i == 7){
            console.log(`\t${i}: ${casillas[i]} (puchero)`);
        }
        else{
            console.log(`\t${i}: ${casillas[i]}`);
        }
    }
}

/************************************|limpia tablero y suma puntos|******************************************************************/
function limpiar(){
    if(casillas[2] == 2){
        jug = 2;
        casillas[2] = 0;
    }
    else if(casillas[3] == 3){
        jug = 3;
        casillas[3] = 0;
    }
    else if(casillas[4] == 4){
        jug = 4;
        casillas[4] = 0;
    }
    else if(casillas[5] == 5){
        jug = 5;
        casillas[5] = 0;
    }
    else if(casillas[6] == 6){
        jug = 6;
        casillas[6] = 0;
    }
    else if(casillas[7] == 4){
        jug = 4;
        casillas[7] = 0;
    }
    else if(casillas[8] == 8){
        jug = 8;
        casillas[8] = 0;
    }
    else if(casillas[9] == 9){
        jug = 9;
        casillas[9] = 0;
    }
    else if(casillas[10] == 10){
        jug = 10;
        casillas[10] = 0;
    }
    else if(casillas[11] == 11){
        jug = 11;
        casillas[11] = 0;
    }
    else{
        jug = 0;
    }
    return jug;
}         

/************************************|cerrar el bucle|*********************************************************/
function cerrar1(){
    return a = false;
}
function cerrar2(){
    return b = false;
}

/************************************|rellena las casillas|****************************************************/

function rellenar_casillas(dados,num){
  if(jugadores[tur].fichas != 0){  
    if(dados == 2 && casillas[2] >= 0 && casillas[2] <2){
        ++casillas[2];
    }
    else if(dados == 3 && casillas[3] >= 0 && casillas[3] <3){
        ++casillas[3];
    }
    else if(dados == 4 && casillas[4] >= 0 && casillas[4] <4){
        ++casillas[4];
    }
    else if(dados == 5 && casillas[5] >= 0 && casillas[5] <5){
        ++casillas[5];
    }
    else if(dados == 6 && casillas[6] >= 0 && casillas[6] <6){
        ++casillas[6];
    }
    else if(dados == 7 && casillas[7] >= 0 && casillas[7] <4){
        ++casillas[7];
    }
    else if(dados == 8 && casillas[8] >= 0 && casillas[8] <8){
        ++casillas[8];
    }
    else if(dados == 9 && casillas[9] >= 0 && casillas[9] <9){
        ++casillas[9];
    }
    else if(dados == 10 && casillas[10] >= 0 && casillas[10] <10){
        ++casillas[10];
    }
    else if(dados == 11 && casillas[11] >= 0 && casillas[11] <11){
        ++casillas[11];
    }
    
    if(dados == 12){
        jugadores[num].puntos += casillas[7];
        casillas[7] = 0;
    }
    else{
        jugadores[num].puntos += limpiar();
    }
}
}

/************************************|fichas vacias|************************************************************/
function sin_fichas(jugador,dados){
    let com = 0;
    let mas = 0;

    for(let i=1;i<=jugador;i++){
        if(jugadores[i].fichas == 0){
            ++com;
        }
    }

        if(com == jugador){
            if(dados == 12){
                for(let j=2;j<=11;j++){
                    jugadores[tur].puntos += casillas[j];
                    casillas[j] = 0;
                }
                cerrar2(); 
            }
            else{
                if(casillas[dados] > 0){
                    jugadores[tur].puntos += casillas[dados];
                    casillas[dados] = 0;
                }
            }
        }

    for(let i=2;i<=11;i++){
        if(casillas[i] == 0){
            ++mas;
        }
    }

    if(mas == 10){
        cerrar2();
    }
}

/************************************|Restar fichas|***********************************************************/

function restar_fichas(fichas){
    if(fichas > 0){
        fichas -= 1;
    }
    return fichas;
}

/************************************|Jugar al juego|***********************************************************/
function jugar(dados){
    if(tur == 1){
        rellenar_casillas(dados,1);
        jugadores[1].dado = dados;
        jugadores[1].fichas = restar_fichas(jugadores[1].fichas);
    }
    else if(tur == 2){
        rellenar_casillas(dados,2);
        jugadores[2].dado = dados;
        jugadores[2].fichas = restar_fichas(jugadores[2].fichas);
    }
    else if(tur == 3){
        rellenar_casillas(dados,3);
        jugadores[3].dado = dados;
        jugadores[3].fichas = restar_fichas(jugadores[3].fichas);
    }
    else if(tur == 4){
        rellenar_casillas(dados,4);
        jugadores[4].dado = dados;
        jugadores[4].fichas = restar_fichas(jugadores[4].fichas);
    }
    else if(tur == 5){
        rellenar_casillas(dados,5);
        jugadores[5].dado = dados;
        jugadores[5].fichas = restar_fichas(jugadores[5].fichas);
    }
}

function mostrar_turnos(){
    switch (tur) {
        case 1:
            console.log("**************");
            console.log("Turno jugador1");
            console.log("**************");
            break;
        case 2:
            console.log("**************");
            console.log("Turno jugador2");
            console.log("**************");
            break;
        case 3:
            console.log("**************");
            console.log("Turno jugador3");
            console.log("**************");
            break;
        case 4:
            console.log("**************");
            console.log("Turno jugador4");
            console.log("**************");
            break;
        case 5:
            console.log("**************");
            console.log("Turno jugador5");
            console.log("**************");
            break;
    }
}
/************************************|Casos de eleccion de turnos|**********************************************/

function caso1(){
    tur = 1;
}

function caso2(empezar){
    switch (empezar) {
        case 1:
            switch (mov) {
                case 0: mov = 1; tur = 1; break;
                case 1: mov = 0; tur = 2; break;
            }
        break;
        case 2:
            switch (mov) {
                case 0: mov = 1; tur = 2; break;
                case 1: mov = 0; tur = 1; break;
            }
        break;
    }
}

  function caso3(empezar){
        switch (empezar) {
            case 1:
                switch (mov) {
                    case 0: mov = 1; tur = 1; break;
                    case 1: mov = 2; tur = 2; break;
                    case 2: mov = 0; tur = 3; break;
                }
            break;
            case 2:
                switch (mov) {
                    case 0: mov = 1; tur = 2; break;
                    case 1: mov = 2; tur = 3; break;
                    case 2: mov = 0; tur = 1; break;
                }
            break;
            case 3:
                switch (mov) {
                    case 0: mov = 1; tur = 3; break;
                    case 1: mov = 2; tur = 1; break;
                    case 2: mov = 0; tur = 2; break;
                }
            break;
        }
  }

  function caso4(empezar){
    switch (empezar) {
        case 1:
            switch (mov) {
                case 0: mov = 1; tur = 1; break;
                case 1: mov = 2; tur = 2; break;
                case 2: mov = 3; tur = 3; break;
                case 3: mov = 0; tur = 4; break;
            }
        break;
        case 2:
            switch (mov) {
                case 0: mov = 1; tur = 2; break;
                case 1: mov = 2; tur = 3; break;
                case 2: mov = 3; tur = 4; break;
                case 3: mov = 0; tur = 1; break;
            }
        break;
        case 3:
            switch (mov) {
                case 0: mov = 1; tur = 3; break;
                case 1: mov = 2; tur = 4; break;
                case 2: mov = 3; tur = 1; break;
                case 3: mov = 0; tur = 2; break;
            }
        break;
        case 4:
            switch (mov) {
                case 0: mov = 1; tur = 4; break;
                case 1: mov = 2; tur = 1; break;
                case 2: mov = 3; tur = 2; break;
                case 3: mov = 0; tur = 3; break;
            }
        break;
    }
  }

  function caso5(empezar){
    switch (empezar) {
        case 1:
            switch (mov) {
                case 0: mov = 1; tur = 1; break;
                case 1: mov = 2; tur = 2; break;
                case 2: mov = 3; tur = 3; break;
                case 3: mov = 4; tur = 4; break;
                case 4: mov = 0; tur = 5; break;
            }
        break;
        case 2:
            switch (mov) {
                case 0: mov = 1; tur = 2; break;
                case 1: mov = 2; tur = 3; break;
                case 2: mov = 3; tur = 4; break;
                case 3: mov = 4; tur = 5; break;
                case 4: mov = 0; tur = 1; break;
            }
        break;
        case 3:
            switch (mov) {
                case 0: mov = 1; tur = 3; break;
                case 1: mov = 2; tur = 4; break;
                case 2: mov = 3; tur = 5; break;
                case 3: mov = 4; tur = 1; break;
                case 4: mov = 0; tur = 2; break;
            }
        break;
        case 4:
            switch (mov) {
                case 0: mov = 1; tur = 4; break;
                case 1: mov = 2; tur = 5; break;
                case 2: mov = 3; tur = 1; break;
                case 3: mov = 4; tur = 2; break;
                case 4: mov = 0; tur = 3; break;
            }
        break;
        case 5:
            switch (mov) {
                case 0: mov = 1; tur = 5; break;
                case 1: mov = 2; tur = 1; break;
                case 2: mov = 3; tur = 2; break;
                case 3: mov = 4; tur = 3; break;
                case 4: mov = 0; tur = 4; break;
            }
        break;
    }
    return tur;
  }
 /******************************|comprovar victoria|*************************************/ 
  function victoria(participantes){
    switch (participantes) {
        case 1:
            console.log(`Buena partida del jugador 1`);
            break;
        case 2:
            if(jugadores[1].puntos > jugadores[2].puntos){
                console.log(`Gana jugador 1`)
            }
            else if(jugadores[2].puntos > jugadores[1].puntos){
                console.log(`Gana jugador 2`)
            }
            else{
                console.log(`Empate`)
            }
            break;
        case 3:
            if(jugadores[1].puntos > jugadores[2].puntos && jugadores[1].puntos > jugadores[3].puntos){
                console.log(`Gana jugador 1`)
            }
            else if(jugadores[2].puntos > jugadores[1].puntos && jugadores[2].puntos > jugadores[3].puntos){
                console.log(`Gana jugador 2`)
            }
            else if(jugadores[3].puntos > jugadores[1].puntos && jugadores[3].puntos > jugadores[2].puntos){
                console.log(`Gana jugador 3`)
            }
            else{
                console.log(`Empate`)
            }
            break;
        case 4:
            if(jugadores[1].puntos > jugadores[2].puntos && jugadores[1].puntos > jugadores[3].puntos && jugadores[1].puntos > jugadores[4].puntos){
                console.log(`Gana jugador 1`)
            }
            else if(jugadores[2].puntos > jugadores[1].puntos && jugadores[2].puntos > jugadores[3].puntos && jugadores[2].puntos > jugadores[4].puntos){
                console.log(`Gana jugador 2`)
            }
            else if(jugadores[3].puntos > jugadores[1].puntos && jugadores[3].puntos > jugadores[2].puntos && jugadores[3].puntos > jugadores[4].puntos){
                console.log(`Gana jugador 3`)
            }
            else if(jugadores[4].puntos > jugadores[1].puntos && jugadores[4].puntos > jugadores[2].puntos && jugadores[4].puntos > jugadores[3].puntos){
                console.log(`Gana jugador 4`)
            }
            else{
                console.log(`Empate`)
            }
            break;
        case 5:
            if(jugadores[1].puntos > jugadores[2].puntos && jugadores[1].puntos > jugadores[3].puntos && jugadores[1].puntos > jugadores[4].puntos && jugadores[1].puntos > jugadores[5].puntos){
                console.log(`Gana jugador 1`)
            }
            else if(jugadores[2].puntos > jugadores[1].puntos && jugadores[2].puntos > jugadores[3].puntos && jugadores[2].puntos > jugadores[4].puntos && jugadores[2].puntos > jugadores[5].puntos){
                console.log(`Gana jugador 2`)
            }
            else if(jugadores[3].puntos > jugadores[1].puntos && jugadores[3].puntos > jugadores[2].puntos && jugadores[3].puntos > jugadores[4].puntos && jugadores[3].puntos > jugadores[5].puntos){
                console.log(`Gana jugador 3`)
            }
            else if(jugadores[4].puntos > jugadores[1].puntos && jugadores[4].puntos > jugadores[2].puntos && jugadores[4].puntos > jugadores[3].puntos && jugadores[4].puntos > jugadores[5].puntos){
                console.log(`Gana jugador 4`)
            }
            else if(jugadores[5].puntos > jugadores[1].puntos && jugadores[5].puntos > jugadores[2].puntos && jugadores[5].puntos > jugadores[3].puntos && jugadores[5].puntos > jugadores[4].puntos){
                console.log(`Gana jugador 5`)
            }
            else{
                console.log(`Empate`)
            }
            break;
    }
  }
  /******************************|elegir casos dependiendo de los jugadores|*************************************/
  function turno(jugadores,empezar){
    switch (jugadores) {
      case 1: caso1(empezar); break;
      case 2: caso2(empezar); break;
      case 3: caso3(empezar); break;
      case 4: caso4(empezar); break;
      case 5: caso5(empezar); break;
    }
    return tur;
  }

  /*******************************************|decidir si querer jugar de nuevo|****************************************************/
  function decidir(decision,jugador){
    if(decision == "no"){
        cerrar1();
    }
    else{
        for(let i=1;i<=jugador;i++){
            jugadores[i].puntos = 0;
            jugadores[i].dado = 0;
        }
        jug = 0;
        tur = 0;
        b = true; 
    }
  }

/*******************************************|motor de juego|****************************************************/
let a = true;
let b = true;
do{
    let participantes = parseInt(prompt("Ingrea los participantes: "));

    if(participantes >= 1 && participantes <=5){
        let c = empezar(participantes);
        reparto_fichas(participantes,c);
        do{
            turno(participantes,c);
            Tablero();
            mostrar_numero_jugadores(participantes);

            let sip = prompt("Siguente jugador: Pulse enter\n");
            let d = dados();
                if(sip == ""){
                    mostrar_turnos();
                    jugar(d);
                    sin_fichas(participantes,d);
                }
        }while(b == true);
            mostrar_numero_jugadores(participantes);
            victoria(participantes);

            let decision = prompt("Quieres volver a jugar: si o no: ").toLowerCase();
            decidir(decision,participantes);
    }
}while(a == true);
