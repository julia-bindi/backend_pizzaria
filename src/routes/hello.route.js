const router = require("express").Router();
const cors = require("cors");
const { HelloController } = require("../controllers");

const corsoptions = {
    origin: "*",
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type','Authorization'],
    optionsSuccessStatus: 200
  }

router.get("/", cors(corsoptions), HelloController.hello);
module.exports.hello = router;