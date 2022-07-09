window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo');
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //focus
    document.getElementById("titulo").focus();


    formulario.addEventListener("submit", (e)=>{
        e.preventDefault();
    })

    //no inputs vacios - agregar clase is-invalid - real time validation
    let inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("blur", ()=>{
            if(inputs[i].value==""){
                console.log("error");
                inputs[i].classList.add("is-invalid");
            }
            if(inputs[i].name=="rating" && (inputs[i])){
                console.log("es rating");
            }
        })
    }

    let obj = {
        
        "id": 0,
        "firstName": "string",
        "lastName": "string",
        "fullName": "string",
        "title": "string",
        "family": "string",
        "image": "string",
        "imageUrl": "string"
          
    }
    fetch("https://thronesapi.com/api/v2/Characters",{
        method: "POST",
	    body: JSON.stringify(obj),
	    headers: {
	    	"Content-type": "application/json"
	    }
    })
    .then(data => data.json())
    .then(posteo => console.log(posteo))
    }
