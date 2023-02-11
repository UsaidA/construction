const Worker = require("../models/workers.model.js");
const tokenHandler = require("../common/tokenHandling.js");
const e = require("cors");


exports.findAll = (req, res) => {

  
  let jwtToken = req.headers.authorization
 
  if (tokenHandler.authenticateToken(jwtToken) ){

    var x = tokenHandler.getTokenPayload(jwtToken)

    if(x.accessControl === 1){
      Worker.getAll("", (err, data) => {
        if(err){
            res.status(500).send({
               message:
               err.message || "Some error occurred while creating the worker." 
            });
        }
        else res.send(data);
    });
    }else{

      res.status(403).send("Admin Only Access")
    }

    

  } else{
    res.status(403).send("token not valid")

  }
   
}

// Create and Save a new worker
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
          
    // Create a worker
    const worker = new Worker({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.teacherID,
      email: req.body.email,
    });
    
    // Save Student in the database
    Worker.create(worker, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the worker."
        });
      else res.send(data);
    });
  };
// Update a Tutorial identified by the id in the request

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  Worker.updateById(
    req.params.id,
    new Worker(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Worker with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Worker with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};


// Delete a Worker with the specified id in the request
exports.delete = (req, res) => {
  Worker.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Worker with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Worker with id " + req.params.id
        });
      }
    } else res.send({ message: `Worker was deleted successfully!` });
  });
};

// Find a single Student by Id
// exports.findOne = (req, res) => {
//   Student.findById(req.params.id, (err, data) => {

//     tokenHandler(token)
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Student with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Student with id " + req.params.id
//         });
//       }
//     } else res.send(data);
//   });
// };

exports.findByEmail = (req, res) => {

  

  let jwtToken = req.headers.authorization
 
  if (tokenHandler.authenticateToken(jwtToken) ){
   
    

    var x = tokenHandler.getTokenPayload(jwtToken)
    
    Worker.findByEmail(x.email, (err, data) => {
  
      
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Worker with id ${x.email}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Worker with id " + req.params.id
          });
        }
      } else res.send(data);
    });
    
  }
  else{
    res.status(403).send("token not valid")

  }

 
};



