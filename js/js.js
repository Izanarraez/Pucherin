var container = document.querySelector(".box");
const casillas = 9;

const Jugadores = {
  "jugador1": [],
  "jugador2": [],
  "jugador3": [],
  "jugador4": [],
  "jugador5": []
}

var a = 0, b = 0, c = 0, d = 0, e = 0;

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

//Casos para comprubar numero maximo de jugadores y ir alternando turnos
function caso1(turno){
  if(turno == 1){
    Jugadores.jugador1[a++] = distincion(dados(),1);
  }
}
function caso2(turno){
  if(turno == 1){
    Jugadores.jugador1[a++] = distincion(dados(),1);
    turno = 2;
  }
  else{
    Jugadores.jugador2[b++] = distincion(dados(),1);
    turno = 1;
  }
}
function caso3(turno){
  if(turno == 1){
    Jugadores.jugador1[a++] = distincion(dados(),1);
    turno = 2;
  }
  else if(turno == 2){
    Jugadores.jugador2[b++] = distincion(dados(),1);
    turno = 3;
  }
  else{
    Jugadores.jugador3[c++] = distincion(dados(),1);
    turno = 1;
  }
}
function caso4(turno){
  if(turno == 1){
    Jugadores.jugador1[a++] = distincion(dados(),1);
    turno = 2;
  }
  else if(turno == 2){
    Jugadores.jugador2[b++] = distincion(dados(),1);
    turno = 3;
  }
  else if(turno == 3){
    Jugadores.jugador3[c++] = distincion(dados(),1);
    turno = 4;
  }
  else{
    Jugadores.jugador4[d++] = distincion(dados(),1);
    turno = 1;
  }
}
function caso5(turno){
  if(turno == 1){
    Jugadores.jugador1[a++] = distincion(dados(),1);
    turno = 2;
  }
  else if(turno == 2){
    Jugadores.jugador2[b++] = distincion(dados(),1);
    turno = 3;
  }
  else if(turno == 3){
    Jugadores.jugador3[c++] = distincion(dados(),1);
    turno = 4;
  }
  else if(turno == 4){
    Jugadores.jugador4[d++] = distincion(dados(),1);
    turno = 5;
  }
  else{
    Jugadores.jugador1[e++] = distincion(dados(),1);
    turno = 1;
  }
}

function cambioJugador(jugadores,turno){
  switch (jugadores) {
    case 1:
        caso1(turno);
      break;
    case 2:
        caso2(turno);
      break;
    case 3:
        caso3(turno);
      break;
    case 4:
        caso4(turno);
      break;
    case 5:
        caso5(turno);
      break;
  }
}

function distincion(dados,fichas){
  if(dados == 2){
    pintarCasilla(canvases[0],2,fichas);
  }
  else if(daods == 3){
    pintarCasilla(canvases[1],3,fichas);
  }
  else if(daods == 4){
    pintarCasilla(canvases[2],4,fichas);
  }
  else if(daods == 5){
    pintarCasilla(canvases[3],5,fichas);
  }
  else if(daods == 6){
    pintarCasilla(canvases[4],6,fichas);
  }
  else if(daods == 8){
    pintarCasilla(canvases[5],8,fichas);
  }
  else if(daods == 9){
    pintarCasilla(canvases[6],9,fichas);
  }
  else if(daods == 10){
    pintarCasilla(canvases[7],10,fichas);
  }
  else if(daods == 11){
    pintarCasilla(canvases[8],11,fichas);
  }
  else{
    pintarPuchero();
  }
}

//Mostrar jugadores forma grafica
function activarJugadores(jugadores){
  if(jugadores >= 1){
      console.log(document.getElementById("j1").style.display = "flex");
    if(jugadores >= 2){
        document.getElementById("j2").style.display = "flex";
      if(jugadores >= 3){
          document.getElementById("j3").style.display = "flex";
        if(jugadores >= 4){
            document.getElementById("j4").style.display = "flex";
          if(jugadores == 5){
              document.getElementById("j5").style.display = "flex";
          }
        }
      }
    }
  }
}

//ver quien inicia primero
function turno(jugadores){
  return Math.ceil(Math.random() * (jugadores - 0) + 0);
}

//dados 
function dados(){
  let dado1 = Math.ceil(Math.random()*(6-0)+0);
  let dado2 = Math.ceil(Math.random()*(6-0)+0);
  
  return dado1+dado2;
}

function jugar(){
}



// pintamos fichas aleatorias en el tablero
/*for(let i=0; i < canvases.length; i++){
  let fichas = Math.ceil(Math.random()*(i+2));
   if (i>4) pintarCasilla(canvases[i],i+3,fichas)
  else pintarCasilla(canvases[i],i+2,fichas)
  console.log(-fichas)
  //console.log(i+" "+(i+2)+ " "+fichas);
}*/

let sl1 = false;
let sl2 = false;

Jugadores.jugador1[0] = pintarCasilla(canvases[0],2,1);
Jugadores.jugador1[1] = pintarCasilla(canvases[1],3,1);
Jugadores.jugador1[2] = pintarCasilla(canvases[2],4,1);
Jugadores.jugador1[3] = pintarCasilla(canvases[3],5,1);
Jugadores.jugador1[4] = pintarCasilla(canvases[4],6,1);
Jugadores.jugador1[5] = pintarCasilla(canvases[5],8,1);
Jugadores.jugador1[6] = pintarCasilla(canvases[6],9,1);
Jugadores.jugador1[7] = pintarCasilla(canvases[7],10,1);
Jugadores.jugador1[8] = pintarCasilla(canvases[8],11,1);

do{

  let jugadores = parseInt(prompt("Cuantos jugadores van a ser: Maximo 5"));
  
      if(jugadores >= 1 && jugadores <=5){
        activarJugadores(jugadores);
        do{
          
        sl2 = true;
        }while(sl2 == false);
        sl1 = true;
      }
}while(sl1 == false);

//pintarCasilla(canvases[2], 4, 2); // pinta dos fichas en el 4
//pintarCasilla(canvases[8], 11, 5); // pinta 5 fichas en el 11
//pintarCasilla(canvases[6], 9, 3); // pinta 3 fichas en el 9