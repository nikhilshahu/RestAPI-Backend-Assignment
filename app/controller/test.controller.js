const App = require("../models/test.model.js");

// Create and Save
exports.create = (req, res) => {
    const message = new App({
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary,
      });
      message
        .save()
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Message.",
        });
     });
};

// Retrieve all data from the database.
exports.Read = (req, res) => {
    App.Read()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving messages.",
        });
      });
  };

  
  // Find a single data with a dataId
exports.ReadOne = (req, res) => {
    App.findById(req.params. ObjectId)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            name: "Name not found with id " + req.params.ObjectId,
            img: "image not found with id " + req.params.ObjectId,
            summary: "Summary not found with id " + req.params.ObjectId,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            name: "Name not found with id " + req.params.ObjectId,
            img: "image not found with id " + req.params.ObjectId,
            summary: "Summary not found with id " + req.params.ObjectId,
           
          });
        }
        return res.status(500).send({
          //message: "Error retrieving message with id " + req.params.ObjectId,
          name: "Error retrieving name with id " + req.params.ObjectId,
          img: "Error retrieving img with id " + req.params.ObjectId,
          summary: "Error retrieving summary with id " + req.params.ObjectId,
        });
      });
  };
// Update a data identified by the dataId in the request
exports.update = (req, res) => {
    App.findByIdAndUpdate(
      req.params.ObjectId,
      {
        name: req.body.name,
        img: req.body.img,
        summary: req.body.summary,
      },
      { new: true }
    )
      .then((data) => {
        if (!data) {
          return res.status(404).send({
           // message: "Message not found with id " + req.params.ObjectId,
           name: "Name not found with id " + req.params.ObjectId,
           img: "image not found with id " + req.params.ObjectId,
           summary: "Summary not found with id " + req.params.ObjectId,
          });
        }
        res.send(data);
      })
      .catch((err) => {
        if (err.kind === "ObjectId") {
          return res.status(404).send({
            name: "Name not found with id " + req.params.ObjectId,
           img: "image not found with id " + req.params.ObjectId,
           summary: "Summary not found with id " + req.params.ObjectId,
          });
        }
        return res.status(500).send({
          name: "Error updating name with id " + req.params.ObjectId,
          img: "Error updating img with id " + req.params.ObjectId,
          summary: "Error updating summary with id " + req.params.ObjectId,
        });
      });
  };
  
  // Delete a data with the specified dataId in the request
exports.delete = (req, res) => {
    App.findByIdAndRemove(req.params.ObjectId)
      .then((data) => {
        if (!data) {
          return res.status(404).send({
            name: "Name not found with id " + req.params.ObjectId,
            img: "image not found with id " + req.params.ObjectId,
            summary: "Summary not found with id " + req.params.ObjectId,
          });
        }
        res.send({ message: "Message deleted successfully!" });
      })
      .catch((err) => {
        if (err.kind === "ObjectId" || err.name === "NotFound") {
          return res.status(404).send({
            name: "Name not found with id " + req.params.ObjectId,
            img: "image not found with id " + req.params.ObjectId,
            summary: "Summary not found with id " + req.params.ObjectId,
          });
        }
        return res.status(500).send({
            name: "Could not delete Name with id " + req.params.ObjectId,
            img: " Could not delete image with id " + req.params.ObjectId,
            summary: " Could not delete Summary with id " + req.params.ObjectId,
        });
      });
  };