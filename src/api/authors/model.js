const { DataTypes } = require("sequelize");
const { context } = require("../../db/connection");

const Author = context.define("Author", {
	authorName: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Author;
