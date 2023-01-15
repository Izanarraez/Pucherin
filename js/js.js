var container = document.querySelector(".box");
var casillas=9;

// crear puchero
var puchero = document.createElement('canvas');
puchero.classList.add('puchero');
puchero.width = 120;
puchero.height = 120;
container.appendChild(puchero);
pintarPuchero(puchero,0);
/* Crear elementos canvas para las casillas
Usar un bucle for para crear los elementos de manera automática 
Los canvas se formarán en una elipse  */
for (var i = 0; i < casillas; i++) {
    // Crear un elemento canvas
    var canvas = document.createElement('canvas');
    canvas.classList.add('casilla');
    // Establecer el ancho y alto del canvas en 50 (cada canvas será de 50 x 50)
    canvas.width = 120;
    canvas.height = 120;
    // Añadir el canvas a la página
    container.appendChild(canvas);
 
}

// Obtener una referencia a todos los elementos canvas en la página
var canvases = document.querySelectorAll('.casilla');



// Dibujar una elipse en cada canvas y posicionarlos en una elipse de 
for (var i = 0; i < canvases.length; i++) {
    // Obtener el contexto del canvas en 2D
    var ctx = canvases[i].getContext('2d');

    // Dibujar una elipse en el canvas
    ctx.beginPath();  
    
    //ctx.ellipse(35, 35, 35, 35, 0, 0, 2 * Math.PI);
    //ctx.stroke();

    // Posicionar el canvas en la elipse 
    canvases[i].style.left = Math.cos(2 * Math.PI * i / casillas) * 400 + 400 - 25 + 'px';
    canvases[i].style.top = Math.sin(2 * Math.PI * i / casillas) * 250 + 300  - 25  + 'px';
    
    if (i>4) pintarCasilla(canvases[i],i+3)
    else pintarCasilla(canvases[i],i+2)
}



function pintarCasilla(canvas, fichas, num){
    var ctx = canvas.getContext('2d');
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    for (var i = 0; i < fichas; i++) {
        // Calcular la posición en el círculo para cada ficha
        var x = Math.cos(2 * Math.PI * i / fichas) * 35 + canvas.width / 2;
        var y = Math.sin(2 * Math.PI * i / fichas) * 35 + canvas.height / 2;
    
        // Dibujar la ficha en la posición calculada
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, 2 * Math.PI);
        if (i < num ) ctx.fillStyle = 'red'
           else ctx.fillStyle = 'white'
        ctx.fill();
        
        ctx.fillStyle = 'white';
        // Establecer la fuente para el texto
        ctx.font = '24px sans-serif';
        // Dibujar el número en el canvas usando el método fillText()
        x = canvas.width / 2 - ctx.measureText(fichas).width / 2;
        y = canvas.height / 2 + 10;
        ctx.fillText(fichas, x, y);
    }
 
}

function pintarPuchero(canvas,num){
    var ctx = canvas.getContext('2d');
    ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    for (var i = 0; i < 4; i++) {
        // Calcular la posición en el círculo para cada ficha
        var x = Math.cos(2 * Math.PI * i / 4) * 35 + canvas.width / 2;
        var y = Math.sin(2 * Math.PI * i / 4) * 35 + canvas.height / 2;
        // Dibujar la ficha en la posición calculada
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, 2 * Math.PI);
        if (i < num ) ctx.fillStyle = 'blue'
            else ctx.fillStyle = 'white'
        ctx.fill();
        ctx.fillStyle = 'white';
        // Establecer la fuente para el texto
         ctx.font = '24px sans-serif';
         // Dibujar el número en el canvas usando el método fillText()
         x = canvas.width / 2 - ctx.measureText(7).width / 2;
         y = canvas.height / 2 + 10;
         ctx.fillText(7, x, y);
    }
    
}

//VARIOABLES AUXILIARES
var orden=1;
var cartelVictoria=document.getElementById("CatelGanador");
var mainJuego=document.getElementById("mainJuego");
var winer=document.getElementById("winer");


//jugadores
var j1=document.getElementById("j1");
var j2=document.getElementById("j2");
var j3=document.getElementById("j3");
var j4=document.getElementById("j4");
var j5=document.getElementById("j5");



