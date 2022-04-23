const router = require("express").Router();
const { ProdutosController } = require("../controllers");

router.get("/:tipo", ProdutosController.get);
module.exports.produto = router;