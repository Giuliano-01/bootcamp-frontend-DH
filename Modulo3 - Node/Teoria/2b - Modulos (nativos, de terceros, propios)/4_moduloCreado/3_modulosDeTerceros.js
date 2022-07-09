//luego de instalar desde el gestor de paquetes un modulo como moment..
//(npm i moment)

let moment = require('moment');

console.log(moment().format('DD MM YYYY')); //puedo usar las funciones del modulo moment
console.log(moment().format('Do MMM YYYY'));
console.log(moment().format('DD MM YY'));
console.log(moment().format('Do Mo YYYY'));
console.log(moment().format('dd MMM YYYY'));
