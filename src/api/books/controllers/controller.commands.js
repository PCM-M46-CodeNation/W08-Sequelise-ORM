const Book = require("../model");

module.exports = {
	/**
	 * Creates a new book using the request body data and sends a JSON response with a
	 * success message and the created Book object or an error message and error object.
	 *
	 * @function
	 * @name addBook
	 * @param {Object} req - The request object containing the book data in the request body.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 201 - The newly created Book record.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	addBook: (req, res) => {
		Book.create(req.body)
			.then(b =>
				res.status(201).json({
					message: "success",
					newBook: b,
				}),
			)
			.catch(e =>
				res.status(501).json({
					message: e.message,
					error: e,
				}),
			);
	},

	/**
	 * Deletes existing books, using the request body data and sends a JSON response with a
	 * success message and the number of records removed, or an error message and error object.
	 *
	 * @function
	 * @name deleteBook
	 * @param {Object} req - The request object containing the book data in the request body.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 201 - The number of records removed.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	deleteBook: (req, res) => {
		Book.destroy({
			where: {
				title: req.body.title,
			},
		})
			.then(n => {
				if (n === 0)
					throw new Error(
						`No books found with title: ${req.body.title}`,
					);
				res.status(201).json({
					message: "successfully deleted",
					result: n,
				});
			})
			.catch(e =>
				res.status(501).json({
					message: e.message,
					error: e,
				}),
			);
	},
};
