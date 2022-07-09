//Todos los modulos nativos puedo encontrarlos en la documentacion de node
//node/doc


//modulo os
const os = require('os');

console.log(os.platform());                 //plataforma en la que estoy ejecutando
console.log(os.release());                  //version
console.log('free memory: '+os.freemem());  //memoria libre en bytes

//modulo filesystem
const fs = require('fs');

    //escribir version asincrona  (se ejecuta lo que sigue hasta que termina de ejecutarse esto)
    fs.writeFile("./2_modulofs.txt","texto de ejemplo", function callbackderetorno(err){
        if(err){
            console.log("hubo un error: "+err);
        }else{
            console.log("archivo creado");
        }
    });
    console.log("como es asincrono se ejecuta esto antes, porque el archivo todavia se esta creando");

    //escribir version sincrona (no se ejecuta lo de abajo hasta que termine de ejecutarse la funcion)
    fs.writeFileSync("./2_modulofs.txt", "texto de ejemplo2");
    console.log("como es sincrono se ejecuta esto despues");


    //leer archivo (version asincrona)
    fs.readFile("./2_modulofs.txt",function termineDeLeer(err,datos){
        if(err){
            console.log("hubo un error");
        }else{
            console.log(datos.toString());
        }
    });

    //leer archivo (version sincrona)
    let datos = fs.readFileSync(__dirname+"/2_modulofs.txt", 'utf-8');
    console.log(datos); //no hace falta el toString porque uso el encode utf8

    