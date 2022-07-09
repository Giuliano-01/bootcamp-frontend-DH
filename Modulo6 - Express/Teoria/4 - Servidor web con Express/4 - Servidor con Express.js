/*

    INICIAR SERVIDOR:

    Luego de traer a las funciones de express a la variable app tengo que usar:

    app.listen(3000,()=>{console.log("inicio correctamente")})
    //primer parametro: puerto donde se ejecutara la app
    //segundo parametro: callback que puede retornar un console.log

    (cuando ejecutamos el codigo (con node app.js) no termina nunca
    porque se quedará escuchando si recibe alguna peticion en el puerto 3000)
    

    PRIMER REQUEST DE /:

    (Si no definimos que pasa cuando el user entra a la ruta raiz del proyecto
    o sea cuando entramos a local host 3000
    cuando entramos a la pag nos dice cannot GET /)
    
    Entonces tenemos que especificar que hacer cuando recibe ese request con:

    app.get("/", function(req,res){
        res.send("Bienvenidos al sitio");       // esto es un endpoint
    });

    Luego tenemos que reiniciar el codigo con la version del codigo actualizada


    UTILIDADES:

    npm i nodemon (sirve para reiniciar automaticamente el servidor cuando hago un cambio)
    "start": "nodemon app.js"   - Para agregarlo a los scripts del package y usar npm start
    
    npm i -g nodemon (para instalarlo globalmente y poder usarlo en todos los proyectos)    
    luego uso nodemon app.js

    
    const PORT = process.env.PORT||8080;
    (en process tengo una variable env y dentro va a haber una variable port y adentro va a tener asignado un puerto del servidor y sino uso que escuche en el 8080
    luego uno PORT como puerto para incializar el servidor)
 */