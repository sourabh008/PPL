const mongoose = require("mongoose");
const postSchema = mongoose.Schema({
  username:String,
  id:String,
  image:String,
  description:String,
  category:String,
  date:String,
  time:String
});
module.exports = mongoose.model("postData", postSchema);
