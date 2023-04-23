const { Router } = require("express");
const { commands, queries } = require("./controllers");
const router = Router();

/**
 * @typedef {object} AuthorRequestBody
 * @property {string} authorName - Required. The name of the author.
 */

// ===================================================================================
//  COMMANDS
// ===================================================================================

/**
 * Creates a new author using the request body data and sends a JSON response with a
 * success message and the created author object or an error message and error object.
 *
 * @route POST /authors/addauthor
 * @group Authors
 * @param {AuthorRequestBody.model} req.body.required - The author to create.
 * @returns {Author.model} 201 - The newly created Author record.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.post("/addauthor", commands.addAuthor);

// ===================================================================================
//  QUERIES
// ===================================================================================

/**
 * Get a list of all books with a given author, and sends a JSON response with a
 * success message and the list of books, or an error message and error object.
 *
 * @route GET /authors/getauthorandbooks/:authorname
 * @group Authors
 * @returns {Object} 200 - An array of books, with the given author.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.get("/getauthorandbooks/:authorname", queries.getAuthorAndBooks);

module.exports = router;
