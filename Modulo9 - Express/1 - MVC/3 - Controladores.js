/*

    El Controlador:
    Intermediario entre la Vista y el Modelo.


        *Arquitectura de archivos:
        
        -Crearemos la carpeta controllers. 
        -Dentro almacenaremos un controlador por cada recurso o entidad que tenga la aplicación.
        (Las entidades pueden ser cosas como usuarios, productos, carritos de compras, etc.) (Ej. productosController.js)
        -Cada controlador será un módulo que exportaremos, para luego requerirlo en donde lo necesitemos.
    
        *Creando un controlador:
        
        -Dentro del objeto iremos definiendo los métodos que se encargarán de manejar cada pedido en particular.
            
            const controlador = {
            
                index: (req, res) => {                         -Mostrar listado de productos
                            res.send('Index de productos');
                        },
                    
                show:                                           -Mostrar detalle de un producto
                    
                create:                                         -Enviar datos para agregar un producto
                    
            };
        
            module.exports = controlador;
        
        -Finalmente debemos requerir el módulo dentro del archivo de ruteo del recurso, 
        (En este caso productos.js, dentro de la carpeta routes.)
        (Lo vemos en sistema de ruteo)
    

*/