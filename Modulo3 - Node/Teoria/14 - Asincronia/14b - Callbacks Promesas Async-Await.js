
    
    //Callback asincrono
    
    //function buscar (55 , ()=>{}) // cuando termine de buscar el 55 en la base de datos se ejecuta la funcion callback





    //Promesas
    //(es lo mismo que el callback asincrono pero mas simple para evitar anidar callbacks)
    
    /*
    Las promesas en Javascript se representan a través de un Objeto , y cada promesa estará en un estado concreto: 
    -pendiente, 
    -aceptada, 
    -rechazada. 
    
    Además, cada promesa tiene los siguientes métodos, que podremos llamar para utilizarla:
    .then(resolve): Ejecuta la función callback `resolve` cuando la promesa se cumple.
    .catch(reject): Ejecuta la función callback `reject` cuando la promesa se rechaza.
    .then(resolve,reject): Método equivalente a las dos anteriores en el mismo .then().
    .finally(end): Ejecuta la función callback end tanto si se cumple como si se rechaza.
    */


    //Crear una Promesa

    const api = new Promise((resolve,reject)=>{
        
        console.log("cargando");
        let array = [1,2,3,4];
        
        if(array.length>3){

            setTimeout(()=>{    //si se cumple la condicion espero 3 segundos y envio ese objeto a traves de resolve
                resolve({mesage:"aca van los productos", products: [{title: "Iphone", value: 200},{title:"Samsung", value: 100}]});
            }, 3000);
        
        }else{

            reject("hubo un error en tal cosa");

        }

    })
        .then((response)=> console.log(response)) //cuando termina de cargar muestra la respuesta (el resolve)
        .catch((err)=>console.log(err)) //muestro el error si hubo error
        .finally(()=>{let isLoading = false}); //evita duplicar codigo en el then y el catch. asi solo ponerlo en el finally

    console.log(api) //Sin el then como tarda en cargar los datos a api no puedo mostrar lo que tiene y aparece como Promise<Pending>
    


    //Promesas desde una funcion

    function api(){

        return  new Promise((resolve,reject)=>{
        
            console.log("cargando");
            let array = [1,2,3,4];
            
            if(array.length>3){
    
                setTimeout(()=>{    //si se cumple la condicion espero 3 segundos y envio ese objeto a traves de resolve
                    resolve({mesage:"aca van los productos", products: [{title: "Iphone", value: 200},{title:"Samsung", value: 100}]});
                }, 3000);
            
            }else{
    
                reject("hubo un error en tal cosa");
    
            }
    
        });
    }

    //ASYNC AWAIT

    
    //ahora para crear una funcion que obtenga los resultados de la api

    async function getProducts(){ //digo que la funcion será asincrona

        try{
            const results = await api(); //y que debo esperar a que traiga los datos la api
            console.log(results);
        }catch(err){
            console.log(err);
        }
    }

    //otra forma
    async function getProducts(){
        const result = await api().catch((err)=>console.log(err));
        console.log(result);
    }

    //o declaro la funcion y la utilizo con un then y catch
    async function getProducts(){
        return await api()
    }

    getProducts().then((response)=>console.log(response))
                 .catch((err)=>console.log(err));