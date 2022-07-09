/*
    El Sist. de ruteo:
    Administra los pedidos a las rutas
    
        *Arquitectura de archivos:

        -Crearemos la carpeta routes. 
        -Dentro almacenaremos un arhivo de ruteo por cada recurso o entidad que tenga la aplicación.


        *El archivo de rutas:
        
        -Requerir el módulo express. Y guardar la ejecución del método router() en una variable nueva.
        (Este método nos va a permitir modularizar por completo todo el sistema de ruteo de una manera sencilla.)
            
            const express = require('express');
            const router = express.Router();
        


        -Requiero nuestro módulo controlador
        - Y terminar de configurar aquella ruta a la que le quitamos el callback.
        (La misma va a seguir recibiendo ese callback, pero ahora no va a ser su responsabilidad definirlo.)
            
            const productosController = require('../controllers/productosController');

            router.get('/', productosController.index);

        -Cada archivo js será un módulo que exportaremos, para luego requerir dentro del entry point de la aplicación
        (normalmente app.js).

            module.exports = routes;

*/