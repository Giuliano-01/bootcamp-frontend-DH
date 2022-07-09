//dependencias
const fetch = require('node-fetch');
const urlBase = 'https://rickandmortyapi.com/api';


module.exports = {
    
    root: function(req,res){
        
        fetch(`${urlBase}/character`)
            .then(response=> response.json())
            .then(data=> {
                res.render('home',{
                    data:data.results
                });
            })
            .catch(err=>console.log(err))
    },

    getCharByID: async (req, res) => {

        const {id} = req.query;

        try {
            const response = await fetch(`${urlBase}/character/${id}`);
            const character = await response.json();

            res.render('characterID',{character});

        } catch (error) {
            console.log(error);
        }

    },

    getCharByName: async (req, res) => {

        const {name} = req.query;

        fetch(`${urlBase}/character/?name=${name}`)
            .then(response=>response.json())
            .then(data=> {
                res.render('characterName',{
                    data:data.results
                });
            })

    },

}