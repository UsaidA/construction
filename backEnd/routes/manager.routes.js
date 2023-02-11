module.exports = app => {
    const manager = require("../controllers/manager.controller");
  
    let router = require("express").Router();
  
    // Retrieve all students
   

    app.use('/api/manager', router);
  };
