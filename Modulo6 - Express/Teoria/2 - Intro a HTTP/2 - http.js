/*
    (Hyper Text Transfer Protocol)
    Protocolo de Transferencia de HiperTexto
    Es un protocolo que sirve para gestionar la comunicación entre dos máquinas conectadas a una red. 
    En donde una pide por un contenido específico y la otra se encarga de responder a dicha solicitud.

    Dentro de dicho protocolo hay un conjunto de subreglas definidas que se encargan de saber cómo responder ante distintas peticiones. 
    No es lo mismo solicitar la página de acceso de tu home banking, que acceder directamente a tu cuenta bancaria. 
    Ya que, si bien en los dos casos estás haciendo peticiones al servidor, 
    en el segundo, se hace necesario implementar mecanismos de autenticación que permitan identificar que no se trate de otra persona queriendo acceder a tu cuenta.

    URI
    Es el bloque de texto que se escribe en la barra de un navegador y puede ser identificada de dos maneras URL Y URN
    URL: indica donde se encuentra el recurso que deseamos obtener comenzando por el protocolo (http://)
    URN: es el nombre exacto del recurso wwww.dominio.com/preguntas-frecuentes

    Metodos de peticion:
    http define un conjunto de metodos de peticion, estos se usan para indicar la accion que se desea realizar con un recurso determinado
    GET: solicita datos de un recurso especifico (enlaces) (tambien puede enviar datos pero no es tan seguro como POST)
    se envia la info por la url
    POST: envia datos a un servidor (forms)
    se envia por la solicitud del http, se conecta directo con el servidor
    PUT: modifica algun dato que ya esta en el servidor
    se envia por la solicitud del http, se conecta directo con el servidor
    PATCH: modifica algun dato parcialmente en el servidor
    DELETE: borra algun recurso presente en el servidor (por ej. cuando borramos un posteo en facebook)

*/