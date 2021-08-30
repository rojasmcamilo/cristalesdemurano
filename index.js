const express = require ("express");
const app = express(); 

app.listen(3000, function() {
    console.log("El archivo esta corriendo en el puerto 3000");
})

app.get ("/", function(req, res){
    res.sendFile (__dirname + "/index.html")
})

app.use(express.static(__dirname + '/public'));
