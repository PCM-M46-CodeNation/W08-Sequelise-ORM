const { DataTypes } = require("sequelize");
const connection = require("../../db/connection");
module.exports = connection.define("Book", {
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
