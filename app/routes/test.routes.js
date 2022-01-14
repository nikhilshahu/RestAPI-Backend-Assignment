module.exports = (app) => {
    const App = require("../controller/test.controller.js");
   
    app.post("/create", App.create);
  
    app.get("/getAll", App.Read);
    //app.get("/message/:messageId", App.ReadOne);
    app.get("/name/:ObjectId", App.ReadOne);
    app.get("/img/:ObjectId", App.ReadOne);
    app.get("/summary/:ObjectId", App.ReadOne);
    
  
    app.put("/update/:ObjectId", App.update);
    app.put("/name/:ObjectId", App.update)
    app.put("/img/:ObjectId", App.update);
    // app.put("/summary/:ObjectId", App.update);
  
    // app.delete("/message/:ObjectId", App.delete);
    app.delete("/delete/:ObjectId", App.delete);
    // app.delete("/img/:ObjectId", App.delete);
    // app.delete("/summary/:ObjectId", App.delete);
  };