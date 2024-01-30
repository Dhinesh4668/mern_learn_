const express = require("express");
const regester = require("../controllers/userRegester");
const getData = require("../controllers/getData");
const user = require("../models/userModel");
const updateUserProfile = require("../controllers/updateProfileData");
const userLogin = require("../controllers/userLogin");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const ProfileInfo = require("../controllers/ProfileInfo");
const fs = require("fs");

const app = express();

// Update the image
const updatePic = multer.diskStorage({
  destination: (req, file, cb) => {
    const destinationPath = "assets/Images";
    console.log(file)

    if (!fs.existsSync(destinationPath)) {
      fs.mkdirSync(destinationPath, { recursive: true });
    }
    cb(null, destinationPath);
  },
  // Filename
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, and JPG files are allowed."));
  }
};

const upload = multer({ storage: updatePic, fileFilter: fileFilter });

router.post("/user/register", regester);
router.get("/user/show", getData);
router.post("/user/login", userLogin);
router.get("/profile/:id", ProfileInfo);
router.patch("/update/:id", upload.single("profilePic"), updateUserProfile);
router.get("/image", (req,res)=>{
  user.find()
  .then(user => res.json(user))
  .catch(err => res.json(err))
})
module.exports = router;
