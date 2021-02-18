const router = require("express").Router();
const postApi = require("../Api/postsApi/postApi");
const path = require("path");
const multer = require("multer");
const { response } = require("express");
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
router.post("/post", upload.single("image"), async function (req, res) {
  const obj = {
    id: req.body._id,
    description: req.body.description,
    category: req.body.category,
    image: req.file.originalname,
    username: req.body.username,
    time: req.body.time,
    date: req.body.date,
  };
  const respons = await postApi.post(obj);
  res.json(respons);
});
router.get("/getpost", async function (req, res) {
  const respons = await postApi.getPosts();
  res.json(respons);
});
module.exports = router;
