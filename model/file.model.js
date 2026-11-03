const {Schema, model} = require('mongoose');

const fileSchema = new Schema({
  filename:{
    type:String,
    required:true,
    trim:true,
    lowercase:true,
  },
  filepath:{
    type:String,
    required:true,
    trim:true,
  },
  filesize:{
    type:Number,
    required:true,
  },
  filetype:{
    type:String,
    required:true,
    trim:true,
    lowecase:true,
  }
},{timestamps:true});

const FileModel = model('File',fileSchema);

module.exports = FileModel

