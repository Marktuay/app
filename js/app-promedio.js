//Crear una función que reciba tres números como parámetros y devuelva su promedio.

let numero1 = prompt('digite numero 1');
let numero2 = prompt('digite numero 2');
let numero3 = prompt('Digite numero 3');

function promedioDesuma(numero1, numero2, numero3) {
    let suma = parseInt(numero1)+parseInt(numero2)+parseInt(numero3);
    let promedio = suma/3;
    console.log(`El promedio de ${numero1} + ${numero2} + ${numero3} es: ${promedio}`);
    return;
     
}
console.log('esto es excelente');

promedioDesuma(numero1, numero2, numero3); 