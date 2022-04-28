const router = require("express").Router();
const cors = require("cors");
const { PedidosController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized)

const corsoptions = {
    origin: "*",
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    optionsSuccessStatus: 200
  }

router.post("/novo", cors(corsoptions), PedidosController.novo)
router.delete("/cancelar/:id", cors(corsoptions), PedidosController.deletar)

module.exports.pedido = router;