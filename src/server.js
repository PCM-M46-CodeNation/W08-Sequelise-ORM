require("dotenv").config();
const express = require("express");
const expressServerPort = process.env.EXPRESS_SERVER_PORT || 5001;

const Book = require("./api/books/model");

const syncTables = () => {
	Book.sync();
};

express()
	.use(express.json())
	.use("/books", require("./api/books/routes"))
	.listen(expressServerPort, () => {
		syncTables();
		console.log(`Express is listening on port ${expressServerPort}`);
	});