var jugadores = {
    1: {
        fichas: 0,
        casis: [],
        puntos: 0
    },
    2: {
        fichas: 0,
        casis: [],
        puntos: 0
    },
    3: {
        fichas: 0,
        casis: [],
        puntos: 0
    },
    4: {
        fichas: 0,
        casis: [],
        puntos: 0
    },
    5: {
        fichas: 0,
        casis: [],
        puntos: 0
    }
}  


refrescarVictoria();

//Casillas rellenas
var can0=0;
var can1=0;
var can2=0;
var can3=0;
var can4=0;
var can5=0;
var can6=0;
var can7=0;
var can8=0;
var canPuch=0;

let participantes = parseInt(prompt("Cuantos jugadores van a ser: Maximo 5"));
reparto_fichas()
ocultJugs()
var turnoJugador=document.getElementById("turno");

function rellenarOrdenado(){
    switch(participantes){
        case 1: pl1(); break;
        case 2: pl2(); break;
        case 3: pl3(); break;
        case 4: pl4(); break;
        case 5: pl5(); break;
    }
}
function ocultJugs(){
    switch(participantes){
        case 1: 
            j1.style.display="block";
            j2.style.display="none";
            j3.style.display="none";
            j4.style.display="none";
            j5.style.display="none";
            j1.style.width="100%";
        break;
        case 2: 
            j1.style.display="block";
            j2.style.display="block";
            j3.style.display="none";
            j4.style.display="none";
            j5.style.display="none";
            j1.style.width="50%";
            j2.style.width="50%";
        break;
        case 3: 
            j1.style.display="block";
            j2.style.display="block";
            j3.style.display="block";
            j4.style.display="none";
            j5.style.display="none";
            j1.style.width="33%";
            j2.style.width="33%";
            j3.style.width="33%";
        break;
        case 4: 
            j1.style.display="block";
            j2.style.display="block";
            j3.style.display="block";
            j4.style.display="block";
            j5.style.display="none";
            j1.style.width="25%";
            j2.style.width="25%";
            j3.style.width="25%";
            j4.style.width="25%";
        break;
        case 5: 
            j1.style.display="block";
            j2.style.display="block";
            j3.style.display="block";
            j4.style.display="block";
            j5.style.display="block";
            j1.style.width="20%";
            j2.style.width="20%";
            j3.style.width="20%";
            j4.style.width="20%";
            j5.style.width="20%";
        break;
    }
}

