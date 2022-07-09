/*

    *¿A que llamamos ecosistema?:

        Al conjunto de herramientas adicionales, aplicaciones y librerías que permite a React trabajar como un framework
        
        Webpack y Babbel hacen que:
            -En un ecosistema convivan diferentes codigos y lenguajes para usar jsx (html css y js en el mismo archivo)


        1 - Un empaquetador de archivos: Webpack

            -Permite escribir código modular y empaquetarlo para optimizar el tiempo de carga. 
            Se puede considerar como un task runner muy especializado en
            el procesamiento de unos archivos de entrada para convertirlos en otros archivos de salida, 
            para lo cual utiliza unos componentes que se denominan loaders.

            empaqueta el js de distintos lados o de los componentes para cargarlo en un solo archivo js

            https://webpack.js.org

        2 - Un traductor de archivos: Babel 
            
            -Es un compilador. 
            -Permite escribir JavaScript moderno (ES6) y que aún así funcione en navegadores más antiguos.
            lee el return del jsx
            babel te convierte el codigo async await por ej en callbacks para que lea cualquier navegador

            https://babeljs.io
        
        
        webpack usa babel para compilar

        npm compila en la memoria de la pc (webpack compiled succesfully)
        npm run buil compila la version simplificada uniendo todo

*/