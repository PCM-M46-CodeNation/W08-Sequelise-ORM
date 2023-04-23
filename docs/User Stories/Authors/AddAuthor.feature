Feature: Add Author
    As a user, I want to be able to add authors in the database.

    @Authors
    Scenario: Good Path: User adds an author to the database successfully
        Given the user has entered valid author data,
        When the user sends a POST request to the "/authors/addauthor" endpoint with the valid author data,
        Then the response status code should be 201,
        And the response message should be "success",
        And the response body should contain the author object with an id and author name.

    @Authors
    Scenario: Bad Path: User fails to add an author to the database due to server error
        Given the user has entered invalid author data
        When the user sends a POST request to the "/authors/addauthor" endpoint with the invalid author data
        Then the response status code should be 501,
        And the response message should be equal to the message given within the exception,
        And the response body should contain the error message and error object.