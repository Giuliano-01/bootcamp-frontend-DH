/*
import { render, screen } from '@testing-library/react';

const button = ()=> <button>Botón</button>

test('Se renderiza el botón', () => {

    //nos crea un dom virtual con los elementos que se renderizan
    render(
        <>
            <Button/>
            <Button/>
        </>
    );
    
    //hace un consol.log() de lo que tengo renderizado (virtualizado)
    screen.debug()
    
    // screen nos da metodos que son selectores para acceder a los elementosde la virtualizacion
    
    //el elemento que esta dentro de una etiqueta como section, 
    //ya estaria cumpliendo un rol
    // y se puede acceder por 
    
    screen.getByRole('button');
        //no pasa
        
    screen.getAllByRole('button');
        //pasa a pesar que hayan otros elementos ademas de los dos bottones
        console.log(screen.getAllByRole('button'));
        //veo una lista de los elementos que encuentra
        //si no encuentra nada me devuelve error

    screen.queryByRole('button');
        //devuelve null si no hay elementos con ese rol

    si es un h1 h2 h3 h4 h5 h6
        screen.getByRole('heading');
    le puedo pasar opciones
        screen.getByRole('heading', {level: 1});
        busca un heading h1

        textbox
        listitem
        button
        link
        checkbox
        radiobutton
        combobox
        slider
        spinbutton
        textarea
        menuitem
        menubar
        menuseparator
        toolbar
        status
    
        getByLabelText('Nombre:')
        //tengo que tener un input asociado a ese label

        getByText('Nombre:')
        //busca un elemento que tenga ese texto
        //si hay mas de uno, me devuelve el primero
        //si no encuentra nada me devuelve error
        //si hay mas de uno deja de pasar el test

        const screen = screen.getByDisplayValue('/juan/i')
        //busca un elemento que tenga ese valor
        //puedo capturar lo que escriba el usuario

        screen.getByAltText('alt text')
        //busca imagenes con ese alt text

        <button test-id='data-testid'>
        screen.getByTestId('test-id')
    

    const { getByText } = render(<button>Botón</button>);
    const linkElement = getByText(/Botón/i);
    expect(linkElement).toBeInTheDocument();




    test('Se renderiza el botón y aparece el texto', () => {
        render(<App/>);
        screen.debug();
        const button = screen.getByRole('button');
        fireEvent.click(button);
        const result = 'aparece un string';
        screen.debug(); //veo que aparece el texto
        expect(screen.getByText(result)).toBeInTheDocument();
    });

    test('Se renderiza el botón y aparece el texto', () => {
        const result = 'aparece un string';
        const button = screen.getByRole('button');
        
        const p1 = screen.getByText(result);
        expect(p1).not.toBeInTheDocument();

        fireEvent.click(button);

        const p2 = screen.getByText(result);
        expect(p2).toBeInTheDocument();
    });


    mañana a la mañana charla tips
    
    mañana a la tarde practica de testing
    viernes a la mañana SPRINT TESTING

    martes a la mañana demo del sprint
    martes a la tarde demo de santander
    
    const cors = require('cors')
    app.use(cors())
    npm i cors

    npm update react
    npm install react@latest


    
npx para ejecutar un packete que no tenemos instalado
npx coverage
en la carpeta coverage aparece un index para ver la covertura de los tests


*/