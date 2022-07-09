
//Spread en arrays (...)//

/*podemos copiar todos los datos de un array en
un array nuevo.*/
let clubesUno = ['Boca', 'River', 'Racing'];
let clubesDos = ['San Lorenzo', 'Lanús', 'Gimnasia'];
let todosLosClubes = [...clubesUno, ...clubesDos];

/*podemos agregar todos los datos de un array dentro de un array
existente.*/
let parte = ['los', 'cumplas'];
let oracion = ['Que', ...parte, 'feliz'];


//Spread en objetos (...)//

/*podemos copiar todas las propiedades de un
objeto dentro de otro objeto existente.*/
let auto = {marca:'Ferrari', kms:0, anio:2019};
let corredorUno = {nombre:'Vettel', edad:32, ...auto};
let corredorDos = {nombre:'Leclerc', edad:21, ...auto};


//Spread en funciones (...)//

/*podemos pasarle a una función un array como
argumento*/
/*El operador … se encargará de expandir los datos para que la
función los tome como argumentos separados.*/

let notas = [9.3, 8.5, 3.2, 7, 10];
Math.min(...notas); // Devuelve 3.2 
//Hace Math.min(9.3, 8.5, 3.2, 7, 10)


//Rest paremeter//
//Spread en la declaracion de una funcion (... ahora es Rest parameter)
//(siempredebe ser el último parámetro de la función)

/*generará un array con todos los argumentos adicionales
que se le pasen a la función.*/

function miFuncion(param1, param2, ...otros) {
    return otros;
    }
miFuncion('a', 'b', 'c', 'd', 'e');
// retornará ['c', 'd', 'e']

/*podemos definir una función que acepte
cualquier número de argumentos.*/

function sumar(...numeros) {
    // Sabiendo que números es ahora un array utilizamos
    // el método reduce para obtener la sumatoria
    return numeros.reduce((acum, num) => acum += num);
}