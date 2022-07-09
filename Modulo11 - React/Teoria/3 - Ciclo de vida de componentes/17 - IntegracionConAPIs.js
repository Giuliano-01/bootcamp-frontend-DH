/*

    componentDidMount()
    Dentro de este método que identifica la fase del ciclo de vida del
    componente, justo después de la primera vez que fue renderizado, es
    donde debemos ir a buscar la información que queremos de la API. 

    1 - 
    constructor(props){
        super(props)
        this.state = {
            gif: ""
        }
    }
    Configuramos el estado del componente 
    para que pueda almacenar la información de la API luego de hacer el fetch.


    2 - 
    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/random?api_key=FSHnaiOlYd
        2NXPdn06Qdh64qxmGRVM69&tag=&rating=g')
        .then(response => {response.json})
        .then(data => {this.setState({gif: data.data.image_url})})
        .catch(e => {console.log(e)})
    }
    Ejecutamos el fetch() hacia el endpoint donde está la información. 
    Una vez procesada la data con .json, la misma está lista para ser utilizada.
    Por eso, en el segundo .then(), asignamos esa información al estado
    del componente que habíamos declarado previamente.

    
    3 - 
    Render():
    Dentro del método render() es donde vamos a imprimir esa información
    que fuimos a buscar a la API. 
    Sin embargo, en este método debemos contemplar un escenario 
    donde la información quizás todavía no fue buscada, 
    ya que el fetch() lo ejecutamos una vez que el componente fue renderizado.
    
    render(){
        let contenido
        if(this.state.gif == ""){
            contenido = <h3>Cargando...</h3>
        } else {
            contenido = <img src={this.state.gif}></img>
        }

        <div>
            {contenido}
            <button>Hace click acá para ver un Gif!</button>
        </div>
    }
    
    export default Gif;


    Dentro del método render, creamos la variable contenido,
    para poder decidir qué mostrar en base a si la información de la API
    está disponible o no.



    AXIOS:

    Axios es muy similar a la API Fetch y se basa en promesas, 
    lo que le permite aprovechar async y await de JavaScript 
    para obtener un código asíncrono más legible.

    Además, tiene la capacidad de interceptar y cancelar solicitudes y, 
    por si fuera poco, cuenta con protección integrada del lado del cliente 
    contra la falsificación de solicitudes.

    A diferencia de la API Fetch:
    -No necesitamos establecer header o realizar tareas tediosas para trabajar con JSON.
    -Sólo necesitamos usar un.then() para poder acceder a la respuesta JSON del backend.
    -Tiene funciones que mapean con cualquier método HTTP. 
    Por ejemplo, para hacer una llamada GET, podemos usar el método .get().
    -Se encarga de lanzar errores 400 y 500 automáticamente, 
    ¡ya no más chequeo de statusCode!
    -Puede ser usado en el servidor en cualquier app NodeJS.

    Paso 1: Instalar Axios
        npm install axios
        import axios from "axios";
    
    Paso 2: Hacer una petición

        componentDidMount() {
          axios.get(`https://dhfakestore.herokuapp.com/api/products/6191cbb54f875644e0b8e99e`)
            .then(res => {
              const product = res.data;
              this.setState({ product });
            })
        }

        . . .


        handleChange = event => {
          this.setState({ name: event.target.value });
        }
    
        handleSubmit = event => {
          event.preventDefault();
        
          const product = {
            name: this.state.name,
            . . .
          };
      
          axios.post(`https://dhfakestore.herokuapp.com/api/products`, { product })
            .then(res => {
              console.log(res);
            })
        }
    
        render() {
          return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Nombre del Producto :
                  <input type="text" name="name" onChange={this.handleChange} />
                </label>
                . . .
                <button type="submit">GUARDAR</button>
              </form>
            </div>
          )
        }

    . . .

    Analicemos este nuevo código. 
    Dentro de la función handleSubmit, 
    primero se evita la acción predeterminada del formulario con preventDefault(). 
    A continuación se crea una constante product 
    que almacena una copia del estado actual del producto 
    que se desea enviar al backend.

    Luego, se realiza la llamada a axios.post(url, data) 
    con la dirección del endpoint y el objeto JSON que espera.

    Este método nos proporciona el mismo objeto de respuesta que axios.get() 
    con información que podemos usar dentro de una invocación then.
*/