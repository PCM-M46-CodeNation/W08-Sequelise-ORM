const Genre = require("../model");
const Book = require("../../books/model");

module.exports = {
	/**
	 * Get a list of all books within a given genre, and sends a JSON response with a
	 * success message and the list of books, or an error message and error object.
	 *
	 * @function
	 * @name getAllBooks
	 * @param {Object} req - The request object containing the genre data in the request parameter.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 200 - An array of books, within the given genre.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	getAllBooks: async (req, res) => {
		try {
			const genre = await Genre.findOne({
				where: { genre: req.params.genre },
				include: { all: true, nested: true },
			});
			res.status(200).json({
				message: "success",
				booksByGenre: genre,
			});
		} catch (error) {
			res.status(501).json({
				message: error.message,
				error: error,
			});
		}
	},
};
