const exress = require("express");
const ds = require("../datasource/datasource");
const routers = exress.Router();

routers.get("/",function(req,res){
    const products = ds.fetchproduct()
    res.status(200).json(products);
});

module.exports = routers;