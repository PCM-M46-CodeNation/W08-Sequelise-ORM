const Author = require("../api/authors/model");
const Book = require("../api/books/model");
const Genre = require("../api/genres/model");

/**
 * Create table structure between DB and ORM.
 */
const synchroniseTables = function () {
	Author.sync({ alter: true });
	Genre.sync({ alter: true });
	Book.sync({ alter: true });
};

/**
 * Create relationalmappings between tables.
 */
const mapRelationships = function () {
	Author.hasMany(Book);
	Book.belongsTo(Author);

	Genre.hasMany(Book);
	Book.belongsTo(Genre);
};

module.exports = {
	synchroniseTables,
	mapRelationships,
};
