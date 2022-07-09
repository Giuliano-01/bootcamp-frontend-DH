/*
    

    Cuando creamos un servidor es necesario configurar lo que tradicionalmente conocemos como un sistema de ruteo o route system. 
    (Este nos permite definir la respuesta que vamos a dar, dependiendo de la ruta a la que la persona que visita nuestra página haya accedido.)

    El Response es la respuesta que obtiene el visitante del sitio una vez que el sistema de ruteo lo redirige según su petición. 
    Dicha respuesta puede ser de variado tipo, pues podría contener solo texto plano, 
    texto en formato HTML, entregar un documento tipo PDF, un fichero de imagen o cualquier formato que el navegador pueda interpretar.

    Para atender a las peticiones:

    app.METHOD(PATH,HANDLER);
    METHOD: metodo http al que queres atender, puede ser GET POST DELETE etc (se responde por get por ejemplo)
    PATH: nombre de la ruta, puede ser /productos, u otra /contactos
    HANDLER: callback, que sucede cuando se accede a la ruta elegida

    ejemplo: app.get("/contacto", function(req,res){res.send("seccion contacto")});


    CALLBACK:
    req: representa el pedido, sera un objeto literal con metodos y propiedades que tendra por ejemplo que dice la url
    res: tambien un objeto literal, donde construiremos lo que vera el usuario en el navegador
    cuerpo: en el cuerpo de la funcion definimos la logica que usara la ruta, lo mas comun es armar la respuesta que el cliente vera en su navegador
        res.send(): send recibe como parametro lo que queres enviar como respuesta (string array objeto literal..)
    
    FUNCIONAMIENTO:
    express cada vez que cambiamos la ruta busca en el codigo la consecuencia para hacer ante el pedido get de la pagina

*/