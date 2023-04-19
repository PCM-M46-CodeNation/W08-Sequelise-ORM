require("dotenv").config();
const express = require("express");
const db = require("./db/connection");
const expressServerPort = process.env.EXPRESS_SERVER_PORT || 5001;

db.connect().then(() => {
	const map = require("./db/mapping");
	map.mapRelationships();
	map.synchroniseTables();
	express()
		.use(express.json())
		.use("/books", require("./api/books/routes"))
		.listen(expressServerPort, () => {
			console.log(`Express is listening on port ${expressServerPort}`);
		});
});
