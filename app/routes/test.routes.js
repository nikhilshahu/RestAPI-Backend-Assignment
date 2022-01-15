module.exports = (app) => {
    const App = require("../controller/test.controller.js");

    //var router = require("express").Router();
   
    app.post("/create", App.create);
  
    app.get("/getAll", App.Read);
    
    app.get("/name/:ObjectId", App.ReadOne);
    app.get("/img/:ObjectId", App.ReadOne);
    app.get("/summary/:ObjectId", App.ReadOne);
    
  
    app.put("/update/:ObjectId", App.update);
    //app.put("/name/:ObjectId", App.update)
    //app.put("/img/:ObjectId", App.update);
    //app.put("/summary/:ObjectId", App.update);
  
    app.delete("/delete/:ObjectId", App.delete);
    //app.delete("/name/:ObjectId", App.delete);
    //app.delete("/img/:ObjectId", App.delete);
    //app.delete("/summary/:ObjectId", App.delete);

    //app.use('/api/App', router);
  };
