const sql = require("./dbconnection");


const Travel = function (travel) {

this.travelID = travel.travelID
 this.workerID = travel.workerID;
 this.startPoint = travel.startPoint;
 this.endPoint= travel.endPoint;
 this.distanceTravelled = travel.distanceTravelled;
};

Travel.create = (newTravel, result) => {
    sql.query("INSERT INTO construction.jobs SET ?", newTravel, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created tutorial: ", { id: res.insertId, ...newTravel });
      result(null, { id: res.insertId, ...newTravel});
    });
  };