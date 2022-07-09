/*

*Testeando componentes con Custom Hooks:

    -Vamos a ver cómo testear componentes que usan hooks personalizados.
    -Para ver este caso, vamos a retomar algunos ejemplos que vimos 
    cuando aprendimos a usar Custom Hooks.


    -Este test no deja de ser un test unitario, 
    lo importante es probar que el componente funciona, 
    no nos interesa probar sus dependencias, por lo que debemos mockearlas.

*Ejemplo:

    -Supongamos que tenemos un componente que renderiza 
    una lista de productos gracias a la respuesta de un endpoint de una API Rest. 
    
    -Nuestro componente ProductsList hace uso de:
        -el hook useGetProducts() para obtener los detalles desde la API Rest,
        -y del componente Product para renderizar un producto dentro de la lista.


        import ReactDOM from "react-dom";
        import useGetProduct from "./useGetProducts";
        import Product from "./componentes/product";

        export default ProductsList = () => {

            // hacemos uso del hook useGetProducts para pedir 
          	// el listado de productos desde la API Rest 
          	// y lo almacenamos en products
        	const [products] = useGetProducts();
        
        	return (
        	    <div data-testid="products-list">
        		    {products.map(product => (
        	          	<Product 
        		    	key={product.id}
        		    	{...product}
        		    	data-testid="product-item"
        		    	/>
        		    ))}
        	    </div>
        	)
        }


    -El test para nuestro componente ProductsList, 
    que renderiza su cuerpo según la respuesta del hook useGetProducts 
    se enfoca en validar que se hayan generado 
    tantos Product como productos nos ofrezca la API Rest. 
    Veamos el código.


        import { render, screen } from '@testing-library/react'
        import { ProductsList} from './components/productsList'
        import { useGetProducts } from 'hooks'

        // 1️-Mockeamos el hook que pide datos
        jest.mock('../hooks/useGetProducts')

        describe('Products', () => {
        
        	beforeEach(() => {

        		const products = [
        			{ _id: "6191cb5ec654f145d4326b85", title: 'ALFAJORES' },
        			{ _id: "6191cb73c654f145d4326b87", title: 'ALFAJORES' },
        			{ _id: "6191cb984f875644e0b8e99b", title: 'ALFAJORES' }
        		]
        		// 2️-Mockeamos la implementación del hook para que (siempre) devuelva datos conocidos
        		useGetProducts.mockImplementation(() => products)

        	})
        
        	// 3️-Validamos que se renderice la cantidad de elementos correctos 
        	// según la respuesta del hook.
        	test('hay tantas instancias de Product como cantidad de productos provistos', () => {
        		
                // 4️-Renderizamos el componente
        	    render(<ProductsList />)
        		// 5-chequeamos que la cantidad de Products sea 3
        	    expect(screen.getAllByTestId('product-item')).toHaveLength(3)
        	
            })

        })


    -Podemos ver que empezamos mockeando el hook useGetProducts con
    jest.mock("../hooks/useGetProducts")

    -y también su implementación para que devuelva siempre 
    un conjunto conocido de datos usando
    useGetProducts.mockImplementation(() => products)

    -Tener datos conocidos, nos permite trabajar con la aserción que nos interesa. 
    En este caso, nuestro mock dice que tenemos 3 productos, 
    por lo que esperamos que se generen 3 instancias del componente `Product`.

    
    -En este ejemplo, usamos el selector de consulta getAllByTestId, 
    que nos permite seleccionar todos los elementos 
    cuyo atributo `data-testid="product-item"`.
    
*/