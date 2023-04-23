Feature: Get All Books
    As a user, I want to be able to get a list of all books in the database.

    @Books
    Scenario: Good Path: User gets all books successfully
        Given the user wants to retrieve all books,
        When the user sends a GET request to the "/books" endpoint,
        Then the response status code should be 200,
        And the response message should be "success",
        And the response body should contain an array of all the books in the database.

    @Books
    Scenario: Bad Path: User fails to get all books due to server error
        Given the user wants to retrieve all books,
        When the user sends a GET request to the "/books" endpoint, but the server fails to retrieve the books,
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.