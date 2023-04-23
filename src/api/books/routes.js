const { Router } = require("express");
const { commands, queries } = require("./controllers");
const router = Router();

/**
 * @typedef {object} BookAddRequestBody
 * @property {string} title - Required. The title of the book.
 * @property {number} author_id - Required. The ID of the author, in the Authors table.
 * @property {number} genre_id - Required. The ID of the genre, in the Genres table.
 */

/**
 * @typedef {object} BookUpdateRequestBody
 * @property {string} title - Required. The title of the book.
 * @property {string} key - Required. The key of the property to update.
 * @property {*} value - Required. The value of the property to update.
 */

/**
 * @typedef {object} BookDeleteRequestBody
 * @property {string} title - Required. The title of the book.
 */

// ===================================================================================
//  COMMANDS
// ===================================================================================

/**
 * Creates a new book using the request body data and sends a JSON response with a
 * success message and the created Book object or an error message and error object.
 *
 * @route POST /books/addbook
 * @group Books
 * @param {BookAddRequestBody.model} req.body.required - The book to create.
 * @returns {Book.model} 201 - The newly created Author record.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.post("/addbook", commands.addBook);

/**
 * Updates an existing book using the request body data and sends a JSON response with a
 * success message and the updated Book object or an error message and error object.
 *
 * @route PUT /books/updatebook
 * @group Books
 * @param {BookUpdateRequestBody.model} req.body.required - The request object containing the book data in the request body.
 * @returns {Object} 201 - The updated Book record.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.put("/updatebook", commands.updateBook);

/**
 * Deletes existing books, using the request body data and sends a JSON response with a
 * success message and the number of records removed, or an error message and error object.
 *
 * @route DELETE /books/deletebook
 * @group Books
 * @param {BookDeleteRequestBody.model} req.body.required - The request object containing the book data in the request body.
 * @returns {Object} 201 - The number of records removed.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.delete("/deletebook", commands.deleteBook);

/**
 * Deletes all existing books within the database, and sends a JSON response with a
 * success message and the number of records removed, or an error message and error object.
 *
 * @route DELETE /books/deleteallbooks
 * @group Books
 * @returns {Object} 201 - The number of records removed.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.delete("/deleteallbooks", commands.deleteAllBooks);

// ===================================================================================
//  QUERIES
// ===================================================================================

/**
 * Get a list of all books, and sends a JSON response with a
 * success message and the list of books, or an error message, and error object.
 *
 * @route GET /books/getallbooks
 * @group Books
 * @returns {Object} 200 - An array of all the books in the database.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.get("/getallbooks", queries.getAllBooks);

/**
 * Gets a single book, filtered by its title, and sends a JSON response with a
 * success message and the book, or an error message, and error object.
 *
 * @route GET /books/getbook/:title
 * @group Books
 * @param {String} req.param.required - The title of the book to get.
 * @returns {Object} 200 - The detail of the single requested book.
 * @throws {Error} 501 - The details of the exception that was thrown.
 */
router.get("/getbook/:title", queries.getSingleBookByTitle);

module.exports = router;
