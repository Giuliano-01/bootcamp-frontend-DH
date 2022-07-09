//modulo nativo file system
let fs = require("fs");
//array conformado por el archivo JSON de tareas
let tareas = require("./tareas.json") //lo obtengo ya parseado (es un array de objetos literales)

function loggearTareas(){
    tareas.forEach((tarea)=>{console.log(tarea)});
}

function añadirTarea(name, status){
    if(name!==undefined&&status!==undefined){
        if(status=="terminada" || status=="pendiente"){
            const nuevaTarea = {nombre: name, estado: status};
            const nuevasTareas = [...tareas, nuevaTarea];
            const nuevasTareasJSON = JSON.stringify(nuevasTareas);
            fs.writeFileSync("tareas.json",nuevasTareasJSON,(err)=>console.log(err));
        }else{
            console.log("el estado debe ser: terminada o pendiente");
        }
    }else{
        console.log("falto nombre o estado");
    }
}

function loggearTareasPorEstado(status){
    console.log(tareas.filter((tarea)=>{return tarea.estado == status}));
}

function borrarTarea(name){
    let nuevasTareas = tareas.filter((tarea)=> tarea.titulo !==name);
    let nuevasTareasJSON = JSON.stringify(nuevasTareas);
    fs.writeFileSync("tareas.json",nuevasTareasJSON,(err)=>console.log(err));
}


switch(process.argv[2]){
    
    case ("loggear"): 
        loggearTareas();
    break;

    case("añadir"):
        añadirTarea(process.argv[3].trim(),process.argv[4].trim());
    break;

    case("filtrar"):
        loggearTareasPorEstado(process.argv[3]);
    break;

    case ("borrar"):
        borrarTarea(process.argv[3]);
    break;

    default:
        let msj = "lista de operaciones: \n"+
                  "loggear\n"+
                  "añadir 'titulo' 'estado'\n"+
                  "filtrar 'estado'";
        console.log(msj);
    break;
}