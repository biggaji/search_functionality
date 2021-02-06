const router = require("express").Router();
const { renderIndex } = require("../controller/index");

router.get("/", renderIndex);

module.exports = router;