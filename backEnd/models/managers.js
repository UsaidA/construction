const sql = require("./dbconnection");


const Manager = function (manager) {

this.managerID = manager.managerID
 this.firstName = manager.firstName;
 this.lastName = manager.lastName;
 this.email= manager.email;
 this.password = manager.password;
};

Manager.create = (newManager, result) => {
    sql.query("INSERT INTO construction.jobs SET ?", newManager, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newManager });
      result(null, { id: res.insertId, ...newManager});
    });
  };