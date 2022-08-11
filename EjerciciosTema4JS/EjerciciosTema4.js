// Usando If
var numeroIf = 4;
if (numeroIf === 0) {
    console.log('El número es Igual a Cero');
}else {
    if (numeroIf > 0) {
        console.log('El número es ' + numeroIf	+ ', es Positivo');
    } else{
        console.log('El número es ' + numeroIf	+ ', es Negativo');
    }
}

// Usando Bucle While

var numeroWhile = -3;
while(numeroWhile <= 3){
    console.log('Resultado While '+ numeroWhile);
    numeroWhile += 1;
}

// Usando Do While

var numeroDoWhile = 3;
do {
    console.log('Resultado Do While = '+ numeroDoWhile);
    numeroDoWhile -= 1;
} while(numeroDoWhile > 3);

// Usando Bucle For

for (var numeroFor = 0; numeroFor <= 3; numeroFor += 1) {
    console.log(' Resultado Bucle For = '+ numeroFor);
}

// Usando switch case

const estacion = 'Lunes';
switch (estacion) {
    case 'Verano':
        console.log('Estamos en Verano, Uff que veranito!!');        
        break;
    case 'Invierno':
        console.log('Estamos en Invierno, hay que abrigarse!!');        
        break;
    case 'Otoño':
        console.log('Estamos en Otoño, Uff las hojas cayendo!!');        
    break;
    case 'Primavera':
        console.log('Estamos en Primavera, Huuuhu al fin buen Clima!!');        
    break;
    default:
        console.log('los datos introducidos No corresponden a una estación!!!');
        break;
}


