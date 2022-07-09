//cli es como el npm start
//process.argv son los parametros que se pasan como argumento a la consola de node

console.log(process.argv);
//veo como 1°param path donde esta instalado node
//veo como 2°param path del archivo que ejecutamos actualmente

// veo como 3° o 4° o n° parametro los arg que agregue a la consola (todo es string)
// node app.js arg1 arg2 arg3 etc..

//ej:
//Los principales usos del objeto Number(valor) son convertir un string u otro valor a uno de tipo numérico; si el argumento no puede ser convertido a un número, devuelve NaN.
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
const argumento = process.argv[4];

function sum(a,b){console.log(a+b)};
function restar(a,b){console.log(a-b)};

if(argumento == 'sum') sum(num1, num2);
if(argumento == 'restar') restar(num1,num2);