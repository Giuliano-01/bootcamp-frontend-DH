const express = require("express");
const app = express();

app.listen(8080,function(){console.log("servidor funcionando")});


app.get("/",function(req,res){
    res.send("bienvenido al sitio");
});

/*
    Enviar archivos
*/
const path = require('path');

app.get("/html",function(req,res){
    res.sendFile(path.join(__dirname,"./views/index.html"));
    //uno la dirname que es la ruta del servidor y la uno con "./views/index.html" para que en la url quede todo eso
    //ahora si voy a / entro al index.html
});
