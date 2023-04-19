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
		.use("/authors", require("./api/authors/routes"))
		.use("/books", require("./api/books/routes"))
		.use("/genres", require("./api/genres/routes"))
		.listen(expressServerPort, () => {
			console.log(`Express is listening on port ${expressServerPort}`);
		});
});
