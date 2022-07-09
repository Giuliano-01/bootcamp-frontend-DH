/*

    *componentDidMount():
    
    componentDidMount(){
    	console.log('El componente fue renderizado');
    }
    Solemos utilizar este método para identificar 
    el momento del ciclo vida del componente
     donde se ha renderizado por primera vez. 
     Tengamos en cuenta que este método solo se ejecuta después 
     de la primera renderización, del lado del usuario,
      por ende lo veríamos a través de la consola del navegador. 
      Uno de sus usos más comunes es, por ejemplo, 
      encargarse de hacer algún pedido asincrónico 
      (quizás a alguna API) una vez que el componente fue renderizado. 


    *componentDidUpdate():
    
    componentDidMount(){
    	console.log('El componente fue renderizado');
    }
    Método que utilizamos para identificar cuando un componente fue actualizado. 
    Es decir, cuando sufrió ciertos cambios que hayamos programado 
    en nuestro proyecto.


    *componentWillUnmount():
    
    componentDidMount(){
    	console.log('El componente fue renderizado');
    }
    Método que utilizamos para identificar el momento en que un componente 
    va a dejar de existir. 
    Es decir, no va a volver a ser renderizado. 
    Dentro del método solemos hacer una “limpieza” 
    de cualquier otro método que haya estado utilizando el componente que,
    de ahora en más, no va a volver a ser renderizado.


*/