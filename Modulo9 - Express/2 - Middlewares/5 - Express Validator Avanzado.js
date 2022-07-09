/*

    Las validaciones en el controlador:

        const { validationResult } = require('express-validator' );

        (dentro del método del controlador)
        let errors = validationResult(req);

        register: (req, res) => {

            let errors = validationResult(req);

            if (errors.isEmpty()) {  // No hay errores, seguimos adelante
                        
            
            else {                  // Si hay errores, volvemos al formulario con los mensajes
            
            }
        };


    El método mapped():

    -Nos permite enviar los errores a la vista como un objeto. 
    -Es importante enviar también los contenidos de req.body, ya que queremos preservar los datos completados por el usuario al volver al formulario.
    
        if (errors.isEmpty()) {   // No hay errores, seguimos adelante
            
        } else {                  // Hay errores, volvemos al formulario con los mensajes
            
            res.render('register', { errors: errors.mapped(), old: req.body });

        }


    El objeto de errores:
    
        {
            email: {
                msg: 'Debes completar un email válido',         //mensaje
                param: 'email',                                 //nombre del campo
                value: 'unEmail',                               //el valor ingresado por el usuario
                location: 'body'                                //de donde vino (body para formularios)
            },
            password: {
                msg: 'La contraseña debe ser más larga',
                param: 'password',
                value: '1234',
                location: 'body'
            }
        }

    
    Mostrando los errores en la vista:

    Es importante tener en cuenta que la primera vez que se cargue el formulario no habrá errores, y por lo tanto esa variable estará vacía. 
    Para evitar problemas, siempre debemos preguntar si la variable de errores existe antes de intentar mostrar un error.

        <label for="email">Correo electrónico:</label>
        <input type="email" name="email" id="email">
        
        <% if (locals.errors && errors.name) { %>

            <p class="feedback"><%= errors.name %></p>

        <% } %>

    
    Agregando los datos anteriores al formulario:

    -no vamos a querer que complete todo nuevamente
    -Nuevamente con EJS podemos cargar ese valor en cada campo que corresponda.

        <label for="email">Correo electrónico:</label>
        <input type="email" name="email" id="email"
            value="<%= locals.old && old.email %>">

*/