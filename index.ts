var express = requeri("express");
var app = express();

app.use(express.static("public"));

app.listen(3333, function(){
    console.log("Servidor del frontend levantado en 3333");
});