/*

    *.map():             // Map que devuelve un Array. ej let array_modificado = array.map( item => {modificacion del array}) devuelve todos los li y quedan ahi bien
    
        -Observemos cómo el array es pasado dentro del atributo con nombre items 
        y que adicionalmente va entre llaves. 
        -Son estas llaves las que nos permiten escribir tipos de datos de JavaScript que no sean simplemente
        cadenas de texto. 
        -Así es como se define el valor de una props a través de un Array.

        const usuarios = ["Maru","Uriel","Daniel"];
        < MiLista items = { usuarios } />

        -Dentro del componente, lo primero que tenemos que hacer es recibir las props como parámetro de la función. 
        -Luego, dentro de la estructura de JSX que hayamos definido, vamos a tener que iterar sobre el array recibido para poder imprimir los usuarios.

        function MiLista(props) {
            
            return (
             
                <div>
                    <ol>

                        { props.items.map( item => (<li> {item} </li>) ) }
                    
                    </ol>
                </div>
            );
        }
    

    *keyprops:

        -Por medio de las keys, determina si es el mismo elemento o no. 
        -Es la manera que se identifican nuestros componentes en el proyecto.
        
        -A la hora de usar keys, tengamos lo siguiente en cuenta:
        ● Solo es necesario agregar keys cuando devolvemos un array de elementos iguales.
        ● La key debe ser única entre elementos hermanos.
        ● Las keys no se muestran en el HTML final (si quisiéramos que se muestren, también deberíamos utilizar id).
        -¿Porque?
        Porque la misma ayuda a React a identificar qué items cambiaron, cuáles se agregaron o cuáles se  eliminaron.

        function MiLista(props) {

            return (

                <div>
                    <ol>
                        { 
                            props.items.map( (item, i) => <li key={i+item}> {item} </li> ) 
                        }
                    </ol>
                </div>
            );
        }



*/