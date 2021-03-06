
//funciones expresadas

/* Se asignan como valor de una variable. 
La funci贸n en s铆 no tiene nombre, es una funci贸n an贸nima.
Para invocarla podremos usar el nombre de la variable que declaremos.
*/
let hacerSushi = function (cantidad) {
    return '馃崳'.repeat(cantidad);
}


//funciones declaradas
let hacerSushi2 = function (cantidad) {
    return '馃崳'.repeat(cantidad);
}

//valores por defecto en funciones (si no reciben esos parametros)
function saludar(nombre = 'visitante', apellido = 'an贸nimo') {
return 'Hola ' + nombre + ' ' + apellido;
}

//Obs: 
/*
Llamamos par谩metros a las variables que
escribimos cuando definimos la funci贸n.
Llamamos argumentos a los valores que
enviamos cuando invocamos la funci贸n.
*/

//diferencia entre expresada y declarada
/*
Las funciones declaradas podemos llamar antes de que 茅sta sea declarada (se cargan primeras en el compilador)
La expresi贸n de funci贸n, no, tendr铆amos que declararla primero, y despu茅s mandarla llamar.
*/
prueba();
function prueba(){
    console.log("ok");
}
prueba2();
let prueba2 = function(){
    console.log("okok2")
}