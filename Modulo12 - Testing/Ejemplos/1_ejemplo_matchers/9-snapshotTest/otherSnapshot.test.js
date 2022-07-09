import { render, screen, getByText } from '@testing-library/react';
import renderer from 'react-test-renderer';

//components
const Header = ()=>{
    return(
        <header>
            <h1>Soy un titulo</h1>
        </header>
    )
}

test('Snapshot with testing-library', () => { 
    
    //container va a contener lo que esta virtualizado
    const { container } = render(<Header/>)
    //toMatchSnapshot compara la foto que creo en memora con la que tengo guardada
    //Cuando se ejecuta snapshot crea una foto de lo que esta virtualizado
    expect(container).toMatchSnapshot();

    //se crea una foto en un archivo
    //si cambio el original da error porque esta distinto
    //En el compilador tengo que apretar una tecla para actualizar los snapshots
    //o hacer jest -u para actualizar el archivo con el snapshots

    //como lo traje directamente no tengo que usar screen
    const title = getByText(container, 'Soy un titulo');
    //ahora si trae el titulo que tenga dentro container
});

//traer un elemento dentro de otro elemento
// const header = screen.getByRole('heading');
// const title = getByText(header, 'Soy un titulo');

//otra opcion
test('Snapshot with react-test-renderer', () => { 

    const tree = renderer.create(<p>Hola</p>).toJSON();
    expect(tree).toMatchSnapshot();
    //se crea una foto en un archivo

});

