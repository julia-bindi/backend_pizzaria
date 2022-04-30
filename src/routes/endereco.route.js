const router = require("express").Router();
const { EnderecosController } = require("../controllers");
const cors = require("cors");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized)

const corsoptions = {
  origin: "*",
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.post("/novo", cors(corsoptions), EnderecosController.novo)
router.get("/get", cors(corsoptions), EnderecosController.get)

module.exports.endereco = router;