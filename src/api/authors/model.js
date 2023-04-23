const { DataTypes } = require("sequelize");
const { context } = require("../../db/connection");

/**
 * Defines schema for a record, within the Authors table, in the database.
 */
const Author = context.define("Author", {
	/**
	 * Gets or sets the name of the author.
	 */
	authorName: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Author;
