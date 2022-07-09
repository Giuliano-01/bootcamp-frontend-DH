
//Carpeta "node_modules" y Archivo "package-lock.json"

//1 npm install colors para instalar el modulo colors
//2 node_modules: se crea para guardar el modulo colors
//3 package-lock.json: lista que modulos se instalan y la carpeta donde se han instalado

const colors = require("colors");

console.log("hola".red);
console.log("hola".rainbow);

//Iniciar Proyecto

//npm init
    //con esto creo un archivo package.json donde esta toda la informacion del proyecto y los modulos necesarios
    //va a pedir info general y crear el archivo
 
//luego si quiero subir el codigo a un servidor:
    //lo unico que necesito para correrlo es el codigo principal y package-lock.json / package.json que alli se leera todo sobre el servidor y descargar los modulos que necesite


//Iniciar Proyecto Creado

//npm install (con ese comando se crea el proyecto y agregara todo (borrar modules para ver))
 
 
//scripts
    //son scripts del proyecto.
   
    //puedo agregar "start" : "node index.js"
    //cuando ejecute el comando npm start se ejecutara el comando que le asigne
 
    //puedo agregar "desarrollo" : "node index.js"
    //para agregar comando con nombres no reconocidos tengo que usar
    //npm run desarrollo
 
 
 
//Para crear servidores puedo usar frameworks como Express
