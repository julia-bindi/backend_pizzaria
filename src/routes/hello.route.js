const router = require("express").Router();
const { HelloController } = require("../controllers");

router.get("/", HelloController.hello);
module.exports.hello = router;