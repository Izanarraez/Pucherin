var dado = 0;

function dados(){
    let dado1 = Math.ceil(Math.random()*(6-0)+0);
    let dado2 = Math.ceil(Math.random()*(6-0)+0);
    
    let suma = dado1+dado2;
    process.stdout.write(`Los dados son: ${suma}`);
    return suma;
}

dados();

