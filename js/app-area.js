/*Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.*/

let alturaSala = 5;
let  anchuraSala = 10;

function salaAreaPerimetro(alturaSala, anchuraSala) {
    area = alturaSala * anchuraSala;
    perimetro =  2*(alturaSala + anchuraSala);
    console.log(`La Area de la Sala es :${area}`);
    console.log (`El Perímetro de la Sala es :${perimetro}`);
}

salaAreaPerimetro(alturaSala, anchuraSala);