const { DataTypes } = require("sequelize");
const { context } = require("../../db/connection");

const Book = context.define("Book", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
	author: {
		type: DataTypes.STRING,
	},
	genre: {
		type: DataTypes.STRING,
	},
});

module.exports = Book;
