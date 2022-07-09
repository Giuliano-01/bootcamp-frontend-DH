/*
    Por qué nació Node.js? ¿Para qué sirve? 
Respuesta: 
Nodejs surge como respuesta a una problemática con la programación secuencial tradicional. En lenguajes como Java, C++ o C#, que se basan en hilos de ejecución, hay un máximo teórico que viene dado por la memoria que consume cada hilo de ejecución en la máquina en la que se despliega.
Nodejs en cambio es single thread(o de un solo hilo), este hilo de ejecución única se denomina EventLoop y su función es ejecutar código Javascript el cual es por naturaleza asíncrono.
Node.js fue creado por los desarrolladores originales de JavaScript. Lo transformaron de algo que solo podía ejecutarse en el navegador en algo que se podría ejecutar en los ordenadores como si de aplicaciones independientes se tratara. Gracias a Node.js se puede ir un paso más allá en la programación con JavaScript no solo creando sitios web interactivos, sino teniendo la capacidad de hacer cosas que otros lenguajes de secuencia de comandos como Python pueden crear.
Node.js utiliza un modelo de entrada y salida sin bloqueo controlado por eventos que lo hace ligero y eficiente (con entrada nos referimos a solicitudes y con salida a respuestas). Puede referirse a cualquier operación, desde leer o escribir archivos de cualquier tipo hasta hacer una solicitud HTTP.
Donde Node.js realmente brilla es en la creación de aplicaciones de red rápidas, ya que es capaz de manejar una gran cantidad de conexiones simultáneas con un alto nivel de rendimiento, lo que equivale a una alta escalabilidad.
Enlaces para leer: 
1. https://openwebinars.net/blog/que-es-nodejs/ 
2. https://medium.com/sue%C3%B1os-graficos/una-breve-historia-de-nodejs-931fc0e9cc6b 
¿Qué es un módulo en el ambiente de Node.js? 
Respuesta: 
En los últimos años se ha comenzado a pensar en proporcionar mecanismos para dividir programas JavaScript en módulos separados que se puedan importar cuando sea necesario. Node.js ha tenido esta capacidad durante mucho tiempo, y hay una serie de bibliotecas y marcos de JavaScript que permiten el uso de módulos.
En Node.js, un módulo es un conjunto de funciones y objetos de JavaScript que las aplicaciones externas pueden usar.
Enlaces para leer: 
2.https://www.digitalocean.com/community/tutorials/how-to-create-a-node-js-module-es 
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules 

Dentro del entorno client/server, ¿qué diferencia a un cliente de un servidor? 
Respuesta: 
La arquitectura cliente-servidor es un modelo de diseño de software en el que las tareas se reparten entre los proveedores de recursos o servicios, llamados servidores, y los demandantes, llamados clientes. Un cliente realiza peticiones a otro programa, el servidor, quien le da respuesta

En el caso de las aplicaciones consideradas dentro del grupo de Clientes, las funcionalidades están basadas en la utilización de un Servicio que es provisto justamente por las del otro grupo, teniendo en este conjunto todo el Software que si bien hace uso de las partes físicas del equipo (Componentes de Hardware) no tiene la capacidad de generar procesos por sí mismo.
En el caso opuesto encontramos el de los Servidores, siendo en este caso una plataforma en el cual se brindan los distintos Servicios que están en un funcionamiento constante esperando por la solicitud del Cliente para poder funcionar en conjunto, enviando la información solicitada y la respuesta a cada requerimento de acción, cohesionando inclusive distintos Servicios al mismo tiempo, y pudiendo actuar con varios Clientes a la vez.




Enlaces para leer: 
3. https://es.wikipedia.org/wiki/Cliente-servidor 
https://sistemas.com/cliente-servidor.php

3

*/