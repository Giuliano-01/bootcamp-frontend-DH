/*

    En esta clase vamos a aprender la manera en la que podemos generar las vistas de nuestro proyecto de Express (views-html).

    Puntualmente estaremos trabajando con un motor de plantillas llamado EJS (Embedded JavaScript). 
    No hay que alarmarse, el nombre puede parecer extraño, pero es básicamente lo mismo que HTML… solo que un HTML con mucho poder.


    *Qué es un motor de plantillas? y ¿qué es una plantilla?:*

    Una plantilla es un archivo que posee una estructura HTML predefinida, 
    el cual nos ayuda a generar varios archivos más a partir de este mismo.

    Por otro lado, un motor de plantillas es aquel que nos permite generar una plantilla en sí, 
    para que nuestra aplicación pueda usarla.

    Y nos permite generar archivos dinámicos que contengan información proveniente de los controladores.
    Gracias a esta particularidad, y con tan solo un par de archivos, vamos a poder mostrar toda aquella información almacenada en nuestra base de datos.


    *Instalacion e implementacion:*

    1 - A través de la terminal usando el gestor de dependencias NPM. (npm i ejs)
    
    2 - Cuando EJS termine de instalarse, debemos aclararle a Express cuál es el
    motor de plantillas que vamos a estar utilizando para que lo use.
    Es decir, en nuestro punto de entrada, que normalmente será el app.js,
    debemos especificar el método set() con la propiedad 'view engine' y el
    nombre del motor, en este caso EJS.
    (app.set('view engine', 'ejs');)

    3 - En vez de utilizar .html debemos crearlos con la extensión .ejs, para que Express pueda procesarlos.
    Todas las vistas que creemos en nuestro proyecto deberán almacenarse en una carpeta específica.
    Express va a ir a buscar esas vistas a una carpeta llamada views.

    3b - En caso de que necesitemos cambiar el nombre o la ubicación de la carpeta,
    nuevamente utilizaremos el método .set().
    En este caso, debemos pasarle el string 'view' y la ruta relativa hacia la nueva
    carpeta.
    (app.set('views', './carpeta-de-vistas');)


    *Metodo SET: *

    El método .set() permite definir configuraciones de Express. 
    Este se ejecuta sobre la variable que tenga asociada la ejecución de Express, en la mayoría de los casos llamada app.
    Recibe dos strings como parámetros:
    ● El primero será lo que queremos configurar.
    ● El segundo será el valor de la configuración.



    *MVC: Modelos Vistas Controller*

    Para poder renderizar una vista tenes que informarle al controller (controlador) cual es la vista que queres ver en el navegador.
    
    Para renderizar se utiliza el metodo render del response (solo recibe como parametro el string nombre del archivo de la vista que queremos renderizar)







    *TAGS:*

    Permite usar logica javascript en archivos HTML
    <% %>: permite implementar cualquier control de flujo como if - for - otra sentencia de javascript
    algo asi:

    <% if(4 < 5) { %>
        <h2>El 4 es menor que el 5</h2>
    <% } %>

    <%= %>: nos permite imprimir un valor dinámico y de esta manera incorporarlo en la estructura HTML.
    algo asi:
    
    <% if(nombre) { %>
        <h2>¡Hola <%= nombre %></h2> nombre se imprime con distintos valores porque es una variable
    <% } %>


    *Enviar datos a las vistas:*

    const nombrePelicula = 'Batman';
    
    const controller = {
        
        mostrarPelicula: (req, res) => {
            res.render('peliculas', { pelicula: nombrePelicula })
        }

    }


    ARCHIVOS PARCIALES:

    el archivo head se vera por la mitad (dentro de view/partials)
    y el archivo index por la otra mitad (dentro de view)
    y en el index incluyo la vista parcial del head
    con: <%- include('./partials/head') %>
    


*/