const express = require("express");

const productImport = require("./routes/product")

const apiserver = express();

apiserver.use("/products",productImport);

apiserver.get("/",function(req,res){
res.send('Hello Wokr');
});

apiserver.listen(3000,()=>console.log('Server Started'));