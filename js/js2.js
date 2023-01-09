/*var nombre;
process.stdout.write("Hola:");
process.stdin.on('data',function a(dato){
   nombre = dato.toString();
   process.stdout.write(`Hola ${nombre}`);
   process.exit();
});*/

var preguntas = ["Cuantos años tienes","Cual es tu nombre"]
var respuestas = [];

function pregunta(i){
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data',function a(dato){
    respuestas.push(dato.toString().trim());

    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }
    else{
        process.exit();
    }
});

pregunta(0);