//tipo de ORDEN segun NUMERO DE JUGADORES
function pl1(){
    var aux;
    switch(orden){
        case 1:
            aux=1;
            add(aux);
            turnoJugador.innerHTML="Tu turno, jugador solitario";
        break;
    }
}
function pl2(){
    var aux;
    switch(orden){
        case 1:
            aux=1;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 2";
        break;
        case 2:
            aux=2;
            add(aux);
            orden=1;
            turnoJugador.innerHTML="Turno del jugador 1";
        break;
    }
}
function pl3(){
    var aux;
    switch(orden){
        case 1:
            aux=1;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 2";
        break;
        case 2:
            aux=2;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 3";
        break;
        case 3:
            aux=3;
            add(aux);
            orden=1;
            turnoJugador.innerHTML="Turno del jugador 1";
        break;
    }
}
function pl4(){
    var aux;
    switch(orden){
        case 1:
            aux=1;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 2";
        break;
        case 2:
            aux=2;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 3";
        break;
        case 3:
            aux=3;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 4";
        break;
        case 4:
            aux=4;
            add(aux);
            orden=1;
            turnoJugador.innerHTML="Turno del jugador 1";
        break;
    }
}
function pl5(){
    var aux;
    switch(orden){
        case 1:
            aux=1;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 2";
        break;
        case 2:
            aux=2;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 3";
        break;
        case 3:
            aux=3;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 4";
        break;
        case 4:
            aux=4;
            add(aux);
            orden+=1;
            turnoJugador.innerHTML="Turno del jugador 5";
        break;
        case 5:
            aux=5;
            add(aux);
            orden=1;
            turnoJugador.innerHTML="Turno del jugador 1";
        break;
    }
}
function add(aux){
    if(jugadores[aux].fichas<=0){
        jugadores[aux].fichas=0;
        checkCero(aux);
    }else{
        rellenarFinal(aux);
        jugadores[aux].fichas=jugadores[aux].fichas-1;
    }
}
function checkCero(aux){
    var num=dados();
    switch(num){
        case 2:
            can=can0;
            can0=0;
            checkCeroAux(num,aux,0,can);
            jugadores[aux].casis.push("-C2-");
        break;
        case 3:
            can=can1;
            can1=0;
            checkCeroAux(num,aux,1,can);
            jugadores[aux].casis.push("-C3-");
        break;
        case 4:
            can=can2;
            can2=0;
            checkCeroAux(num,aux,2,can);
            jugadores[aux].casis.push("-C4-");
        break;
        case 5:
            can=can3;
            can3=0;
            checkCeroAux(num,aux,3,can);
            jugadores[aux].casis.push("-C5-");
        break;
        case 6:
            can=can4;
            can4=0;
            checkCeroAux(num,aux,4,can);
            jugadores[aux].casis.push("-C6-");
        break;
        case 7:
            jugadores[aux].puntos+=canPuch
            canPuch=0;
            pintarPuchero(puchero,canPuch);
            if(todosCero()==true){
                comprVictoria();
            }
            jugadores[aux].casis.push("-Puchero-");
        break;
        case 8:
            can=can5;
            can5=0;
            checkCeroAux(num,aux,5,can);
            jugadores[aux].casis.push("-C8-");
        break;
        case 9:
            can=can6;
            can6=0;
            checkCeroAux(num,aux,6,can);
            jugadores[aux].casis.push("-C9-");
        break;
        case 10:
            can=can7;
            can7=0;
            checkCeroAux(num,aux,7,can);
            jugadores[aux].casis.push("-C10-");
        break;
        case 11:
            can=can8;
            can8=0;
            checkCeroAux(num,aux,8,can);
            jugadores[aux].casis.push("-C11-");
        break;
        case 12:
            alert("fast win")
            winer.innerHTML="GANADOR JUGADOR "+aux;
            confirVictoria();
        break;
    }
}
function checkCeroAux(num,aux,ncan,can){
    jugadores[aux].puntos+=can;
    pintarCasilla(canvases[ncan],num,0);
    todosCero()
}
function todosCero(){
    var a=0;
    for(var i=1;i<=participantes;i++){
        if(jugadores[i].fichas==0){
            a+=1;
        }   
    }
    if(a==participantes && can0==0 && can1==0 && can2==0 && can3==0 && can4==0 && can5==0 && can6==0 && can7==0 && can8==0 && canPuch==0){
        comprVictoria()
    }
}
function rellenarFinal(aux){
    var num=dados();
    switch(num){
        case 2:
            can0=can0+1;
            if(can0==(num+1)){
                can0=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[0],num,can0);
                jugadores[aux].casis.push("-C2-");
            }else{
                pintarCasilla(canvases[0],num,can0);
                jugadores[aux].casis.push("-C2-");
            }
        break;
        case 3:
            can1=can1+1;
            if(can1==(num+1)){
                can1=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[1],num,can1);
                jugadores[aux].casis.push("-C3-");
            }else{
                pintarCasilla(canvases[1],num,can1);
                jugadores[aux].casis.push("-C3-");
            }
        break;
        case 4:
            can2=can2+1;
            if(can2==(num+1)){
                can2=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[2],num,can2);
                jugadores[aux].casis.push("-C4-")
            }else{
                pintarCasilla(canvases[2],num,can2);
                jugadores[aux].casis.push("-C4-");
            }
        break;
        case 5:
            can3=can3+1;
            if(can3==(num+1)){
                can3=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[3],num,can3);
                jugadores[aux].casis.push("-C5-");
            }else{
                pintarCasilla(canvases[3],num,can3);
                jugadores[aux].casis.push("-C5-");
            }
        break;
        case 6:
            can4=can4+1;
            if(can4==(num+1)){
                can4=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[4],num,can4);
                jugadores[aux].casis.push("-C6-");
            }else{
                pintarCasilla(canvases[4],num,can4);
                jugadores[aux].casis.push("-C6-");
            }
        break;
        case 7:
            canPuch=canPuch+1;
            if(canPuch==5){
                canPuch=0;
                jugadores[aux].puntos=jugadores[aux].puntos+4;
                pintarPuchero(puchero,canPuch);
                jugadores[aux].casis.push("-PucheroLleno-");
            }else{
                pintarPuchero(puchero,canPuch);
                jugadores[aux].casis.push("-Puchero-");
            }
        break;
        case 8:
            can5=can5+1;
            if(can5==(num+1)){
                can5=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[5],num,can5);
                jugadores[aux].casis.push("-C8-");
            }else{
                pintarCasilla(canvases[5],num,can5);
                jugadores[aux].casis.push("-C8-");
            }
        break;
        case 9:
            can6=can6+1;
            if(can6==(num+1)){
                can6=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[6],num,can6);
                jugadores[aux].casis.push("-C9-");
            }else{
                pintarCasilla(canvases[6],num,can6);
                jugadores[aux].casis.push("-C9-");
            }
        break;
        case 10:
            can7=can7+1;
            if(can7==(num+1)){
                can7=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[7],num,can7);
                jugadores[aux].casis.push("-C10-");
            }else{
                pintarCasilla(canvases[7],num,can7);
                jugadores[aux].casis.push("-C10-");
            }
        break;
        case 11:
            can8=can8+1;
            if(can8==(num+1)){
                can8=0;
                jugadores[aux].puntos=jugadores[aux].puntos+num;
                pintarCasilla(canvases[8],num,can8);
                jugadores[aux].casis.push("-C11-");
            }else{
                pintarCasilla(canvases[8],num,can8);
                jugadores[aux].casis.push("-C11-");
            }
        break;
        case 12:
            jugadores[aux].puntos=jugadores[aux].puntos+canPuch;
            canPuch=0;
            pintarPuchero(puchero,canPuch);
            jugadores[aux].casis.push("-Bote-");
        break;
    }
}

