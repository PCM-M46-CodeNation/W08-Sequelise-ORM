const { DataTypes } = require("sequelize");
const { context } = require("../../db/connection");

const Genre = context.define("Genre", {
	genre: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Genre;
