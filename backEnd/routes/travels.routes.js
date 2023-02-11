module.exports = app => {
    const travels = require("../controllers/travels.controller");
  
    let router = require("express").Router();
  
    // Retrieve all students
   

    router.get("/allLectures", travels.allLectures);

  
  

    app.use('/api/lectures', router);
  };
