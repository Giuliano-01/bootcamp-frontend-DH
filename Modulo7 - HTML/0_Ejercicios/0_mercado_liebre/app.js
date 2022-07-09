const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use("/public",express.static(path.join(__dirname, '/public')));

app.listen(3000,function(){console.log("servidor funcionando")});

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"./views/home.html"));
});

