const Author = require("../model");
const Book = require("../../books/model");

module.exports = {
	/**
	 * Get a list of all books with a given author, and sends a JSON response with a
	 * success message and the list of books, or an error message and error object.
	 *
	 * @function
	 * @name getAuthorAndBooks
	 * @param {Object} req - The request object containing the author data in the request parameters.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 200 - An array of books, with the given author.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	getAuthorAndBooks: async (req, res) => {
		try {
			const author = await Author.findOne({
				where: { authorName: req.params.authorname },
				include: { model: Book },
			});
			res.status(200).json({
				message: "success",
				author: author,
			});
		} catch (error) {
			res.status(501).json({
				message: e.message,
				error: e,
			});
		}
	},
};
