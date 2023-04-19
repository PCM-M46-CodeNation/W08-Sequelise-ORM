const Genre = require("../model");

module.exports = {
	/**
	 * Creates a new genre using the request body data and sends a JSON response with a
	 * success message and the created genre object or an error message and error object.
	 *
	 * @function
	 * @name addGenre
	 * @param {Object} req - The request object containing the genre data in the request body.
	 * @param {Object} res - The response object to send the JSON response.
	 * @returns {Object} 201 - The newly created Genre record.
	 * @throws {Error} 501 - The details of the exception that was thrown.
	 */
	addGenre: (req, res) => {
		Genre.create(req.body)
			.then(g =>
				res.status(201).json({
					message: "success",
					genre: g,
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
