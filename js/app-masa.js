//Crea una función que calcule el índice de masa corporal (IMC) de una persona
// a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

 

function calcularImc(altura, peso) {
    let imc = peso / (altura * altura);
    return imc;
}
let  altura = prompt("ingrese la altura");
let  peso = prompt ("ingrese el peso");
 
let  resulImc = calcularImc(altura,peso);
console.log (`el IMC es ${resulImc}`);