function reparto_fichas(){
    switch (participantes) {
        case 1:
            jugadores[1].fichas = 50;
        break;
        case 2:
            jugadores[1].fichas = 25;
            jugadores[2].fichas = 25;
        break;
        case 3:
            jugadores[1].fichas = 17;
            jugadores[2].fichas = 17;
            jugadores[3].fichas = 16;
        break;
        case 4:
            jugadores[1].fichas = 13;
            jugadores[2].fichas = 13;
            jugadores[3].fichas = 12;
            jugadores[4].fichas = 12;
        break;
        case 5:
            jugadores[1].fichas = 10;
            jugadores[2].fichas = 10;
            jugadores[3].fichas = 10;
            jugadores[4].fichas = 10;
            jugadores[5].fichas = 10;
        break;
    } 
}


//fichas
var f1=document.getElementById("f1");
var f2=document.getElementById("f2");
var f3=document.getElementById("f3");
var f4=document.getElementById("f4");
var f5=document.getElementById("f5");

//puntos
var tp1=document.getElementById("tp1");
var tp2=document.getElementById("tp2");
var tp3=document.getElementById("tp3");
var tp4=document.getElementById("tp4");
var tp5=document.getElementById("tp5");

//historial de movimientos
var move1=document.getElementById("move1");
var move2=document.getElementById("move2");
var move3=document.getElementById("move3");
var move4=document.getElementById("move4");
var move5=document.getElementById("move5");

