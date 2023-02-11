const express = require('express');
const cors = require("cors");

const moment = require("moment")



const api = express()





var corsOptions = {
    origin: "http://localhost:8888"
  };

const PORT = 8888;
const HOST = 'localhost';

api.use(cors(corsOptions));


api.use(express.json()); 


api.use(express.urlencoded({ extended: true })); 

api.get('/', (req,res) => {
    res.send('Welcome to this awesome API!')
})



//require("./routes/project.routes.js")(api)

//require("./routes/job.routes")(api)

require("./routes/manager.routes.js")(api)

require("./routes/login.routes.js")(api)

//require("./routes/worker.routes")(api)

//require("./routes/travel.routes")(api)



api.listen(PORT, () => console.log(`API running at ${HOST}:${PORT}!`))