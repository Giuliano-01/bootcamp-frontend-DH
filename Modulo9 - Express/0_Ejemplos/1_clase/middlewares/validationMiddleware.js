const {body} = require('express-validator');

module.exports = [
    body('name').notEmpty().withMessage("el nombre es requerido"),
    body('dni').notEmpty().withMessage("el dni es requerido"),
    body('pass').notEmpty().withMessage("el pass es requerido")
];