const router = require("express").Router();
const { ProdutosController } = require("../controllers");

router.get("/:tipo", ProdutosController.getProdutos);
module.exports.produto = router;