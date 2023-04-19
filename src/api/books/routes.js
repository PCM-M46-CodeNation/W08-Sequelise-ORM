const { Router } = require("express");
const router = Router();

const { commands, queries } = require("./controllers");

router.post("/addbook", commands.addBook);
router.get("/getallbooks", queries.getAllBooks);
router.get("/getbook/:title", queries.getSingleBookByTitle);

router.delete("/deletebook", commands.deleteBook);

module.exports = router;
