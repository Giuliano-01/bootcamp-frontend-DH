/*
    ESTRUCTURA:
    
    const path = require('path');   -Para generar la ruta necesitamos el modulo nativo path.

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/views/index.html'));
    });

    join()              - Se encargará de unir las piezas de nuestra ruta teniendo en cuenta el sistema operativo donde estemos
    __dirname           - Es una constante de Node.js que hace referencia al directorio del archivo que se está ejecutando.
    /views/index.html   -Es el path relativo al archivo que queremos enviar. En este caso, dentro de la carpeta views, el archivo index.html.

*/