/*Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo
 con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.*/

 let cantidadDolar =prompt("Ingrese el monto en Dolares");

 function conversion(cantidadDolar) {
    let cordobas = cantidadDolar * 36.62;
    console.log(`la conversion de ${cantidadDolar} a cordobas es: ${cordobas}`);

}
conversion(cantidadDolar);