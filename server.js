const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//const cors = require("cors");
const path = require('path');

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
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

//app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to Nikhil Shahu's application." });
  //res.sendFile(path.join(__dirname,'index.html'));
  res.sendFile('index.html', {
   root: './app/views/'
});
});

require("./app/routes/test.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 2291;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});