const Author = require("../api/authors/model");
const Book = require("../api/books/model");
const Genre = require("../api/genres/model");

/**
 * Create table structure between DB and ORM.
 */
const synchroniseTables = function () {
	// NOTE: { alter: true } shouldn't be used within a production environment.
	// It is a hack, to avoid needing to fully migrate the database, when making
	// changes to the database structure. This will directly mutate database schema,
	// potentially causing irrecoverable breaking changes, and data corruption.
	// USE WITH CAUTION!
	Author.sync({ alter: true });
	Genre.sync({ alter: true });
	Book.sync({ alter: true });
};

/**
 * Create relational mappings between tables.
 */
const mapRelationships = function () {
	Author.hasMany(Book, {
		foreignKey: {
			name: "author_id",
			allowNull: false,
		},
	});

	Genre.hasMany(Book, {
		foreignKey: {
			name: "genre_id",
			allowNull: false,
		},
	});

	Book.belongsTo(Author, {
		foreignKey: {
			name: "author_id",
			allowNull: false,
		},
	});

	Book.belongsTo(Genre, {
		foreignKey: {
			name: "genre_id",
			allowNull: false,
		},
	});
};

module.exports = {
	synchroniseTables,
	mapRelationships,
};
