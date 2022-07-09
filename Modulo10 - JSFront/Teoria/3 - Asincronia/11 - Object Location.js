/*

    Document.location
    Devuelve la URI del documento actual.

        Si usamos el atributo href, nos devuelve toda la URL.
        console.log(location.href);

        Si queremos recargar la página, podríamos usar el método reload
        location.reload();

    Cuando realizamos una petición por GET en una búsqueda, location nos provee un atributo llamado search para obtener el query string entero.
    Para utilizar esos datos debemos utilizar la interfaz de URLSearchParams.

    let query = new URLSearchParams(location.search);
    if(query.has('search_query')){
        let search = query.get('search_query');
        console.log(search)
    };


*/