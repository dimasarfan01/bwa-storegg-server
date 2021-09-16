var express = require("express");
var router = express.Router();
const { signup, signin } = require("./controller");
const multer = require("multer");
const upload = multer();
const os = require("os");

router.post("/signup", upload.none(), signup);
//router.post('/signup', signup);
router.post("/signin", signin);

module.exports = router;
