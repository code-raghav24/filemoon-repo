const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB)
  .then(()=>console.log("db connectinon success"))
.catch(err=>{
    console.log(err.message);
    process.exit(0);
  })

const express = require("express");
const {fetchUsers,createUser,updateUser} = require("./controller/user.controller"); 
const app = express();
app.listen(process.env.PORT || 8080,()=>console.log('server running'));

app.use(express.static("view"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/user",createUser);
app.get("/user",fetchUsers);
app.put("/user/:id",updateUser);


