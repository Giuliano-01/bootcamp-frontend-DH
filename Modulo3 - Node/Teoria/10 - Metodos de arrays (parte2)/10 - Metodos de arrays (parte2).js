

    //map()//
//Recorre el array y devuelve un nuevo array modificado.

/*(Las modificaciones serán aquellas que programemos en nuestra función de
callback.)*/

let numeros = [2, 4, 6];

let elDoble = numeros.map(function(num){
    // Multiplicamos por 2 cada número
    return num * 2;
});
console.log(elDoble); // [4,8,12]

    //filter()//
//Recorre el array y filtra los elementos según una condición que exista en el callback.

/*(Devuelve un nuevo array que contiene únicamente los elementos que hayan
cumplido con esa condición.)*/

var edades = [22, 8, 17, 14, 30];

var mayores = edades.filter(function(edad){
    return edad > 18;
});
console.log(mayores); // [22, 30]

    //reduce()//
//Este método recorre el array y devuelve un único valor acumulador.

/*Recibe un callback que se va a ejecutar sobre cada elemento del array. Este, a
su vez, recibe dos parámetros: un acumulador y el elemento actual que esté
recorriendo.*/

var nums = [5, 7, 16];

var suma = nums.reduce(function(acum, num){
    return acum + num;
},0); // el 0 es el valor inicial del acumulador
console.log(suma); // 28

    //forEach()//
//La finalidad de este método es iterar sobre un array.

/*(Recibe un callback como parámetro y, a diferencia de los métodos anteriores,
este no retorna nada.)*/

var paises = ['Argentina', 'Cuba', 'Perú'];

paises.forEach(function(pais){
    console.log(pais);
});