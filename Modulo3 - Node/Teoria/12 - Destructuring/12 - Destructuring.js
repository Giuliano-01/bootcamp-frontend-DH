/*
    Para desestructurar un array declaramos una variable (podemos usar var, let
o const) y, entre corchetes, escribimos el nombre que queremos. Podemos
declarar más de una variable, separando cada una con una coma ,.
Luego, igualamos esa estructura al array del cual queremos extraer los datos.
*/

let colores = ['Rojo', 'Azul', 'Amarillo'];
let [rojo, azul, amarillo] = colores;
/* la variable rojo va a ser igual al string "Rojo"*/
/* la variable azul va a ser igual al string "Azul"*/
/*etc*/

let [color1, , color3] = colores;
/* si dejo un espacio vacio, salteo un elemento del array */
/* la variable color1 va a ser igual al string "Rojo"*/
/* la variable color2 va a ser igual al string "Amarillo"*/


//ejemplo con un objeto literal
let persona = {nombre: 'Laura', edad: 31, faltas: 3};

let {nombre, edad} = persona;
//la variable nombre tendra el nombre y la variable edad la edad

let {nombre: nombre1, faltas} = persona;
//en este caso faltas corresponde a faltas del objeto

let {nombre: nombres, faltas: totalFaltas} = persona;
//aca le asigno otro nombre a la variable que contiene faltas

const { modelo:{serie}} = obj;
//trae el atributo serie del objeto modelo que esta dentro del objeto obj;