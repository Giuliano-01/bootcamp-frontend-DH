
var abc = "abcdefghijklmnopqrstuvwxyz";
var esc = 'I don\'t \n know';   // \n new line

var len = abc.length;           // string length
abc.indexOf("lmno");            // find substring, -1 if doesn't contain 
abc.lastIndexOf("lmno");        // last occurance
abc.slice(3, 6);                // cuts out "def", negative values count from behind
abc.trim();                     // elimina los espacios al final y al comienzo de un string
abc.split(",");                 // splitting a string on commas gives an array
abc.split("");                  // splitting on characters

abc.replace("abc","123");       // find and replace, takes regular expressions
//con expresion regular (para reemplazar todas las apariciones)
someString = 'the cat looks like a cat';
anotherString = someString.replace(/cat/g, 'dog');
console.log(anotherString);

abc.toUpperCase();              // convert to upper case
abc.toLowerCase();              // convert to lower case
abc.concat(" ", str2);          // abc + " " + str2
abc.charAt(2);                  // character at index: "c"
abc[2];                         // unsafe, abc[2] = "C" doesn't work
abc.charCodeAt(2);              // character code at index: "c" -> 99