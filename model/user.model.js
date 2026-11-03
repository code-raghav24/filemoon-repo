const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address",
    ],
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
},{timestamps:true});

userSchema.pre('save',async function(){
  console.log("inside checking user function");
  const count = await model('User').countDocuments({email:this.email})
  if(count > 0) throw new Error("User already exits");
  console.log("this is new user hai");
})
userSchema.pre("save",async function(){
  console.log("hash garum muji ko password");
  const hashedVal = bcrypt.hashSync(this.password,10)
  this.password = hashedVal;
})

const UserModel = model("User", userSchema);

module.exports = UserModel;
