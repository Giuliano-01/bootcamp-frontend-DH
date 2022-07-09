/*

    *¿cómo encaja dentro del esquema MVC?:

        -React viene a ser la V dentro de este patrón de diseño
        -Todo lo que hagamos con React está pensado para ser las vistas de nuestra aplicación. (Views)

        -Hasta ahora, todo lo habíamos construido directamente dentro de Express 
        y desde allí respondíamos a las peticiones hechas por el cliente con las vistas, 
        pero antes de que la vista viajara al navegador necesitábamos dejar todo listo (datos, variables y demás).

        -Ahora, con la potencia que nos dan las APIs, vamos a poder construir todo el front-end con React 
        y consumir los datos del back-end a través de peticiones asincrónicas. 
        -De esa manera podremos separar radicalmente la lógica del back-end de la lógica del front-end.

*/