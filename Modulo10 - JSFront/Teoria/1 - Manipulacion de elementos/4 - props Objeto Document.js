/*

    ---
    
    Document.readyStateRead only
    Devuelve el estado de carga del documento.

    Document.location
    Devuelve la URI del documento actual.

    Document.documentURI
    Devuelve la ubicación del documento como una cadena.
    
    Document.URLRead only
    Devuelve la ubicación del documento como una cadena.

    ---

    Document.body
    Devuelve el nodo <body> del documento actual.

    Document.head
    Devuelve el elemento <head> del documento actual.

    Document.title
    Establece u obtiene el título del documento actual.

    ---

    Document.images
    Devuelve un HTMLCollection de las imágenes del documento.

    Document.links
    Devuelve un HTMLCollection de los hipervínculos del documento.

    ---

    Document.cookie
    Devuelve una lista separada por punto y coma de las cookies para ese documento o establece una sola cookie.
    
    ---

    Document.getElementById()
    Devuelve una referencia de objeto al elemento identificado.

    Document.getElementsByClassName()
    Devuelve una lista de elementos con el nombre de clase dado.

    Document.getElementsByTagName()
    Devuelve una lista de elementos con el nombre de etiqueta dado.

    Document.getElementsByTagNameNS()
    Devuelve una lista de elementos con el nombre de etiqueta y el espacio de nombres dados.

    Document.querySelector()
    Devuelve el primer nodo Element dentro del documento, en el orden del documento, que coincide con los selectores especificados.

    Document.querySelectorAll()
    Devuelve una lista de todos los nodos Element dentro del documento que coinciden con los selectores especificados.

    ---

    Document.getSelection()
    Devuelve un objeto Selection que representa el rango de texto seleccionado por el usuario o la posición actual del signo de intercalación.





    Document.adoptNode()
    Adopta un nodo de un documento externo.

    Document.createEvent()
    Crea un objeto de evento.

    
    
    ubicacion = seccion3.getBoundingClientRect()
    obtengo los datos de cuantos pixeles faltan para llegar a esa seccion

        .top (estas a tanto de llegar al top del elemento)

        if(ubicacion < 411){
            console.log("la ubicacion esta visible")
        }else{
            console.log("aun no")
        }


        body.red {
                si el body tiene la clase red hace esto
            }

*/