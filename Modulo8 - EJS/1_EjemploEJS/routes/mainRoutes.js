const express = require('express');
const router = express.Router();


/*para procesar las peticiones*/
const mainController = require('../controllers/mainController');

/*como segundo parametro del get uso la funcion req/res*/
/*que corresponde con el atributo que corresponda del controller*/
router.get('/', mainController.index);
router.post('/', mainController.indexPOST); /*post*/
router.get('/perfil', mainController.perfil);
router.get('/registro', mainController.register);
router.get('/login', mainController.login);


module.exports = router;