const router=require("express").Router();
const userApi=require("../Api/usersApi/userApi");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, callback) {
    checkFileType(file, callback);
  },
});
function checkFileType(file, callback) {
  const fileTypes = /jpeg|jpg|gif|png/;
  let extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);
  if (mimeType && extName) {
    return callback(null, true);
  } else {
    callback("error:images only");
  }
}

router.post("/", async function(req,res){
   const respons= await userApi.login(req.body);

    res.json(respons);

})

router.post("/signup",async function(req,res){
  const respons= await userApi.signup(req.body);
  res.json(respons)
})

router.post("/users",async function(req,res){
  const respons= await userApi.findSingleUser(req.body);
  res.json(respons)
})
router.post("/updateProfile",upload.single("profile_image"),async (req,res)=>{
 const response=await userApi.updateProfile(req.body);
 console.log(response)
})
module.exports=router