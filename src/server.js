require("dotenv").config();
const express = require("express");
const app = express().use(express.json());

app.get("/health", async (_, res) => {
	res.status(200).json({ message: "Server is running." });
});

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
	console.log(
		`Express is listening on port ${process.env.EXPRESS_SERVER_PORT}`,
	);
});
