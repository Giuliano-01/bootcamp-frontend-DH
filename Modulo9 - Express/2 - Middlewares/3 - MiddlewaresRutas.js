/*

    MiddlewareRutas:
    Son aquellos middlewares que se aplicarán únicamente a la rutas en donde los definamos.


    *¿Cómo lo escribimos?:

    -Al igual que los middlewares de aplicación, los de ruta deberán recibir tres parámetros: el request, el response y el next.
    -En muchos casos usaremos estos middlewares en múltiples rutas, así que es una buena idea escribir el código en un archivo aparte y requerirlo en donde lo vayamos a usar.
        
        function rutaDeUsuario(req,res,next) {
            // verificamos si el usuario está logueado
            // si no está logueado, podemos enviarlo al login
            // si está logueado, ejecutamos next() para seguir con la ejecución
         next();
        }

    *¿Cómo configurarlo?:

    -Ya sea que estemos utilizando un sistema de ruteo, o rutas definidas directamente sobre la ejecución de Express, 
    para aplicarles un middleware, deberemos pasarle un callback a la ruta justo entre la ruta y la acción del controlador.
        
        const userRoute = require('../middlewares/userRoute');
        router.get('/usuario/perfil', userRoute, usersController.profile);

    *¿Qué es ese callback?:
    Es nuestro middleware. Aquella funcionalidad que queremos implementar antes de que se ejecute la acción del controlador.


*/