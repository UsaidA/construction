const sql = require("./dbconnection")
const bcrypt = require('bcrypt');

const Login = function(login){
   
   this.email = login.email;
   this.accessControl = 0
   
   this.password = login.password;
   
}

Login.findByEmailRegWO = (email, result) => { // find registered Teacehrs
    sql.query(`SELECT * FROM construction.registration_worker WHERE email = '${email}'`, (err, res) => {
    
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found registered worker: ", res[0].password);
        result(null, res);
        return;
      }
  
      
      result({ kind: "not_found" }, null);
    });
  };

  Login.findByEmailRegMA = (email, result) => { // find registered students
    sql.query(`SELECT * FROM construction.registration_manager WHERE email = '${email}'`, (err, res) => {
    
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found registered manager: ", res[0].password);
        result(null, res);
        return;
      }
  
      // not found student with the id
      result({ kind: "not_found" }, null);
    });
  };


  Login.findByEmailWorkerTable = (email, result) => {
    sql.query(`SELECT * FROM construction.workers WHERE email = '${email}'`, (err, res) => {
    
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found registered workers: ", res[0].password);
        result(null, res);
        return;
      }
  
    
      result({ kind: "not_found" }, null);
    });
  };

  Login.registerUser = async (newRegisteredUser, result) => {
    newRegisteredUser.password =    await bcrypt.hash(newRegisteredUser.password, 10)
    sql.query("INSERT INTO construction.registration_worker SET ?", newRegisteredUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
       console.log("created tutorial: ", { id: res.insertId, ...newRegisteredUser });
       result(null, { id: res.insertId, ...newRegisteredUser });
    });
  };


  Login.registerUserManager = async (newRegisteredUser, result) => {
    newRegisteredUser.password =    await bcrypt.hash(newRegisteredUser.password, 10)
    sql.query("INSERT INTO construction.registration_manager SET ?", newRegisteredUser, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      //  console.log("created tutorial: ", { id: res.insertId, ...newRegisteredUser });
      //  result(null, { id: res.insertId, ...newRegisteredUser });
    });
  };

 
  
  module.exports = Login;
