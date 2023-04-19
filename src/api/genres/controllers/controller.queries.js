const Book = require("../../books/model");

module.exports = {
	/**
	 * Get a list of all books within a given genre, and sends a JSON response with a
	 * success message and the list of books, or an error message and error object.
	 *
	 * @function
	 * @name addGenre
	 * @param {Object} req - The request object containing the genre data in the request body.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 200 - An array of books, within the given genre.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	getAllBooks: (req, res) => {
		Book.findAll({ where: { genre_id: req.params.genre_id } })
			.then(books =>
				res.status(200).json({
					message: "success",
					booksByGenre: books,
				}),
			)
			.catch(e =>
				res.status(501).json({
					message: e.message,
					error: e,
				}),
			);
	},
};
