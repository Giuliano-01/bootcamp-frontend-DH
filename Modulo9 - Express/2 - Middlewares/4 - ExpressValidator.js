/*

    Express Validator:
    Nos permite manejar de manera relativamente sencilla, todas las validaciones de nuestros formularios desde el lado del back-end.

    1. Instalar Express Validator.

        npm i express-validator 

    2. Crear un array con las validaciones de cada formulario.
        (recordar tener el atributo name de los inputs)
        Y requerir el metodo check de express-validator.

            const { check } = require('express-validator');     //permite agregar validaciones
            
            let validateRegister = []                           // validaciones aquí


        *El método check():
        
        -Como parámetro recibe el nombre del campo a validar.
            
            const validateRegister = [ check('name') ]
        
        -Suponiendo que quisiéramos validar que el campo no esté vacío, sobre el método anterior, ejecutamos el método notEmpty() de la siguiente manera:
            
            const validateRegister = [check('name').notEmpty()]

    3. Agregarlo como middleware de la ruta que procesa el formulario.
    
    4. Verificar si hubo errores en la validación desde el controlador.
    
    5. Enviar los errores a las vista


    *Tipos de validaciones:

        check('campo')
            .notEmpty()                     // Verifica que el campo no esté vacío
            .isLength({ min: 5, max: 10 })  // Verifica la longitud de los datos
            .isEmail()                      // Verifica que sea un email válido
            .isInt()                        // Verifica que sea un número entero

    -Podemos tener más de una validación para el mismo campo. 
    -La lista completa de validaciones puede verse aquí: https://github.com/validatorjs/validator.js#validators


    *Mensajes de error:
    
        check('name')
            .notEmpty().withMessage('Debes completar el nombre')
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')


    *Cortando la cadena de validación:
    
        check('name')
            .notEmpty().withMessage('Debes completar el nombre').bail()          //envia ese error antes de ejecutarse la siguiente validacion
            .isLength({ min: 5 }).withMessage('El nombre debe tener al menos 5 caracteres')

    El middleware se hubica entre la ruta y la accion del controlador
*/