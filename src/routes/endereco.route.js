const router = require("express").Router();
const { StatusCodes } = require("http-status-codes");
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

router.options("/novo", cors(corsoptions), async (req, res) =>{ return res.status(StatusCodes.OK)})
router.post("/novo", cors(corsoptions), EnderecosController.novo)
router.get("/get", cors(corsoptions), EnderecosController.get)

module.exports.endereco = router;