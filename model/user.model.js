const {Schema,model} = require("mongoose");

const isValidEmail = (email)=>{
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const result = pattern.test(email);
  return result; 
}
const userSchema = new Schema({
  name:{
    type:String,
    required:true,
    maxlength:100,
    trim:true,
    lowercase:true
  },
  email:{
    type:String,
    required:true,
    validate:{
      validator:isValidEmail,
      message:"email not valid"
    },
    trim:true,
    lowecase:true
  },
  gender:{
    type:String,
    required:true,
    enum:['male','female','other'],
    trim:true,
    lowercase:true
  }
},{timestamps:true})
const UserModel = model('User',userSchema);

module.exports = UserModel;
