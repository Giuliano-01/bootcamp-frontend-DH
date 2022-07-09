
//funciones expresadas

/* Se asignan como valor de una variable. 
La función en sí no tiene nombre, es una función anónima.
Para invocarla podremos usar el nombre de la variable que declaremos.
*/
let hacerSushi = function (cantidad) {
    return '🍣'.repeat(cantidad);
}


//funciones declaradas
let hacerSushi2 = function (cantidad) {
    return '🍣'.repeat(cantidad);
}

//valores por defecto en funciones (si no reciben esos parametros)
function saludar(nombre = 'visitante', apellido = 'anónimo') {
return 'Hola ' + nombre + ' ' + apellido;
}

//Obs: 
/*
Llamamos parámetros a las variables que
escribimos cuando definimos la función.
Llamamos argumentos a los valores que
enviamos cuando invocamos la función.
*/

//diferencia entre expresada y declarada
/*
Las funciones declaradas podemos llamar antes de que ésta sea declarada (se cargan primeras en el compilador)
La expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
*/
prueba();
function prueba(){
    console.log("ok");
}
prueba2();
let prueba2 = function(){
    console.log("okok2")
}