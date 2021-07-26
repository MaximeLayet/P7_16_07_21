const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
//const auth = require("../middleware/auth"); // Importation middleware d'authentification

// routes CRUD: Create, Read, Update et Delete
// Middleware d'authentification pour sécuriser les routes de l'API
router.get("/", commentCtrl.getAllComment);
router.get("/:commentId", commentCtrl.getOneComment);
router.post("/create", commentCtrl.createComment);
router.put("/:commentId", commentCtrl.modifyOneComment);
router.delete("/:commentId", commentCtrl.deleteOneComment);

module.exports = router;
