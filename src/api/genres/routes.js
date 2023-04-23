const { Router } = require("express");
const { commands, queries } = require("./controllers");
const router = Router();

/**
 * @typedef {object} GenreRequestBody
 * @property {string} genre - Required. The name of the genre.
 */

// ===================================================================================
//  COMMANDS
// ===================================================================================

/**
 * Creates a new genre using the request body data and sends a JSON response with a
 * success message and the created genre object or an error message and error object.
 *
 * @route POST /genres/addgenre
 * @group Genres
 * @param {GenreRequestBody.model} req.body.required - The genre to create.
 * @returns {Author.model} 201 - The newly created Genre record.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.post("/addgenre", commands.addGenre);

// ===================================================================================
//  QUERIES
// ===================================================================================

/**
 * Get a list of all books within a given genre, and sends a JSON response with a
 * success message and the list of books, or an error message and error object.
 *
 * @route GET /genres/getbooksbygenre/:genre
 * @group Genres
 * @returns {Object} 200 - An array of books, with the given genre.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.get("/getbooksbygenre/:genre", queries.getAllBooks);

module.exports = router;
