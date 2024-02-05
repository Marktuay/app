//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

let numero = prompt('Ingrese un numero');

function num(numero) {
    resultado = numero * numero;
    console.log(` el resultado de ${numero} multiplicado por si mismo es  ${resultado}`);

}
num(numero);