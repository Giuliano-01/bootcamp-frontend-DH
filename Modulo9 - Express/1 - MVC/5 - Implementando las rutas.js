/*

    Implementando las rutas:
    (Dentro de app.js)
    
    -Creo una constante y requiero el módulo que contiene las rutas.
        const rutasProductos = require('./routes/productos');

    -Luego usaremos el método use() ingresando:
    1er param: la ruta base del recurso. 
    2do param: la constante que definimos anteriormente.
        
        app.use('/productos', rutasProductos);

    -Obs:
    Es importante tener en cuenta que la ruta final será la concatenación de la parte que está en app.js:

        si:
            app.use('/productos', rutasProductos);
        y en routes: 
            router.get('/detalle/:id', (req, res) => { // código });
    
    El resultado final será entonces: /productos/detalle/:id

*/