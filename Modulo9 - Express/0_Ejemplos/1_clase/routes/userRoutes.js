//dependencias
let express = require('express');
let router = express.Router();

//controller
const {root, registrado} = require('../controllers/userController');

//middleware
const validarUser = require('../middlewares/validationMiddleware');

//rutas
router.get("/", root);

router.post("/register", validarUser ,registrado);



module.exports = router;