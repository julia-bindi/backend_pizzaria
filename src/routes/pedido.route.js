const router = require("express").Router();
const cors = require("cors");
const { PedidosController } = require("../controllers");

const corsoptions = {
  origin: "*",
  methods: ['POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.post("/novo", cors(corsoptions), PedidosController.novo)
router.delete("/cancelar/:id", cors(corsoptions), PedidosController.deletar)

module.exports.pedido = router;