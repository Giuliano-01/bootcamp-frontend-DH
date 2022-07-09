/*

    *State:

        Usamos setState para cambiar el estado de nuestros componentes, ya sea ante eventos de usuario, cambios en el servidor o cambios en los props. 

    *Constructor:

        class contador extends Component{

            constructor(){          -> El método constructor es necesario para poder definir la estructura de un componente.

                super();  -> La función super en el constructor es necesaria en React ya que de esa forma podemos utilizar las props que hereda de su componente padre.
                this.state = {  -> El constructor es el único lugar donde debemos asignar this.state directamente. Este va a ser un objeto literal.

                    valor:1,
                }
            }
        }

    *Props:

        class contador extends Component{

            constructor(props){          -> Podemos recibir las props en el constructor. Es buena práctica utilizarlas al llamar al super.

                super(props);  
                this.state = { 

                    valor:props.value,
                }
            }
        }

    *setState:

        class contador extends Component{

            constructor(){
                super();
                this.state = {
                    valor:1,
                }
            }

            incrementar(){   -> En todos los métodos que no sean el constructor debemos utilizar this.setState(). y cuando vuelve a cargar regresa al estado inicial
                
                this.setState({
                        valor: this.state.valor + 1
                        o
                        valor: 10 para cambiar el valor solamente    
                });
             
            }}



            render(){
            
                return (
                    <button onClick = {this.incrementar}></button>  -> Con el evento onClick vamos a estar modificando a través del método incrementar, el estado de nuestro componente.
                );
            
            }

    doc: https://es.reactjs.org/docs/faq-state.html#what-does-setstate-do

*/