/*

    *Los componentes children:
    
        -Son todos aquellos elementos que son pasados entre las etiquetas de un componente padre.
    
    *Configuración:

        -Dentro del objeto literal props, existe la propiedad children. 
        -Haciendo uso de esta propiedad, podremos traer a todos los hijos que definamos dentro del componente padre

        function Saludo(props) {

            return(

                <div>
                    <h1>{ props.titulo }</h1>
                    <p>{ props.mensaje }</p>
                    { props.children }
                    { props.children[0] } //aca accedo al h1 por ej
                </div>

            );
        }

        -> De esta forma le estamos aclarando al componente dónde debería imprimir a los componentes hijos, en caso de recibir alguno.

    *Implementación:

        -Cuando llamamos al componente que creamos, tendremos que utilizar etiquetas de apertura y cierre para definir dentro el contenido que haga falta.

        <main>

            <Saludo>
                // aquí definimos el contenido A
                <h1> hola <h1>
                <p>hola <p>
            </Saludo>

            <Saludo>
                // aquí definimos el contenido B
            </Saludo>

        </main>

    *¿Cuándo usamos un Children?:
    
        -Cuando no sabemos exactamente qué contenido puede llegar a haber dentro de un contenedor padre. De esta manera, estamos configurando un componente flexible y reutilizable.
 
    
*/