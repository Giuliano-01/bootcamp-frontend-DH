
var dogs = ["Bulldog", "Beagle", "Labrador"]; 
var dogs = new Array("Bulldog", "Beagle", "Labrador");  // declaration

var cats = ["cat1"], birds = ["bird1"];

//Methods://

//agregar
dogs.push("Chihuahua");                 // add new element to the end
dogs.unshift("Chihuahua");              // add new element to the beginning

dogs.splice(2, 0, "Pug", "Boxer");      // agrega elementos (indice donde comenzaran a agregarse, cuantos eliminaran, elementos a agregar)

//quitar
dogs.pop();                             // remove last element
dogs.shift();                           // remove first element

//convertir
dogs.toString();                        // convert to string 
//results: "Bulldog,Beagle,Labrador"

dogs.join(" * ");                       // devuelve un string con los elementos separados por lo enviado como argumento de la funcion join
//results: "Bulldog * Beagle * Labrador"

var animals = dogs.concat(cats,birds);  // concatena el array dogs con el array cats y con el array birds
dogs.sort();                            // sort string alphabetically
dogs.reverse();                         // sort string in descending order
x.sort(function(a, b){return a - b});   // numeric sort
x.sort(function(a, b){return b - a});   // numeric descending sort

//filtrar
dogs.slice(1,4);                        // array con los elementos desde el 0 hasta el 1 sin incluir
dogs.indexOf("Pug");                    // devuelve el indice donde se encuentra el elemento (si no esta devuelve -1)
dogs.lastIndexOf("Pug");                // empieza buscando desde el final del array
dogs.includes("Pug");                   // true si esta o false sino


/*
concat, copyWithin, every, fill, filter, find, findIndex, forEach, indexOf, isArray, join, lastIndexOf, map, pop, push, reduce, reduceRight, reverse, shift, slice, some, sort, splice, valueOf
*/
