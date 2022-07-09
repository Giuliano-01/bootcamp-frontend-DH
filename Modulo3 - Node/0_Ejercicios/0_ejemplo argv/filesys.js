let fs = require(fs);

fs.writeFileSync(
    'db.json',
    'contenido a escribir en el archivo',
    error => console.log(error)
);

const content = "este es el contenido que queremos escribir";
fs.writeFileSync(
    'db.json',
    content,
    error => console.log(error)
);

//puedo escribir lo que pase por consola
const argumento = process.argv[2];
fs.writeFileSync(
    'db.json',
    argumento,
    error => console.log(error)
);
