module.exports = (app) => {
    const App = require("../controller/test.controller.js");

    var router = require("express").Router();
   
    router.post("/create", App.create);
  
    router.get("/getAll", App.Read);
    
    router.get("/name/:ObjectId", App.ReadOne);
    router.get("/img/:ObjectId", App.ReadOne);
    router.get("/summary/:ObjectId", App.ReadOne);
    
  
    router.put("/update/:ObjectId", App.update);
    //router.put("/name/:ObjectId", App.update)
    //router.put("/img/:ObjectId", App.update);
    //router.put("/summary/:ObjectId", App.update);
  
    router.delete("/delete/:ObjectId", App.delete);
    //router.delete("/name/:ObjectId", App.delete);
    //router.delete("/img/:ObjectId", App.delete);
    //router.delete("/summary/:ObjectId", App.delete);

    app.use('/api/App', router);
  };