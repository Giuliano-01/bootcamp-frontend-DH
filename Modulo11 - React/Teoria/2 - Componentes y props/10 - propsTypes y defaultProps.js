/*

    *Las PropTypes:

        -React tiene algunas habilidades de verificación de tipos en las props de un componente, 
        para ello se puede asignar la propiedad especial propTypes.
        

        Para definir que tipo es lo que mandamos y requiere que sea de ese tipo para que alguien que viene al proyecto sepa que tipo son las props

    *Instalacion:

        npm install --save prop-types


        -Se debe importar en aquel componente donde queremos implementar las PropTypes.

        import PropTypes from 'prop-types'; // ES6

        -Exporta un rango de validadores que pueden ser usados para estar seguros de que la información recibida sea válida. 


        import PropTypes from 'prop-types';
        
        Function Saludar(props) {
            
            render() {

                return (

                    <h1>Hola, {props.nombre}</h1>

                );
            }
        }

        Saludar.propTypes = {

            nombre : PropTypes.string.isRequired (para que ese tipo de dato sea requerido)
        
        };
        
        export default Saludar;





    *Las DefaultProps:


    Una propiedad en el propio componente, para establecer las props predeterminadas que recibirá el mismo.
    Esto se utiliza para props no definidos, pero no para props nulos.

    *Definiendo las DefaultProps:

    function SeteoBoton(props) {
    
        // ...
    
    }

    SeteoBoton.defaultProps = {
        color: 'blue'
    };

    -> Si no se indica el valor de props.color, se establecerá por defecto a 'blue'.


    Doc: https://es.reactjs.org/docs/typechecking-with-proptypes.html#proptypes

*/