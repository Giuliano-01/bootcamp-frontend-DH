/*

    MVC: 
    -Patrón de diseño 
    -Independencia entre componentes.
    -Hace referencia a las siglas: Modelo, Vista y Controlador. 

        *Vista: 
        (No se comunican directamente con los modelos.)
        -Interfaz gráfica de la aplicación
        -Contiene todos los elementos que son visibles al usuario. 
        -A través de ella, el usuario interactúa enviando y solicitando información al servidor.
        -Define la apariencia de los datos y los muestra en pantalla.

        *Controlador: 
        (Intermediario entre vistas y modelos.)
        -Procesa los datos que recibe de los modelos y elige la vista correspondiente en función de aquellos datos. 

        *Modelo: 
        (Conforma y contiene la lógica de la aplicación.) 
        (No se comunican directamente con las vistas)
        -Se conecta con la base de datos, realizar consultas y administra lo que se conoce como la lógica de negocio. 


    Vista (interfaz y realiza peticiones) <=> Controlador (intermediario) <=> Modelo (procesa y busca la informacion) 

*/