//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos

let num1 = prompt('Digite numero 1');
let num2 = prompt('Digite numero 2');


function mayorDedosnumeros(num1, num2) {
    if (num1 > num2) {
        console.log(`El mayor es ${num1}`);
        } else{ 
            console.log(`El mayor es ${num2}`);
    }
}

mayorDedosnumeros(Number(num1), Number(num2));// la funcion Number convierte los valores ingresados por elm usuarios a numeros;