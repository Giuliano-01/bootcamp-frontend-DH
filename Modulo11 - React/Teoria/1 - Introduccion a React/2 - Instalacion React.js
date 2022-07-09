/*

    *Instalacion: 

        -Al ser una librería de JavaScript: 
        React pertenece al conjunto de paquetes que gestiona npm. 
        Es decir, necesitamos npm install para instalar el ambiente de desarrollo.

        -Create React App configura nuestro ambiente de desarrollo:
        Habilitando las últimas características de JavaScript, brindando una buena experiencia de desarrollo, y optimizando nuestra app para producción
        (Para usar CRA, necesitarás tener Node >= 14.0.0 y npm >= 5.6 instalados en tu computadora.)


    *Crear proyecto React:

    1 - Lo primero que necesitamos hacer es ubicarnos en la carpeta en donde queremos que se guarde el proyecto.
    2 - Luego, desde la terminal ejecutamos el comando "npx create-react-app my-app" -> reemplazando my-app por el nombre de nuestra app.

    3 - "cd my-app" nos moveremos al directorio generado por React con la estructura de archivos de nuestra app.
    4 - "npm start" indicaremos a npm que debe iniciar nuestra app y ponerla a disposición en una URL local que gozará de la ventaja de edición en vivo.
    
    -Para que nuestra aplicación React se cree directamente en el directorio en el que estamos trabajando y no dentro de una nueva carpeta:
        "npx create-react-app ."
    -El nombre de la carpeta en donde ejecutemos el comando cumpla con las siguientes reglas:
        contiene sólo caracteres compatibles con una URL,
        no tiene letras mayúsculas.


    *npm vs npx, ¿cuál es la diferencia?:
        
        npx es una herramienta CLI que existe desde la versión 5.2.0 de npm 
        cuyo propósito principal es ejecutar paquetes npm. 
        
        Nos ayuda a evitar el versionado, los problemas de dependencia y la instalación de paquetes innecesarios que sólo queremos probar.

    *¿Por qué usamos Create React App con npx?:

        Dado que create-react-app es un paquete de Node.js que deseamos ejecutar sólo una vez por cada proyecto 
        no buscamos instalarlo permanentemente, sino que tiene sentido descargarlo y ejecutarlo al vuelo para luego continuar con lo que nos interesa. 
        Además de esta forma, nos aseguramos de utilizar la última versión disponible. ¡Sencillo, ágil y al día!

    

*/