# Pucherin
 
MODO TEXTO
------------
El modo texto es el fichero texto.js y funciona con nodejs. Para escribir en la terminal utiliza prompt-sync.
Este esta formado por dos do-while el primero para preguntar por los participantes, ver quien empieza de forma aleatoria y repartir las fichas entre los jugadores.
Despues en el segundo do-while organiza los turnos, imprime el tablero, muesra el numero de jugadores. Para empezar con el juego hay que dar enter y ya se mostrarian 
los turnos dependiendo de los jugadores y quien empieza primero. Despues se ejecuta la funcion jugar que es la que resta las fichas, introduce los dados y rellena las
casillas y en el caso de que el numero este lleno se lo suma como puntos al jugador. Y a continuacion pasa a la funcion sin_fichas para comprobar si los dos jugadores 
no tienen fichas y sumar las que queden en el tablero con los dados correspondientes y si  todas las casillas son 0 te saca del primer bucle.
Tras terminar con el segundo bucle te muestra los jugadores con todos sus puntos y da paso a ver el ganador.
Y para acabar luego hay otro prompt que te pregunta si quieres jugar de nuevo, si le dices que si vuelves a jugar y si es un no, te saca del segundo bucle.

MODO GRAFICO
------------
El modo gráfico son los documentos index.html y js.js. Este empieza pidiendo el número de jugadores con un prompt antes de que aparezca la forma gráfica. Una vez puestos los jugadores aparecen abajo con sus fichas, sus puntos y sus movimientos. Al pulsar el botón te aparece a quién le ha tocado empezar y quien pone ficha primero. Luego se van rellenando las fichas y a la vez restando estas, hasta rellenar una casilla o el puchero. Luego cuando se terminan las fichas se utilizan los dados para sacar las casillas y limpiarlas hasta dejar el tablero vacío, apareciendo a continuación el ganador y si has sacado un 12 para ganar aparecerá un alerta diciendo "fast win". Y además cuando se van vaciando las casillas se van introduciendo en los movimientos de los jugadores.

Direccion pucherin grafico con github pages:
https://izanarraez.github.io/Pucherin/
