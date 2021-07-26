const express = require("express");
const router = express.Router();
const publicationCtrl = require("../controllers/publication");
//const auth = require("../middleware/auth"); // Importation middleware d'authentification

// routes CRUD: Create, Read, Update et Delete
// Middleware d'authentification pour sécuriser les routes de l'API
router.get("/", publicationCtrl.getAllPublication);
router.get("/:pubId", publicationCtrl.getOnePublication);
router.post("/create", publicationCtrl.createPublication);
router.put("/:pubId", publicationCtrl.modifyOnePublication);
router.delete("/:pubId", publicationCtrl.deleteOnePublication);

module.exports = router;
