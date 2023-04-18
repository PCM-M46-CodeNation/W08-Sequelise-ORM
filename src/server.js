require("dotenv").config();
const express = require("express");
const app = express().use(express.json());
const expressServerPort = process.env.EXPRESS_SERVER_PORT || 5001;

const Book = require("./api/books/model");

const syncTables = () => {
	Book.sync();
};

app.use("/books", require("./api/books/routes"));

app.get("/health", async (_, res) => {
	res.status(200).json({ message: "Server is running." });
});

app.listen(expressServerPort, () => {
	syncTables();
	console.log(`Express is listening on port ${expressServerPort}`);
});
