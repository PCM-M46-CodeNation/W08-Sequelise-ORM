Feature: Add Genre
    As a user, I want to be able to add genres in the database.

    @Genres
    Scenario: Good Path: User adds an genre to the database successfully
        Given the user has entered valid genre data,
        When the user sends a POST request to the "/genres/addgenre" endpoint with the valid genre data,
        Then the response status code should be 201,
        And the response message should be "success",
        And the response body should contain the genre object with an id and genre name.

    @Genres
    Scenario: Bad Path: User fails to add an genre to the database due to server error
        Given the user has entered invalid genre data
        When the user sends a POST request to the "/genres/addgenre" endpoint with the invalid genre data
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.