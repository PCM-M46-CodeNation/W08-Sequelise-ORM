Feature: Delete Single Book
    As a user, I want to be able to get a delete a single book, in the database.

    @Books
    Scenario: Good Path: User deletes a book from the database successfully
        Given the user has an existing book with title "Book Title"
        When the user sends a DELETE request to "/books/deletebook" with the request body
        Then the response status code should be 201
        And the response should contain the number of records removed

    @Books
    Scenario: Bad Path: User fails to delete a book from the database due to server error
        Given the user has a non-existent book with title "Non-Existent Book Title"
        When the user sends a DELETE request to "/books/deletebook" with the request body
        Then the response status code should be 501
        And the response should contain the details of the exception that was thrown