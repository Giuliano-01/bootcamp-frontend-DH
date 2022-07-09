/*

    -JavaScript es lo que se conoce como un lenguaje no bloqueante. 
    
    Esto hace referencia a que las tareas que realizamos no se quedan bloqueadas esperando ser finalizadas, 
    con lo cual se evitaría seguir con el flujo normal de ejecución de tareas.
    Imaginemos que <code>funcion_dos()</code> del ejemplo anterior realiza una tarea que depende de otro factor, como por ejemplo un click del usuario. 
    Si JavaScript fuera un lenguaje bloqueante, hasta que el usuario no haga ese click, JavaScript no seguiría ejecutando las demás funciones, 
    sino que se quedaría *bloqueado* esperando a que se terminase esa segunda tarea.
    Lo que hará es mover esa tarea a una lista de tareas pendientes a las que irá prestándole atención a medida que lo necesite, 
    pudiendo continuar y retomar el resto de tareas que le siguen a la segunda.


    -Javascript es un lenguaje "single threaded"

    Pila de tareas:
    Solo puede hacer una cosa a la vez para esto cuenta con la pila de tareas!
    
    Cola de tareas:
    Organiza los llamados a funciones por el orden de llegada.
    (por ejemplo podemos llevar a una funcion a la cola de tareas con el setTimeOut)

    Event loop:
    Se encarga de saber cuando la pila de tareas esta vacia 
    y en ese momento llamar a las funciones de la cola de tareas que tengan que ejecutarse (siempre cuando termine de ejecutarse todas las tareas)
    (por mas que el tiempo sea 0 entraran primero los que no esten en una cola)


    -Javascript es un lenguaje "asincronico"
    
    Si realizo un pedido a una base de datos por ej, continua con el resto del codigo mientras se traen los datos
    (esto porque el proceso no lo realiza js sino que la misma base de datos)
    (osea que agrega esa tarea a la cola de tareas hasta que termine de traer esos datos)

    
*/