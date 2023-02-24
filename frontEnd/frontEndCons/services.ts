import axios from "axios";
import {Registration, singletonAuth} from "../frontEndCons/classes"


function sendLoginRequest(email: any, password: any){
    const registration = new Registration(email.value, password.value);
   
    console.log(registration)
    const JSONOBJ = JSON.stringify(registration);
    console.log(JSONOBJ)
    axios.post('http://localhost:8888/api/login', JSONOBJ, {headers:{'Content-Type':'application/json'}})
    .then((response) => {
      if (response.data =="failed password" || response.data == "Email doesn't exist"){

        this.loginText = "password or email incorrect"
        console.log(response.data, "this.logintext", this.loginText)
      }else{
        console.log(response.data.accessToken, " access token");

        const auth = singletonAuth.getInstance(response.data.accessToken);
        const stringfyUser = JSON.stringify(registration);
        localStorage.setItem('registered',stringfyUser)

        
        if(response.data.accessControl === 1){
          console.log(response.data.accessControl, " in TEACHER CONRTOLLKER")
          let promiseArr: Promise<any>[] = [];
          promiseArr[0] = this.getAllStudents(response.data.accessToken);
          promiseArr[1] = this.getAllStudentAttendences(response.data.accessToken);
          promiseArr[2] = this.getAttendenceCode(response.data.accessToken);
          promiseArr[3] = this.getGroupPercentages(response.data.accessToken);
          promiseArr[4] = this.getTeacherData(response.data.accessToken);
          Promise.all(promiseArr).then((values) => {
            console.log(values)
            console.log("inside teacher promise");
            this.loadTeacherDashboard();
          }).catch(error=> console.log('error'))
          
         

        }else if(response.data.accessControl === 0){

          console.log(response.data.accessControl, " in student CONRTOLLKER")
          let promiseArr: Promise<any>[] = [];
          promiseArr[0] = this.getAttendenceData(response.data.accessToken)
          console.log(this.getAttendenceData(response.data.accessToken))
          promiseArr[1] = this.getUserData(response.data.accessToken)
          promiseArr[2] = this.getLectureData(response.data.accessToken)
  
          Promise.all(promiseArr).then((values) => {
            console.log(values)
            console.log("inside promise");
            this.loadDashboard();
          }).catch(error=> console.log('error'))
        }

         
        
        
        
      }
      console.log(response);
     
  })
  .catch((error) => {
      // Error 😨
      if (error.response) {
          /*
           * The request was made and the server responded with a
           * status code that falls out of the range of 2xx
           */
          this.loginText = "User doesn't exist or credentials incorrect"
          console.log( "this.logintext", this.loginText)
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
      } else if (error.request) {
          /*
           * The request was made but no response was received, `error.request`
           * is an instance of XMLHttpRequest in the browser and an instance
           * of http.ClientRequest in Node.js
           */
          console.log(error.request);
      } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);
  });
    
    console.log(email.value);

  }