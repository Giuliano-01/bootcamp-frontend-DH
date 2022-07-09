/*

    
    ¿Como hacer para que la pagina cambie sin hacer otro pedido al servidor?


    *Javascript va a permitir:

     -Tener interaciones de parte del frontend modificando el html que el usuario tiene sin necesidad de ir al servidor y volver.


    *Nos da dos objetos nativos:
    (los instancia con cada documento html que tengamos asociado el js)
    
        - Objeto window:

            -Representa al navegador.
            -Nos da una interfaz, (un conjunto de atributos y metodos) para operar con el navegador 
            (cuandto mide de alto, de ancho, o en que web estamos, que dice la barra de navegacion)

        - Objeto document:
            
            -Representa al documento html.
            -Nos va a dar una interfaz, (un conjunto de atributos y metodos) para poder leer lo que tenemos en el html y modificarlos

            -¿Como javascript representa al documento html?
                
                - con el DOM: Document Object Model
                (es como si tuviera una visualizacion alternativa de lo que tenemos en el html)
                
                    -Es un arbol con cada etiqueta del dom en orden gerarquica
                    -cada nodo es una etiqueta
                    -incluso los atributos y clases son nodos
                    -cada nodo es un objeto con su interfaz

*/