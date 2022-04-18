const router = require("express").Router();
const { ClienteController } = require("../controllers");

router.post("/login", ClienteController.login)
router.post("/novo", ClienteController.novoCliente)

module.exports.cliente = router;