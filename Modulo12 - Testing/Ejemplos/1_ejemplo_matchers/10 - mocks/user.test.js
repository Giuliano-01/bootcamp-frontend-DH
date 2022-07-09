const {saveUsername, getUsername} = require('./user');
const storage = require('./storage');

jest.mock('./storage'); 
//el storage que use en los test va a ser este y no el que cree
//ese mock tiene los metodos que tiene el storage

test('Save username', () => { 
   
    const username = 'juan';
    saveUsername(username); //no va a guardar los datos en el navegador porque es un storage falso
    //el matcher es para hacer aserciones sobre mock
    //el mock fue llamado 1 vez
    expect(storage.save).toHaveBeenCalledTimes(1);
    expect(storage.save.mock.calls.length).toBe(1);
    
    //el mock fue llamado con el parametro que le paso
    expect(storage.save).toHaveBeenCalledWith({key: 'username', value: username});
    expect(storage.save.mock.calls[0][0]).toEqual({key: 'username', value: username});
    //la x vez que llame al mock [] - el x argumento que le pasamos al mock []

});

test('get username', () => { 
    
    const username = 'juan';

    //le indicamos al mock de get que la primera vez que lo ejecuten devuelva ese username
    storage.get.mockReturnValueOnce(username);
    //y ahora si le asignamos a username la ejecucion
    const result = getUsername();
    
    //el mock fue llamado 1 vez
    expect(storage.get).toHaveBeenCalledTimes(1);
    expect(storage.get.mock.calls.length).toBe(1);
    
    expect(result).toMatch(username);
    expect(storage.get.mock.calls[0][0]).toEqual({key: 'username'});

});


//si me pongo a ver como se comunican user con storage seria un test de integracion
//por eso uso el mok para que sea un test unitario


//si no le asigno nada puedo decir que quiero que devuelva
//el mock cada vez que lo llame
const mymock = jest.fn()
.mockReturnValueOnce(true)
.mockReturnValueOnce('juan');

const mymock2 = jest().fn(x=>x+1);
//x es el parametro que le paso al mock
//y devuelve eso que le programe

