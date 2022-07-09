/*

    Los eventos son manejados a través de métodos 
    -Que van a guardar la lógica que realizará una operación cuando el usuario interactúe con el componente.

    *El método:

        -Dentro de nuestro componente, definimos los métodos que establecen qué hacer cuando se llame al evento. 

    *El evento:

        -Para hacer uso de ellos hay que tener en cuenta que:
        ▸ Se escriben en la etiqueta, como si fuera un atributo.
        ▸ Se nombran usando la palabra on seguida del nombre del evento, usando siempre camelCase.
        ▸ Se usan las llaves y la palabra reservada this para asociarlo con el método que queremos.

        <h1 onClick={this.saludar}></h1>

    Obs: Si el evento modifica el estado del componente, el mismo debe ser un componente stateful


    doc: https://es.reactjs.org/docs/handling-events.html#___gatsby

*/