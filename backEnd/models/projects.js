const sql = require("./dbconnection");


const Project = function (project) {

this.projectID = project.projectID
 this.name = project.name;
 this.description = project.description;
 this.completed= project.completed;
 
};

Project.create = (newProject, result) => {
    sql.query("INSERT INTO construction.jobs SET ?", newProject, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newProject });
      result(null, { id: res.insertId, ...newProject});
    });
  };