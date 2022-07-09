/*
    
    MiddlewareAplicacion:
    Son aquellos middlewares que queremos que se ejecuten siempre que se haga un pedido a la aplicación, sin importar a qué ruta ingrese el usuario.


    *Como se usan:

    -Invocando el método app.use() podemos configurar un middleware que se va a ejecutar cada vez que se haga un pedido a nuestro servidor.
    
        app.use(function(req, res, next) {
            ...
            next();
        })

    next() es un callback que se va a encargar de apilar todos los middlewares que apliquen a una misma petición y luego ejecutarlos uno tras otro.
    Por eso siempre al terminar cada middleware, ejecutamos next.


    *Ejemplos que ya usamos:

    // configuración de carpeta de archivos estáticos
        app.use(express.static(__dirname + '/public'));
    // configuración de ruteo
        const rutasProductos = require('./routes/products');
        app.use('/', rutasProductos);


    *Implementando el error 404:
    
    -404 es el código de error que representa que la ruta solicitada no fue encontrada. 
    -Por lo general, es el tipo de error que recibimos cuando hemos escrito una dirección equivocada.

    -Como este middleware se debe ejecutar solo si todas las rutas fallan, es importante que siempre esté a lo último.

        app.use((req, res, next) => {
            res.status(404).render('404-page');  --Si la página no existe, devolverá un error 404 y, adicionalmente, renderizará la vista que hayamos preparado para ese escenario.
            next();                              --Si la página existe, llamará al controlador y este devolverá la vista solicitada
        });

*/  