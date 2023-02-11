const sql = require("./dbconnection");


const Worker = function (worker) {

this.workerID = worker.workerID
 this.firstName = worker.firstName;
 this.lastName = worker.lastName;
 this.address= worker.address;
 this.email = worker.email;
 
};

Worker.create = (newWorker, result) => {
    sql.query("INSERT INTO construction.jobs SET ?", newWorker, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newWorker });
      result(null, { id: res.insertId, ...newWorker});
    });
  };