//MOSTRAR PUTUNTUACION
function puntuaciones(e){
    switch(participantes){
        case 1:
            displayp1();
        break;
        case 2:
            displayp1();
            displayp2();
        break;
        case 3:
            displayp1();
            displayp2();
            displayp3();
        break;
        case 4:
            displayp1();
            displayp2();
            displayp3();
            displayp4();
        break;
        case 5:
            displayp1();
            displayp2();
            displayp3();
            displayp4();
            displayp5();
        break;
    }
}
function displayp1(){
    f1.innerHTML=jugadores[1].fichas
    tp1.innerHTML=jugadores[1].puntos
    move1.innerHTML=jugadores[1].casis
    j1.style.display="block";
}
function displayp2(){
    f2.innerHTML=jugadores[2].fichas
    tp2.innerHTML=jugadores[2].puntos
    move2.innerHTML=jugadores[2].casis
    j2.style.display="block";
}
function displayp3(){
    f3.innerHTML=jugadores[3].fichas
    tp3.innerHTML=jugadores[3].puntos
    move3.innerHTML=jugadores[3].casis
    j3.style.display="block";
}
function displayp4(){
    f4.innerHTML=jugadores[4].fichas
    tp4.innerHTML=jugadores[4].puntos
    move4.innerHTML=jugadores[4].casis
    j4.style.display="block";
}
function displayp5(){
    f5.innerHTML=jugadores[5].fichas
    tp5.innerHTML=jugadores[5].puntos
    move5.innerHTML=jugadores[5].casis
    j5.style.display="block";
}
//dados 
function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    let suma = dado1+dado2;
    return suma;
} 
 
function comprVictoria(){
    switch(participantes){
        case 1:
            winer.innerHTML="GANADOR JUGADOR SOLITARIO";
            confirVictoria();
        break;
        case 2:
            if(jugadores[1].puntos>jugadores[2].puntos){
                winer.innerHTML="GANADOR JUGADOR 1";
                confirVictoria();
            }else if(jugadores[1].puntos==jugadores[2].puntos){
                winer.innerHTML="EMPATE BROTHERS";
                confirVictoria();
            }
        break;
        case 3:
            if(jugadores[1].puntos>jugadores[2].puntos && jugadores[1].puntos>jugadores[3].puntos){
                winer.innerHTML="GANADOR JUGADOR 1";
                confirVictoria();
            }else{
                if(jugadores[2].puntos>=jugadores[3].puntos){
                    winer.innerHTML="GANADOR JUGADOR 2";
                    confirVictoria();
                }else{
                    winer.innerHTML="GANADOR JUGADOR 3";
                    confirVictoria();
                }
            }
        break;
        case 4:
            if(jugadores[1].puntos>jugadores[2].puntos && jugadores[1].puntos>jugadores[3].puntos && jugadores[1].puntos>jugadores[4].puntos){
                winer.innerHTML="GANADOR JUGADOR 1";
                confirVictoria();
            }else{
                if(jugadores[2].puntos>jugadores[3].puntos && jugadores[2].puntos>jugadores[4].puntos){
                    winer.innerHTML="GANADOR JUGADOR 2";
                    confirVictoria();
                }else{
                    if(jugadores[3].puntos>=jugadores[4].puntos){
                        winer.innerHTML="GANADOR JUGADOR 3";
                        confirVictoria();
                    }else{
                        winer.innerHTML="GANADOR JUGADOR 4";
                        confirVictoria();
                    }
                }
            }
        break;
        case 5:
            if(jugadores[1].puntos>jugadores[2].puntos && jugadores[1].puntos>jugadores[3].puntos && jugadores[1].puntos>jugadores[4].puntos && jugadores[1].puntos>jugadores[5].puntos){
                winer.innerHTML="GANADOR JUGADOR 1";
                confirVictoria();
            }else{
                if(jugadores[2]>jugadores[3] && jugadores[2].puntos>jugadores[4].puntos && jugadores[2].puntos>jugadores[5].puntos){
                    winer.innerHTML="GANADOR JUGADOR 2";
                    confirVictoria();
                }else{
                    if(jugadores[3].puntos>jugadores[4].puntos && jugadores[3].puntos>jugadores[5].puntos){
                        winer.innerHTML="GANADOR JUGADOR 3";
                        confirVictoria();
                    }else{
                        if(jugadores[4].puntos>=jugadores[5].puntos){
                            winer.innerHTML="GANADOR JUGADOR 4";
                            confirVictoria();
                        }else{
                            winer.innerHTML="GANADOR JUGADOR 5";
                            confirVictoria();
                        }
                    }
                }
            }
        break;
    }
}
function confirVictoria(){
    mainJuego.style.display="none";
    cartelVictoria.style.display="block";
}
function refrescarVictoria(){
    mainJuego.style.display="block";
    cartelVictoria.style.display="none";
}
