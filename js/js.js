var container = document.querySelector(".box");
var casillas=9;
var orden=1;

var jugadores = {
    1: {
        fichas: 0,
        puntos: 0
    },
    2: {
        fichas: 0,
        puntos: 0
    },
    3: {
        fichas: 0,
        puntos: 0
    },
    4: {
        fichas: 0,
        puntos: 0
    },
    5: {
        fichas: 0,
        puntos: 0
    }
}  


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

//Motor de juego
let a = true;
let b = true;
let participantes = parseInt(prompt("Cuantos jugadores van a ser: Maximo 5"));
reparto_fichas()

function rellenarOrdenado(){
    switch(participantes){
        case 1: pl1(); break;
        case 2: pl2(); break;
        case 3: pl3(); break;
        case 4: pl4(); break;
        case 5: pl5(); break;
    }
}
//tipo de ORDEN segun NUMERO DE JUGADORES
function pl1(){
    switch(orden){
        case 1:
            rellenarFinal();
            jugadores[1].fichas=jugadores[1].fichas-1;
        break;
    }    
}
function pl2(){
    switch(orden){
        case 1:
            rellenarFinal();
            jugadores[1].fichas=jugadores[1].fichas-1;
            orden+=1;
        break;
        case 2:
            rellenarFinal();
            jugadores[2].fichas=jugadores[2].fichas-1;
            orden=1;
        break;
    }
}
function pl3(){
    switch(orden){
        case 1:
            rellenarFinal();
            jugadores[1].fichas=jugadores[1].fichas-1;
            orden+=1;
        break;
        case 2:
            rellenarFinal();
            jugadores[2].fichas=jugadores[2].fichas-1;
            orden+=1;
        break;
        case 3:
            rellenarFinal();
            jugadores[3].fichas=jugadores[3].fichas-1;
            orden=1;
        break;
    }
}
function pl4(){
    switch(orden){
        case 1:
            rellenarFinal();
            jugadores[1].fichas=jugadores[1].fichas-1;
            orden+=1;
        break;
        case 2:
            rellenarFinal();
            jugadores[2].fichas=jugadores[2].fichas-1;
            orden+=1;
        break;
        case 3:
            rellenarFinal();
            jugadores[3].fichas=jugadores[3].fichas-1;
            orden+=1;
        break;
        case 4:
            rellenarFinal();
            jugadores[4].fichas=jugadores[4].fichas-1;
            orden=1;
        break;
    }
}
function pl5(){
    switch(orden){
        case 1:
            rellenarFinal();
            jugadores[1].fichas=jugadores[1].fichas-1;
            orden+=1;
        break;
        case 2:
            rellenarFinal();
            jugadores[2].fichas=jugadores[2].fichas-1;
            orden+=1;
        break;
        case 3:
            rellenarFinal();
            jugadores[3].fichas=jugadores[3].fichas-1;
            orden+=1;
        break;
        case 4:
            rellenarFinal();
            jugadores[4].fichas=jugadores[4].fichas-1;
            orden+=1;
        break;
        case 5:
            rellenarFinal();
            jugadores[5].fichas=jugadores[5].fichas-1;
            orden=1;
        break;
    }
}
function rellenarFinal(){
    var num=dados();
    switch(num){
        case 2:
            can0=can0+1;
            pintarCasilla(canvases[0],num,can0);
        break;
        case 3:
            can1=can1+1;
            pintarCasilla(canvases[1],num,can1);
        break;
        case 4:
            can2=can2+1;
            pintarCasilla(canvases[2],num,can2);
        break;
        case 5:
            can3=can3+1;
            pintarCasilla(canvases[3],num,can3);
        break;
        case 6:
            can4=can4+1;
            pintarCasilla(canvases[4],num,can4);
        break;
        case 8:
            can5=can5+1;
            pintarCasilla(canvases[5],num,can5);
        break;
        case 9:
            can6=can6+1;
            pintarCasilla(canvases[6],num,can6);
        break;
        case 10:
            can7=can7+1;
            pintarCasilla(canvases[7],num,can7);
        break;
        case 11:
            can8=can8+1;
            pintarCasilla(canvases[8],num,can8);
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

//jugadores
var j1=document.getElementById("j1");
var j2=document.getElementById("j2");
var j3=document.getElementById("j3");
var j4=document.getElementById("j4");
var j5=document.getElementById("j5");

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

//MOSTRAR PUTUNTUACION
function puntuaciones(){
    switch(participantes){
        case 1:
            f1.innerHTML=jugadores[1].fichas
            tp1.innerHTML=jugadores[1].puntos
            j1.style.display="block";
        break;
        case 2:
            f1.innerHTML=jugadores[1].fichas
            tp1.innerHTML=jugadores[1].puntos
            j1.style.display="block";

            f2.innerHTML=jugadores[2].fichas
            tp2.innerHTML=jugadores[2].puntos
            j2.style.display="block";
        break;
        case 3:
            f1.innerHTML=jugadores[1].fichas
            tp1.innerHTML=jugadores[1].puntos
            j1.style.display="block";

            f2.innerHTML=jugadores[2].fichas
            tp2.innerHTML=jugadores[2].puntos
            j2.style.display="block";

            f3.innerHTML=jugadores[3].fichas
            tp3.innerHTML=jugadores[3].puntos
            j3.style.display="block";
        break;
        case 4:
            f1.innerHTML=jugadores[1].fichas
            tp1.innerHTML=jugadores[1].puntos
            j1.style.display="block";

            f2.innerHTML=jugadores[2].fichas
            tp2.innerHTML=jugadores[2].puntos
            j2.style.display="block";

            f3.innerHTML=jugadores[3].fichas
            tp3.innerHTML=jugadores[3].puntos
            j3.style.display="block";

            f4.innerHTML=jugadores[4].fichas
            tp4.innerHTML=jugadores[4].puntos
            j4.style.display="block";
        break;
        case 5:
            f1.innerHTML=jugadores[1].fichas
            tp1.innerHTML=jugadores[1].puntos
            j1.style.display="block";

            f2.innerHTML=jugadores[2].fichas
            tp2.innerHTML=jugadores[2].puntos
            j2.style.display="block";

            f3.innerHTML=jugadores[3].fichas
            tp3.innerHTML=jugadores[3].puntos
            j3.style.display="block";

            f4.innerHTML=jugadores[4].fichas
            tp4.innerHTML=jugadores[4].puntos
            j4.style.display="block";

            f5.innerHTML=jugadores[5].fichas
            tp5.innerHTML=jugadores[5].puntos
            j5.style.display="block";
        break;
    }
}

//dados 
function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    let suma = dado1+dado2;
    return suma;
}
 




















//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9



// crear puchero
var puchero = document.createElement('canvas');
puchero.classList.add('puchero');
puchero.width = 120;
puchero.height = 120;
container.appendChild(puchero);
pintarPuchero(puchero);
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

function pintarPuchero(canvas){
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
    
     ctx.fillStyle = 'white'
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

// pintamos fichas aleatorias en el tablero
/*for(let i=0; i < canvases.length; i++){
 let fichas = Math.ceil(Math.random()*(i+2));
  if (i>4) pintarCasilla(canvases[i],i+3,fichas)
 else pintarCasilla(canvases[i],i+2,fichas)
 console.log(-fichas)
 //console.log(i+" "+(i+2)+ " "+fichas);
}*/
