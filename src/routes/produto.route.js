const router = require("express").Router();
const cors = require("cors");
const { ProdutosController } = require("../controllers");

const corsoptions = {
    origin: "*",
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    optionsSuccessStatus: 200
  }

router.get("/:tipo", cors(corsoptions), ProdutosController.get);
module.exports.produto = router;