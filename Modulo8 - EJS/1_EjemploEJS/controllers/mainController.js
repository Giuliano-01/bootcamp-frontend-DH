/*una variable para usar en index*/
const users = ["uno","dos"];


/* el objeto controller con cada atributo asociado a una funcion req/res */
const controller = {

    index: (req, res) => {
        /*puedo ver la respuesta de los pedidos en el terminal del servidor*/
        console.log(req)
        /*tomo la request del form del objeto query y hago destructuring*/
        const {nombre} = req.query;
        nombre && users.push(nombre);

        /*el segundo param son las variables que envie al index.ejs para usar alli*/
        return res.render('index', {users,});
    },
    indexPOST: (req, res) => {
        console.log(req.body); /*traigo la info del metodo post que viaja por el body*/
        /*la info que traigo desde el body tiene que estar parseada y codificada*/

        /* por eso el middleware json transforma la respuesta para poder verla */
        /*si la respuesta da estado 200 entonces hace lo del json*/
        res.status(200).json({
            usuario: req.body,
          });
          
        return res.render('index', {users,});
    },
    perfil: (req, res) => {
        const dato = ["nombre","dni","credito"];
        const {nombre, dni, credito} = req.query;

        return (nombre&&dni&&credito) ? res.render('perfil', {dato,nombre,dni,credito}) : res.send("No hay datos suficientes");
    },
    register: (req, res) => {
        return res.render('Registro');
    },
    login: (req, res) => {
        return res.send('Login');
    },

}


module.exports = controller;