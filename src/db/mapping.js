const Author = require("../api/authors/model");
const Book = require("../api/books/model");
const Genre = require("../api/genres/model");

module.exports = {
	/**
	 * Create table structure between DB and ORM.
	 */
	synchroniseTables: function () {
		// NOTE: { alter: true } shouldn't be used within a production environment.
		// It is a hack, to avoid needing to fully migrate the database, when making
		// changes to the database structure. This will directly mutate database schema,
		// potentially causing irrecoverable breaking changes, and data corruption.
		// USE WITH CAUTION!
		Author.sync({ alter: true });
		Genre.sync({ alter: true });
		Book.sync({ alter: true });
	},

	/**
	 * Create relational mappings between tables.
	 */
	mapRelationships: function () {
		/**
		 * One -> Many Optional Relationship: Author have have many Books.
		 */
		Author.hasMany(Book, {
			foreignKey: {
				name: "author_id",
				allowNull: false,
			},
		});

		/**
		 * One -> Many Optional Relationship: Genre may have many Books.
		 */
		Genre.hasMany(Book, {
			foreignKey: {
				name: "genre_id",
				allowNull: false,
			},
		});

		/**
		 * One -> One Required Relationship: Book has an Author.
		 */
		Book.belongsTo(Author, {
			foreignKey: {
				name: "author_id",
				allowNull: false,
			},
		});

		/**
		 * One -> One Required Relationship: Book has a Genre.
		 */
		Book.belongsTo(Genre, {
			foreignKey: {
				name: "genre_id",
				allowNull: false,
			},
		});
	},
};
