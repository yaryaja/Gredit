import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {type:String,required:true},
  slogan: {type:String,required:true},
  avatar: {type:String,required:false},
  cover: {type:String,required:false},
  author: {type:String,required:true},
  tags: {type:String,required:false},
  bannedKeywords: {type:String,required:false},
});
const Community = mongoose.model('Community', schema);

export default Community;