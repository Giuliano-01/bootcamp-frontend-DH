/*
Para que consumir informacion entre servidor y cliente se usa un formato particular para evitar inconsistencia
entre lenguajes. (es un standart)
Y por el protocolo de hypertexto solo manda strings.

Se usa JSON, Javascript Object Notation
Es una cadena de texto que cualquier lenguaje puede interpretar.

JSON es un objeto nativo de Javascript con dos metodos: Parse() y Stringify()

'[{
   "nombre": "valor",
   "nombre2": "valor2",
   "nombre3": "valor3"
 },
 {
   "apellido": "valor",
   "apellido2": "valor2",
   "apellido3": "valor3"
 }
]'

JSON.Parse(una cadena de texto en formato JSON) pasa de String a JSON (array u objeto literal)
JSON.Stringify(objetoliteral o array) pasa de JSON a String (una cadena de texto en formato JSON)
*/

var str =              // create JSON object (es un objeto literal cuyo atrubuto names tiene un array de objetos literales)
'{ "names":[' + 
        '{"first":"Hakuna","lastN":"Matata" },' + 
        '{"first":"Jane","lastN":"Doe" },' +
        '{"first":"Air","last":"Jordan" }]}';

obj = JSON.parse(str);                      // parse (de JSON a JS)
obj2 = JSON.stringify(obj);                 // stringify (de JS a JSON)

//(puedo enviar al local storage JS convirtiendolo en JSON)
//(puedo traer del local storage JSON y convertirlo a JS)