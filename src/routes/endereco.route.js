const router = require("express").Router();
const { EnderecosController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized)

router.post("/novo", EnderecosController.novoEndereco)

module.exports.endereco = router;