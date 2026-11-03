const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB)
  .then(()=>{
    console.log("db connectinon success")
    startServer();
  })
.catch(err=>{
    console.log(err.message);
    process.exit(0);
  })

function startServer(){
  const express = require("express");
  const { createUser, userLogin} = require("./controller/user.controller")
  const app = express();
  app.listen(process.env.PORT || 8080,()=>console.log('server running on port: ' + process.env.PORT));

  app.use(express.static("view"));
  app.use(express.json());
  app.use(express.urlencoded({extended:false}));

  app.post("/signup",createUser);
  app.post("/signin",userLogin);
}
