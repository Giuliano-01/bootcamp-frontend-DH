import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../Link';

test('El enlace cambia la clase cuando se pasa por encima', () => {
    
    const component = renderer.create(
        <Link page="http://www.digitalhouse.com">Digital House</Link>,
    );
    
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // activar manualmente el callback
    tree.props.onMouseEnter();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
        
    // activar manualmente el callback
    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    
});