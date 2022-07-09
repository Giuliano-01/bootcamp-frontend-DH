/*

    *PARA EVITAR PROPAGACION (Bubbling):*
    
        card.addEvent(click, (e)=z{
            if(e.classList.contains('titulo')){
                console.log(click en tituki)
            }
            if(e.classList.contains('card')){
            
            }
        })

        o

        div.addEvent(click, (e)=z{
            e.stopPropagation();
        })

    ---

    *AL PRESIONAR:*

        keydown 
        Cuando se presiona una tecla.

        keyup 
        Cuando se suelta una tecla.

        click
        Cuando se presiona el botón de un dispositivo de entrada (Mouse o Mousepad) sobre un elemento.

            -props:

                target
                The event target (the topmost target in the DOM tree).

                currentTarget 
                The node that had the event listener attached.

                detail 
                A count of consecutive clicks that happened in a short amount of time, incremented by one.

                screenX	
                The X coordinate of the mouse pointer in global (screen) coordinates.
                screenY	
                The Y coordinate of the mouse pointer in global (screen) coordinates.

                clientX	
                The X coordinate of the mouse pointer in local (DOM content) coordinates.
                clientY	
                The Y coordinate of the mouse pointer in local (DOM content) coordinates.

                button 
                The button number that was pressed when the mouse event was fired: 
                Left button=0, middle button=1 (if present), right button=2. 

                mozPressure 
                The amount of pressure applied to a touch or tabdevice when generating the event; 
                this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).

                ctrlKey 
                true if the control key was down when the event was fired. false otherwise.
                shiftKey 
                true if the shift key was down when the event was fired. false otherwise.
                altKey 
                true if the alt key was down when the event was fired. false otherwise.

        dblclick 
        Luego de dos eventos de click 
        (and by extension, after two pairs of mousedown and mouseup events).
        
        wheel
        Se activa cuando el usuario gira un botón de rueda en un dispositivo señalador (generalmente un mouse). 
        También disponible a través de la propiedad onwheel.
        
        scroll
        Se activa cuando se ha desplazado la vista del documento o un elemento.
        También disponible a través de la propiedad onscroll.

        mousedown 
        Se activa cuando el botón de un dispositivo apuntador (usualmente el botón de un ratón) es presionado en un elemento.

    ---

    *DE POSICION:*

        mouseenter
        Cuando se apunta dentron del elemento del evento (estando antes fuera)

        mouseleave
        Cuando se apunta fuera del elemento del evento (estando antes dentro)

        mousemove 
        Cuando se mueve el cursor mientras se esta dentro del evento del evento

        mouseout 
        Cuando se apunta fuera del elemento del evento (estando antes dentro), incluye salir hacia elementos hijos

        mouseover
        Cuando se apunta dentro del elemento del evento (estando antes fuera), incluye entrar a elementos hijos

        mouseup
        Cuando el boton del puntero se suelta estando el cursor dentro del elemento del evento

    ---

    *DE SELECCION:*

        select 
        when some text has been selected.

        selectionchange
        Se activa cuando se cambia la selección de texto actual en un documento. 
        También disponible a través de la propiedad onselectionchange.

        selectstart
        Se activa cuando el usuario comienza una nueva selección. 
        También disponible a través de la propiedad onselectstart.

    ---

    *TACTIL:*

        touchcancel
        when one or more touch points have been disrupted in an implementation-specific manner (for example, too many touch points are created).

        touchend 
        when one or more touch points are removed from the touch surface.

        touchmove
        when one or more touch points are moved along the touch surface.

        touchstart
        when one or more touch points are placed on the touch surface.

    ---

    *DRAG AND DROP:*
        drag
        every few hundred milliseconds as an element or text selection is being dragged by the user.
        
        dragend
        when a drag operation is being ended (by releasing a mouse button or hitting the escape key).
        
        dragenter
        when a dragged element or text selection enters a valid drop target.
        
        dragleave
        when a dragged element or text selection leaves a valid drop target.
        
        dragover 
        cuando un elemento o texto se arrastra a un objetivo válido (cada pocos cientos de milisegundos).
        
        dragstart
        when the user starts dragging an element or text selection
        
        drop
        when an element or text selection is dropped on a valid drop target.

    ---
        
    

*/