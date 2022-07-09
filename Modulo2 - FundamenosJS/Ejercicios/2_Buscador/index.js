console.log("holamundo")
const products = ['Celular motorola', 'Celular samsung', 'Celular xiaomi', 'Teclado pc', 'Monitor'];

const results = document.querySelector('#results');
const inputSearch = document.querySelector('#search');

products.forEach((product)=>{
    results.innerHTML += `<li>${product}<li/>`; // altgr + `
}); //recorre cada elemento del array ejecuta la funcion en cada recorrido;

inputSearch.addEventListener('keyup', (e)=>{
    if(e.key === 'ENTER'){
        results.innerHTML = '';
        products.forEach((product)=>{
            if(product.indexOf(inputSearch.value)!==-1){
                results.innerHTML += `<li>${product}<li/>`;
            }
        });
    }
    
})