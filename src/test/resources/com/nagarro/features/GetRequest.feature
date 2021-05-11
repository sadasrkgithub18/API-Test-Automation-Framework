@GetRequest
Feature: GET Request Calls

  @StatusCode
  Scenario: Verify the status code for a get request
    Given user is on home page to check the status code
    When user calls GetRequestAPI with GET http method
    Then the API call got success with status code should be 200

  @FirstName
  Scenario: Verify the first name for the user id 10
    Given user is on home page to check the firstname
    When user calls GetRequestAPI with GET http method
    Then the firstname for user id 10 should be "Byron"
