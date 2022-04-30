const router = require("express").Router();
const { StatusCodes } = require("http-status-codes");
const cors = require("cors");

const corsoptions = {
  origin: "*",
  methods: ['POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization', 'Content-Length','X-Requested-With'],
  optionsSuccessStatus: 200
}

router.options("/novo", cors(corsoptions), async (req, res) =>{ return res.status(StatusCodes.OK)})

module.exports.pedido = router;