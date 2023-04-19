const { Router } = require("express");
const router = Router();

const { commands, queries } = require("./controllers");

router.post("/addauthor", commands.addAuthor);

module.exports = router;
