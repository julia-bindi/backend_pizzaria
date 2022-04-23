const router = require("express").Router();
const { EnderecosController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized)

router.post("/novo", EnderecosController.novo)
router.get("/get", EnderecosController.get)

module.exports.endereco = router;