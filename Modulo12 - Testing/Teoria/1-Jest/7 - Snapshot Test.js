/*

    Haciendo un Snapshot Test:
    
        -Las pruebas de instantáneas (snapshot) 
        son útiles para asegurarnos de que la UI no cambia de forma inesperada.

        -Un caso típico de prueba de instantáneas:
            1-renderiza un componente de la UI, 
            2-toma una instantánea 
            3-la compara con un archivo de instantáneas de referencia 
            almacenado junto a la prueba. 
        -La prueba fallará si las dos instantáneas no coinciden: 
            1-o bien el cambio es inesperado, 
            2-o la instantánea de referencia necesita ser actualizada 
            a la nueva versión del componente de la UI.

    -Vamos a crear un snapshot test para un componente Link 
    que renderizará un hipervínculo.

        1-Creando el componente:
            Para ello, vamos a crear un archivo Link.js con el siguiente código.
            
                import React, {useState} from 'react';
 
                const STATUS = {
                    HOVERED: 'hovered',
                    NORMAL: 'normal',
                };
 
                const Link = ({page, children}) => {
                    const [status, setStatus] = useState(STATUS.NORMAL);
                
                    const onMouseEnter = () => {
                        setStatus(STATUS.HOVERED);
                    };
              
                    const onMouseLeave = () => {
                        setStatus(STATUS.NORMAL);
                    };
              
                    return (
                        <a
                          className={status}
                          href={page || '#'}
                          onMouseEnter={onMouseEnter}
                          onMouseLeave={onMouseLeave}
                        >
                            {children}
                        </a>
                    );
                };

                export default Link;
 


        2-Creando el archivo de test:
            Ahora vamos a crear un segundo archivo, de snapshot, llamado 📃Link.test.js, 
            y vamos a usar las características render y snapshot de React y Jest 
            para interactuar con los componentes y capturar lo que generan:

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

        3-Generando la instantánea:
            Ahora, debemos generar la instantánea con npm test, 
            con lo que obtendremos un archivo como el siguiente:

            exports[`Link changes the class when hovered 1`] = `
                <a
                  className="normal"
                  href="http://www.digitalhouse.com"
                  onMouseEnter={[Function]}
                  onMouseLeave={[Function]}>
                  Digital House
                </a>
            `;
 
            exports[`Link changes the class when hovered 2`] = `
                <a
                  className="hovered"
                  href="http://www.digitalhouse.com"
                  onMouseEnter={[Function]}
                  onMouseLeave={[Function]}>
                  Digital House
                </a>
            `;
 
            exports[`Link changes the class when hovered 3`] = `
                <a
                  className="normal"
                  href="http://www.digitalhouse.com"
                  onMouseEnter={[Function]}
                  onMouseLeave={[Function]}>
                  Digital House
                </a>
            `;

        4-Actualizando la instantánea:
            Es muy fácil detectar cuando una prueba de instantánea falla 
            después de introducir un cambio.
            Cuando eso ocurre, simplemente debemos arreglar el problema, 
            y asegurarnos de que los snapshot tests se ejecutan con éxito otra vez.
            Vamos a probar el caso de cuando un test de instantánea 
            está fallando debido a un cambio intencionado en la implementación. 
            Tal situación puede presentarse si intencionalmente 
            cambiamos la dirección del enlace del componente Link en nuestro ejemplo. 
            Modifiquemos 📃Link.test.js de la siguiente forma:
            
                ...
            
                test('El enlace cambia la clase cuando se pasa por encima', () => {
                  const tree = renderer
                    .create(<Link page="http://www.instagram.com">Instagram</Link>)
                    .toJSON();
                  expect(tree).toMatchSnapshot();
                	...
                });
            En ese caso, Jest imprimirá un error en la salida:
            Ya que sólo actualizamos nuestro componente para que apunte 
            a una dirección diferente, 
            es razonable esperar cambios en la instantánea de este componente. 
            Nuestro test de instantánea está fallando porque la instantánea 
            de nuestro componente actualizado ya no concuerda con el artefacto 
            de instantáneas para este caso de test.
            Para resolver esto, necesitamos actualizar nuestra snapshot 
            ejecutando jest --updateSnapshot.




*/