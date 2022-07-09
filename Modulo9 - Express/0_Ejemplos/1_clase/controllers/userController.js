
const {validationResult} = require('express-validator');

const usersDb = require('../db/usersDb');

module.exports = {
    
    root: function(req,res){

        res.render('register', {errors:[],});
    },

    registrado: function(req,res){

        console.log(req.body);console.log(req.body.name);
        console.log(validationResult(req));

        const errors = validationResult(req); //errores del validation result del middleware

        if(errors.isEmpty()){

            usersDb.push(req.body);
            res.redirect('/home');
        }else{
            res.render('register', {errors:errors.array(),});
        }
    },

}