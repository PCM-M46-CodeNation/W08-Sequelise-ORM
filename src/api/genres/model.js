const { DataTypes } = require("sequelize");
const { context } = require("../../db/connection");

/**
 * Defines schema for a record, within the Genres table, in the database.
 */
const Genre = context.define("Genre", {
	/**
	 * Gets or sets the name of the genre.
	 */
	genre: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
	},
});

module.exports = Genre;
