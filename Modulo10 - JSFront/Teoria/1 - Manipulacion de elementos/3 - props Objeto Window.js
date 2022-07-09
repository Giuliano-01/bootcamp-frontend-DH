/*
    window.onload = function(){
        //cuando cargue el archivo html puedo usar este codigo
        //esto es cuando importo el archivo en el head y no al final del html
    }
    o
    window.addEventListener('load', function...);
    //este permite ejecutarse en simultaneo si creo otro eventListener, encambio el anterior no, sucese el ultimo onload

    ---

    EventTarget.addEventListener('event',callback)
    Registra un controlador de eventos a un tipo de evento especifico en la ventana.

    ---
    
    Window.localStorage
    Retorna una referencia al objeto almacenamiento local usado para almacenar datos que pueden ser de accedidos por el origen que los creo.

    Window.sessionStorage 
    Returns a reference to the session storage object used to store data that may only be accessed by the origin that created it.

    ---

    Window.screen (en-US) 
    (Read only)
    Devuelve las propiedades de la pantalla (tamaño, orientacion, color depth)

        Window.innerHeight
        (Read only)
        Obtiene la altura del area de contenido del navegador 
        (incluyendo, si es interpretado, la barra de deslizado)

        window.innerWidth
        (Read only)
        Obtiene el ancho del area de contenido del navegador
        (incluyendo, si es interpretado, la barra de deslizado)


    Window.location
    window.location = 'https://lskafl' para rederigir 
    (Read only)
    Objeto con propiedasdes del html

        Window.location.href
        Ruta del archivo .html

    ---

    Window.scrollX 
    (Read only)
    Devuelve el numero de pixeles que se scrolleo del documento horizontalmente
    
    Window.scrollY 
    (Read only)
    Devuelve el numero de pixeles que se scrolleo del documento verticalmente

    Window.scroll(x,y)
    Hace scroll del window a un lugar en particular del documento.

    Window.scrollBy(x,y)
    Hace scroll del documento desde donde esta tantos pixeles como se indica

    Window.scrollByLines() 
    Hace scroll del documento tantas lineas como se indica.

    Window.scrollByPages()
    Hace scroll del documento tantas paginas como se indica.

    Window.scrollTo()
    Hace scroll del documento a una coordenada que se indica.

    ---

    Window.alert()
    Muestra una pequeña ventana de alerta.

    Window.confirm()
    Muestra una ventana de comfirmación con dos únicas y posibles respuestas. Confirmar y Cancelar.

    Window.dump()
    Escribe un mensaje a la consola.
    
    Window.print()
    Abre para imprimir la pantalla

    Window.prompt()
    Retorna el texto enviado por el usuario en el prompt (alert).

    Window.close()
    Cierra la ventana actual.

    Window.open(url)
    Abre una nueva ventana.
    
    ---

    WindowTimers.setInterval()
    Schedules the execution of a function each X milliseconds.

    WindowTimers.clearInterval()
    Cancels the repeated execution set using WindowTimers.setInterval().

    WindowTimers.setTimeout()
    Sets a delay for executing a function.

    WindowTimers.clearTimeout()
    Cancels the repeated execution set using WindowTimers.setTimeout().

    ---

    Window.find("string",cammelCase, etc..) 
    Busca un string dado en una ventana.

    Window.matchMedia()
    Returns a MediaQueryList object representing the specified media query string.

    ---

*/