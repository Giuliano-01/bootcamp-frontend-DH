/*

    *De tipo <input>, <select>, or <textarea>: *
    
    change 
    Si un elemento cambia su valor.

    input
    Al cambiar alguna propiedad de un elemento
    (Engloba tambien copy paste etc)(blur no ya que con blur no necesariamente cambia alguna propiedad para ejecutarse)

    focus
    Al hacer foco en un elemento
        traemos el evento con target

    focusin
    Al hacer foco en un elemento (se propaga y focus no)

    blur
    Salir del foco de un elemento (no importa si hubo cambios o no) 

    focusout
    Al salir del foco de un elemento (se propaga y blur no)

    invalid
    Cuando un elemento de tipo "submit" no paso su validación

    submit 
    Cuando un <form> fue enviado

        Validacion:

            if(todo ok){

            }else{
                prevent default para no redirigir en un form
            }

        form.reservation tambien para querySelector

    copy
    Se activa cuando el usuario inicia una acción de copiar a través de la interfaz de usuario del navegador.

    cut
    Se activa cuando el usuario inicia una acción de cortar a través de la interfaz de usuario del navegador.

    paste
    Se activa cuando el usuario inicia una acción de pegar a través de la interfaz de usuario del navegador.


    ---

    The HTMLElement.focus() method 
    sets focus on the specified element, if it can be focused. The focused element is the element which will receive keyboard and similar events by default.

    The HTMLElement.click() method 
    simulates a mouse click on an element.

    The HTMLElement.blur() method 
    removes keyboard focus from the current element.

    
*/