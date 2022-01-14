const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const path = require('path');

//const Joi = require('joi');

// Configuring the database
const dbConfig = require('./app/config/db.config.js');
const { url } = require("./app/config/db.config.js");
const collection = "apps";

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

const app = express();
// parse requests of content-type - application/json
app.use(bodyParser.json());

// schema used for data validation for our data document
// const schema = Joi.object().keys({
//   name : Joi.string().required(),
//   img : Joi.string().required(),
//   summary : Joi.string().required()
// });

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/test.routes.js")(app);

// Setting path for public directory 
//const static_path = path.join(__dirname, "./app/view/");
//app.use(express.static(static_path));
//app.use(express.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  res.sendFile('index.html', {
    root: './'
  });

  //res.sendFile(path.join(__dirname,'index.html'));
  //res.json({ message: "Welcome to Nikhil Shahu's application." });
   //res.redirect('./index.html');
   //res.sendFile('./index.html');
   //app.use(app.render('./index.html'));
   //app.use(express.static(__dirname + "/public"));
   //app.use(express.static(__dirname + "./index.html"));
  //app.use(app.router);
});


// set port, listen for requests
const PORT = process.env.PORT || 2291;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});