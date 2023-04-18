require("dotenv").config();
const express = require("express");
const app = express().use(express.json());
const expressServerPort = process.env.EXPRESS_SERVER_PORT || 5001;

app.get("/health", async (_, res) => {
	res.status(200).json({ message: "Server is running." });
});

app.listen(expressServerPort, () => {
	console.log(`Express is listening on port ${expressServerPort}`);
});
