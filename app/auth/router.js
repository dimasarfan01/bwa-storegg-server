var express = require("express");
var router = express.Router();
const { signup, signin } = require("./controller");
const multer = require("multer");
const upload = multer({
  limits: { fieldSize: 25 * 1024 * 1024 },
});
const os = require("os");

router.post("/signup", upload.none(), signup);
//router.post('/signup', signup);
router.post("/signin", signin);

module.exports = router;
