Feature: Delete All Books
    As a user, I want to be able to get a delete all books from the database.

    @Books
    Scenario: Good Path: User deletes all books from the database successfully
        Given the user has at least one book in the database,
        When the user sends a DELETE request to "/books/deleteallbooks",
        Then the response status code should be 201,
        And the response should contain the number of records removed.

    @Books
    Scenario: Bad Path: User fails to delete all books from the database due to server error
        Given the user has no books in the database, or server outage,
        When the user sends a DELETE request to "/books/deleteallbooks",
        Then the response status code should be 501,
        And the response should contain the details of the exception that was thrown.
