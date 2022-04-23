const router = require("express").Router();
const { PedidosController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized)

router.post("/novo", PedidosController.novo)
router.delete("/cancelar/:id", PedidosController.deletar)

module.exports.pedido = router;