# Pucherin de Izan Arraez y Pedro Olmos
COMO JUGAR
------------
Para jugar al pucherin se necesitan de 1 a 5 jugadores. El juego consta en que cada jugador tiene un turno en el que lanza dos dados a los que su resultado se suman. La 
suma de ambos dados hará que el jugador ponga una de sus fichas en uno de los casillas de cada unos de los números. Si todas las casillas del número ya están completas 
la casilla se vacía y se añade la cantidad de casillas en el número en forma de puntos para el jugador.

En caso de que alguien saque 12 en los dados se llevará todas las fichas que haya en el puchero, número 7, y las sumará en forma de puntos para el jugador.
En el momento en el que ninguno de los jugadores tenga fichas se continuará tirando dados. El número que saque cada jugador hará que las fichas de dicho número se añadan 
al jugador en forma de puntos y el número se vacíe. Si alguno de los jugadores saca un 12 gana la partida automáticamente llevándose todas las fichas. Por otra parte si 
el tablero acaba vacío se acabara el juego y se hará la comprobación de puntos. 

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
El modo gráfico son los documentos index.html y js.js. Este empieza pidiendo el número de jugadores con un prompt antes de que aparezca la forma gráfica. Una vez 
los jugadores aparecen abajo con sus fichas, sus puntos y sus movimientos. Al pulsar el botón te aparece a quién le ha tocado empezar y quien pone ficha primero. Luego 
se van rellenando las fichas y a la vez restando estas, hasta rellenar una casilla o el puchero. Luego cuando se terminan las fichas se utilizan los dados para sacar las 
casillas y limpiarlas hasta dejar el tablero vacío, apareciendo a continuación el ganador y si has sacado un 12 para ganar aparecerá un alerta diciendo "fast win". Y 
además cuando se van vaciando las casillas se van introduciendo en los movimientos de los jugadores.

Direccion pucherin grafico con github pages:
https://izanarraez.github.io/Pucherin/
