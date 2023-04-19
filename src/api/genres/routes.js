const { Router } = require("express");
const router = Router();

const { commands, queries } = require("./controllers");

router.post("/", commands.addGenre);

module.exports = router;
