Feature: Get Books by Author
    As a user, I want to be able to get all books written by a certain author, from the database.

    @Authors
    Scenario: Good Path: User retrieves all books written by a certain author successfully
        Given the user has provided a valid author name
        When the user sends a GET request to the "/authors/getauthorandbooks/:authorname" endpoint with the valid author name
        Then the response status code should be 200,
        And the response message should be "success",
        And the response body should contain details of the requrested author,
        And a nested array of book objects with title, author, and genre.

    @Authors
    Scenario: Bad Path: User fails to retrieve books due to invalid or non-existent author
        Given the user has provided an invalid or non-existent author name
        When the user sends a GET request to the "/authors/getauthorandbooks/:authorname" endpoint with the invalid or non-existent author name
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.
