/*

    *¿Qué trae express-generator?:
    Un esqueleto de carpetas, archivos y dependencias que nos puede servir para inicializar cualquier aplicación.

    -No trae la carpeta controllers, tendremos que crearla

        npm install express-generator -g

    -Usando el comando express seguido de un nombre, podremos crear un proyecto de Node.js y Express. 
    También, podemos configurar el motor de vistas* que queremos usar.

        express myApp --ejs
    (Si no indicamos un motor de vistas (--ejs), se instalará por defecto Jade.)

    -Por último, dentro de la carpeta del proyecto, tenemos que correr el comando para instalar todas las dependencias que vinieron configuradas en el package.json para que el proyecto funcione.
        npm install
    
    *Iniciar el servidor:

        nodemon bin/www 


    node install node-fetch@2
*/