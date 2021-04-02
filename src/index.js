const express = require("express");

const apiserver = express();

apiserver.get("/",function(req,res){
res.send('Hello Wokr');
});

apiserver.listen(3000,()=>console.log('Server Started'));