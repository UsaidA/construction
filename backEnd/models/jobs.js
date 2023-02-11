const sql = require("./dbconnection");


const Job = function (job) {

this.jobID = job.jobID
 this.projectID = job.projectID;
 this.description = job.description;
 this.completed= job.completed;
};

Job.create = (newJob, result) => {
    sql.query("INSERT INTO construction.jobs SET ?", newJob, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newJob });
      result(null, { id: res.insertId, ...newJob});
    });
  };