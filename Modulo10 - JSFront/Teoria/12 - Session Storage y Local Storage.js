/*


    MOTIVACION:

    Para poner un ejemplo, pensemos por un momento en un sistema de e-commerce, 
    más exactamente en su carrito de compras. 
    
    Seguramente, muchas veces hemos agregado productos a un carrito y repentinamente salimos de la página, 
    para simplemente volver instantes después y darnos cuenta que las cosas que agregamos al carrito siguen ahí, intactas. 
    Eso es posible gracias al almacenamiento local del navegador. 
    
    Esta funcionalidad mejora la experiencia de usuario, sin tener que saturar el servidor de peticiones que nos sabemos si se van a concretar del lado del cliente.

    ---
    
    Session storage
    Nos permitirá guardar información en sesión. 
    Es decir que si usamos esta opción y cerramos el navegador, la información aquí almacenada se perderá.

    (Solo podemos almacenar datos en formato STRING.)

    sessionStorage.setItem('key', 'value');
    sessionStorage.getItem('key')
    sessionStorage.removeItem('key');

    ---

    Local storage
    Los datos almacenados en localStorage no tienen fecha de expiración

    (Solo podemos almacenar datos en formato STRING.)
    
    localStorage.setItem('key', 'value');
    localStorage.getItem('key')
    localStorage.removeItem('key');

*/