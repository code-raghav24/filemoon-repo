const bcrypt = require("bcrypt");
const UserModel = require("../model/user.model");

const createUser = async (req,res)=>{
  try{
    const user = await UserModel.create(req.body)
    return res.status(201).json("user created successfully");

  }catch(err){
    return res.status(500).json({
      message:err.message
    })
  }
}
const userLogin = async (req,res)=>{
  try{
    const user = await UserModel.findOne({email:req.body.email})
    if(!user) throw new Error("user doesn't exist");
    const {email,password} = req.body;
    const result = bcrypt.compareSync(password,user.password)
    if(!result) throw new Error("password incorrect buddy");
    res.status(200).json({
      email:user.email,
      message:"welcome back!"
    })

  }catch(err){
    res.status(500).json({message:err.message});
  }


}

module.exports = {
  createUser,
  userLogin,
}
