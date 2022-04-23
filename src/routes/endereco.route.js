const router = require("express").Router();
const { EnderecosController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized)

router.post("/novo", EnderecosController.novoEndereco)
router.get("/get", EnderecosController.getEnderecos)

module.exports.endereco = router;