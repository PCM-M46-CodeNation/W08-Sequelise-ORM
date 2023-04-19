const { DataTypes } = require("sequelize");
const { context } = require("../../db/connection");

const Book = context.define("Book", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});

module.exports = Book;
