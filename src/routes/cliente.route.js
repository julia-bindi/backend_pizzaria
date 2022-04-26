const router = require("express").Router();
const cors = require("cors")
const { ClienteController } = require("../controllers");

const corsoptions = {
    origin: "*",
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type','Authorization'],
    optionsSuccessStatus: 200
}

router.post("/login", ClienteController.login)
router.post("/novo",cors(corsoptions), ClienteController.novo)

module.exports.cliente = router;