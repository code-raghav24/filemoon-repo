const UserModel = require("../model/user.model");

const createUser = async(req,res)=>{
  try{
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  }catch(err){
    res.status(500).json({
      error:err.message
    })
  }
}

const fetchUsers = async(req,res)=>{
  try{
    const allUsers = await UserModel.find(); 
    res.status(200).json(allUsers);
  }catch(err){
    res.status(500).json({
      error:err.message
    })
  }
}

const updateUser = async (req,res)=>{
  try{
    const {id} = req.params;
    const updatedValue = await UserModel.findByIdAndUpdate(id,req.body,{returnDocument:"after"});
    res.status(200).json(updatedValue);
  }catch(err){
    res.status(500).json({
      message:err.message
    })

  }
}

module.exports = {
  createUser,
  fetchUsers,
  updateUser,
}
