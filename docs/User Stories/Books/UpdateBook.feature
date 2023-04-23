Feature: Update Book
    As a user, I want to be able to update a book in the database, by title.

    @Books
    Scenario: Good Path: User updates an existing book within the database successfully
        Given the user has an existing book with title "<title>"
        And the user wants to update the book "<key>" property to "<value>"
        When the user sends a PUT request to "/books/updatebook" with the request body
        Then the response status code should be 201
        And the response should contain the updated Book record

    @Books
    Scenario: Good Path: User fails to update a book, due to server error
        Given the user has a non-existent book with title "Non-Existent Book Title"
        And the user wants to update the book "author_id" property to "<New Author Id>"
        When the user sends a PUT request to "/books/updatebook" with the request body
        Then the response status code should be 501
        And the response should contain the details of the exception that was thrown