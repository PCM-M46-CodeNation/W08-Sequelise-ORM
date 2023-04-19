const Author = require("../api/authors/model");
const Book = require("../api/books/model");
const Genre = require("../api/genres/model");

/**
 * Create table structure between DB and ORM.
 */
const synchroniseTables = function () {
	Author.sync();
	Genre.sync();
	Book.sync();
};

/**
 * Create relational mappings between tables.
 */
const mapRelationships = function () {
	Author.hasMany(Book, { foreignKey: "author_id" });
	Book.belongsTo(Author, { foreignKey: "author_id" });

	Genre.hasMany(Book, { foreignKey: "genre_id" });
	Book.belongsTo(Genre, { foreignKey: "genre_id" });
};

module.exports = {
	synchroniseTables,
	mapRelationships,
};
