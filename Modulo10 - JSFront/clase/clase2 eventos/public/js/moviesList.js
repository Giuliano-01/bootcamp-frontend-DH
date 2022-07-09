window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');

    let modo = confirm('Desea modo oscuro');
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    fetch("https://thronesapi.com/api/v2/Characters")
        .then(result => result.json())
        .then(characters => {
            console.log(characters)
            for (const character of characters) {
                document.querySelector("ul").innerHTML += `<li> <h1> ${character.fullName} <h1></li>`
                document.querySelector("ul").innerHTML += `<img src="${character.imageUrl}">`
            }
        })
}