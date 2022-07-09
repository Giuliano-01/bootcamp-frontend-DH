/*

node fetch para traer datos de api

const urlBase = 'https://rickandmortyapi.com/api

fetch(`${urlBase}/characters`)
    .then(response=>response.json())
    .then(data=> 
        //dentro porque por fuera no tengo acceso a la variable data
        res.json({
            data:data.result;
        })    
    );

*/