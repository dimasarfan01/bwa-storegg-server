var express = require("express");
var router = express.Router();
const {
  index,
  viewCreate,
  actionCreate,
  actionEdit,
  viewEdit,
  actionDelete,
  actionStatus,
} = require("./controller");
const { isLoginAdmin } = require("../middleware/auth");

router.use(isLoginAdmin);
router.get("/", index);
router.put("/status/:id", actionStatus);

module.exports = router;
