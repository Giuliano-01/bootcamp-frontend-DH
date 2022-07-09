/*

    Rutas dinamicas:
    Es aquella que, muestra una información u otra dependiendo de ciertos criterios.


        *parametros obligatorios:

            app.get('/productos/:id', function (req,res) {
                // código
            })

        *parametros opcionales:
        
            app.get('/productos/:id?', function (req,res) {
                // código
            })

        *accediendo a parametros:
            
            -Params es un objeto literal. (Guarda los parámetros que llegan por URL con la estructura propiedad:valor)

            app.get('/productos/:id/:nombre?', function (req,res) {
                let idProducto = req.params.id;
                let nombreProducto = req.params.nombre || 'Sin nombre';
            })

        *Así se vería en el navegador:
            localhost:3000/productos/6
            El número que pongamos en el navegador, en reemplazo de :id, es el que vamos a obtener del objeto request mediante la propiedad params.id.

*/