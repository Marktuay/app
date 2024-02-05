/* Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.*/

let radio = 3;

function areaPerimetroSala(radio) {
    const pi = 3.14;
    areaSalacircular = pi *  (radio ** 2);
    perimetroSalacirculo= 2*pi*radio ;
    
    console.log(`La Area de la Sala Circular es :${areaSalacircular}`);
    console.log (`El Perímetro de la Sala Circular es :${perimetroSalacirculo}`);
    
}
areaPerimetroSala(radio);