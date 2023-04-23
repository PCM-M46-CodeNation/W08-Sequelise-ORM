Feature: Get Books by Genre
    As a user, I want to be able to get all books of a certain genre from the database.

    @Genres
    Scenario: Good Path: User retrieves all books of a certain genre successfully
        Given the user has provided a valid genre name
        When the user sends a GET request to the "/genres/getbooksbygenre/:genre" endpoint with the valid genre name
        Then the response status code should be 200,
        And the response message should be "success",
        And the response body should contain details of the requrested genre,
        And a nested array of book objects with title, author, and genre.

    @Genres
    Scenario: Bad Path: User fails to retrieve books due to invalid or non-existent genre
        Given the user has provided an invalid or non-existent genre name
        When the user sends a GET request to the "/genres/getbooksbygenre/:genre" endpoint with the invalid or non-existent genre name
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.
