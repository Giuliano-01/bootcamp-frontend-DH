/*

    Fetch: 
    Es una función nativa que nos permite hacer pedidos a una API desde nuestro front-end.

    fetch():
    -Recibe como primer parámetro la URL del endpoint al cual estamos haciendo el llamado asincrónico. 
    (Al no saber cuándo se completa la petición, el servidor devuelve una promesa.)
    -Ej:  JS fetch("https://restcountries.eu/rest/v2/")

    Resolvemos la promesa:
    -El primer then será el encargado de recibir un callback y retornará la respuesta de ese llamado asincrónico en formato JSON
    -Ej:    then(function(response){
                return response.json();
            })
    
    Obtenemos los datos:
    -Una vez que la respuesta de nuestro pedido está en formato JSON, a través de otra promesa, podemos hacer con nuestra respuesta lo que queramos. 
    -Ej:    .then(function(data){
                console.log(data)
            })

    Atrapamos los errores:
    -En el caso de haber algún error, el catch() se encargará de atraparlo y luego lo imprimirá por consola
    -Ej:    .catch(function(error){
                console.error(error)
            })
    
*/