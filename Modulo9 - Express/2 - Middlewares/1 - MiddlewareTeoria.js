/*
    Middleware:
    (Una capa intermedia de procesamiento lógico, entre el request y el response.)

    *Razón: 
    -Cada vez que hay una req posiblemente necesitemos validar muchas cosas, que el usuario este logueado, pedirle algo a la base de datos..
    -Estas cosas podemos separalas en otras funciones.
    
    -logmiddleware: registrar que entro el usuario
    -authmiddleware: verificar que tenga los permisos  (recibe el pedido: para verificar los datos, la respuesta: para modificarla y luego next: el siguiente middleware)
    -dbmiddleware: buscar en la base de datos
    
    Finalmente express manda la res

    -Estan en el medio entre el pedido y el momento de enviar la respuesta.
    (puedo reutilizar codigo con los middlewares en distintas rutas)
    -en el medio entre la ruta y el controlador
    -Los middlewares pueden cortar la ejecucion y dar la respuesta: por ej cuando no esta autentificado
    
*/