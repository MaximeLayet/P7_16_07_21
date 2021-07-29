const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const auth = require("../middleware/auth");

// routes CRUD: Create, Read, Update et Delete
// Middleware d'authentification pour sécuriser les routes de l'API
router.get("/", auth, commentCtrl.getAllComment);
router.get("/:commentId", auth, commentCtrl.getOneComment);
router.post("/create", auth, commentCtrl.createComment);
router.put("/:commentId", auth, commentCtrl.modifyOneComment);
router.delete("/:commentId", auth, commentCtrl.deleteOneComment);

module.exports = router;
