Feature: Get Single Book
    As a user, I want to be able to get a single book from the database, by title.

    @Books
    Scenario: Good Path: User gets a single book by title successfully
        Given the user wants to retrieve a book by its title,
        And the title is valid,
        When the user sends a GET request to the "/books/getbook/:title" endpoint,
        Then the response status code should be 200,
        And the response message should be "success",
        And the response body should contain the requested book.

    @Books
    Scenario: Bad Path: User fails to get a single book by title due to server error
        Given the user wants to retrieve a book by its title,
        And the server fails to retrieve the book,
        When the user sends a GET request to the "/books/getbook/:title" endpoint,
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.