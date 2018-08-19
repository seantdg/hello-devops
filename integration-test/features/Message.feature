Feature: 
    As a user
    I want the system to say hello
    So that I feel welcome

    Scenario: Happy Path
    When I GET /
    Then response code should be 200
    And response body should contain Hello Blu.
