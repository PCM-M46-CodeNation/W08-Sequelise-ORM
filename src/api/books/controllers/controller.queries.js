const Book = require("../model");

module.exports = {
	/**
	 * Get a list of all books, and sends a JSON response with a
	 * success message and the list of books, or an error message and error object.
	 *
	 * @function
	 * @name getAllBooks
	 * @param {Object} req - The request object, un-used in this query.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 200 - An array of all the books in the database.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	getAllBooks: async (req, res) => {
		try {
			const books = await Book.findAll({
				include: { all: true, nested: true },
			});
			res.status(200).json({
				message: "success",
				books: books,
			});
		} catch (error) {
			res.status(501).json({
				message: error.message,
				error: error,
			});
		}
	},
};
