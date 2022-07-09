let main = document.querySelector("main");
let h2 = document.querySelector("h2");
let a = document.querySelector("a");
let p = document.querySelectorAll("p");

let nombre = window.prompt("Ingrese su nombre");
if(nombre == ''){
    h2.innerHTML = "Invitado";
}else{
    h2.innerHTML = nombre;
}

a.style.color =  "#E51B3E";

h2.style.textTransform = "uppercase";

let confirmado = confirm("¿Desea colocar un fondo de pantalla?");
console.log(confirm);
if(confirmado){
    document.querySelector("body").classList.add("fondo");
}

p.forEach(pagraph => {
    if(pagraph%2 == 0){
        pagraph.classList.add("descatadoPar");
    }else{
        pagraph.classList.add("descatadoImpar");
    }
});

main.style.display = "block";