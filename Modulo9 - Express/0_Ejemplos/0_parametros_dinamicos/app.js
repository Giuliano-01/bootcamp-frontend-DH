var app = require('express')();
const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>{
    console.log(`servidor levantado en el puerto: ${PORT}`);
});

app.get("/", function(req,res){
    res.send("Bienvenidos");
});
