const router = require("express").Router();
const { search } = require("../controller/search");

router.get("/search", search);

module.exports = router;