const Author = require("../model");

module.exports = {
	/**
	 * Creates a new author using the request body data and sends a JSON response with a
	 * success message and the created author object or an error message and error object.
	 *
	 * @function
	 * @name addAuthor
	 * @param {Object} req - The request object containing the author data in the request body.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 201 - The newly created Author record.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	addAuthor: (req, res) => {
		Author.create(req.body)
			.then(a =>
				res.status(201).json({
					message: "success",
					author: a,
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
