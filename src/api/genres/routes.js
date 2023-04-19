const { Router } = require("express");
const router = Router();

const { commands, queries } = require("./controllers");

router.post("/addgenre", commands.addGenre);
router.get("/getbooksbygenre/:genre", queries.getAllBooks);

module.exports = router;
