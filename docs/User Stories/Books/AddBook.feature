Feature: Add Book
    As a user, I want to be able to add books in the database.

    @Books
    Scenario: Good Path: User adds a book to the database successfully
        Given the user has entered valid book data,
        When the user sends a POST request to the "/books/addbook" endpoint with the valid book data,
        Then the response status code should be 201,
        And the response message should be "success",
        And the response body should contain the book object with an id and book name.

    @Books
    Scenario: Bad Path: User fails to add a book to the database due to server error
        Given the user has entered invalid book data
        When the user sends a POST request to the "/books/addbook" endpoint with the invalid book data
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.