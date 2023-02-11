
const tokenHandle = require("../common/tokenHandling")

module.exports = app => {
    const workers = require("../controllers/workers.controller.js");
  
    let router = require("express").Router();
  
    // Retrieve all students
    router.get("/getAll", workers.findAll);

    router.get("/getOneStudent", workers.findByEmail)

    router.post("/createNewStudent", workers.create);
  
    router.put("/updateStudent/:id", workers.update);

    router.delete("/delete/:id", workers.delete);

    app.use('/api/students', router);
  };