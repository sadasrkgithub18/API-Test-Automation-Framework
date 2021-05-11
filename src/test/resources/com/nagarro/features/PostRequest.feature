@PostRequest
Feature: POST Request Calls

  @StatusCode
  Scenario: Verify the status code for a post request
    Given user is on home page to check the status code during post request
    When user calls PostRequestAPI with POST http method
    Then the API call got success with status code for post request should be 201

  @IDCheckAndSchemeheck
  Scenario: Verify that ID is generated or not when we do POST Request
    Given user is on home page to check the ID during POST request
    When user calls PostRequestAPI with POST http method
    Then the API call output should contain ID field
    Then Verify the response JSON scheme
