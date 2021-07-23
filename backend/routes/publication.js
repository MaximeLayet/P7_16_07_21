const express = require("express");
const router = express.Router();
const postCtrl = require("../controllers/publication");
const auth = require("../middleware/auth"); // Importation middleware d'authentification

// routes CRUD: Create, Read, Update et Delete
// Middleware d'authentification pour sécuriser les routes de l'API
router.get("/", auth, publicationCtrl.getAllPublications);
router.get("./:id", auth, publicationCtrl.getOnePublication);
router.post("/create", auth, publicationCtrl.createPublication);
router.post("/:id", auth, publicationCtrl.modifyOnePublication);
router.delete("/:id", auth, publicationCtrl.deleteOnePublication);

module.exports = router;
