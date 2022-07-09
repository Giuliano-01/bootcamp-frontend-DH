/*

     Antes:
        document.querySelector("");

    Ahora:
        useRef()
    
    *Como se usa:

        -useRef() permite seleccionar elementos del DOM de manera fácil y sencilla, tal como hacíamos con el método querySelector() de JavaScript.

        import {useRef} from 'react';

        const elTitulo = useRef();
        -A la etiqueta html le agregamos el atributo ref con el nombre de la variable que declaramos previamente
        <h1 ref={elTitulo}> Titulo <h1>

        -Si hacemos console.log(elTitulo) obtengo:
        
        {current: h1} (objeto literal)
        
        -para acceder al h1 tenemos que hacer:
        
        elTitulo.current
        
        useRef(document.querySelector('body'))
        no es mucho problema pero si puedo pasarselo del app al hijo mejor
*/