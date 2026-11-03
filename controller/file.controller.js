const FileModel = require("../model/file.model");

const createFile = (req,res)=>{
  try{
    console.log("/createFile endpoint ma;");
    console.log(req.file);
    res.send("success");
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}
module.exports = {
  createFile,
}
