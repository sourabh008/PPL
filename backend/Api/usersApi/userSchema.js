const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    farstname:String,
    lastname:String,
    email:String,
    password:String,
    username:String,
    image:String,
    sex:String,
    description:String

})
module.exports=mongoose.model("userData",userSchema);