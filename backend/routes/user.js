const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const auth = require("../middleware/auth");
//const isOwner = require("../middleware/isOwner");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);
router.delete("/:userId", auth, userCtrl.delete);
router.put("/:userId", userCtrl.modify);
router.get("/:userId", userCtrl.getOne);

module.exports = router;
