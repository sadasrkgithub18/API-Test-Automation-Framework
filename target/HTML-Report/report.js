$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/com/nagarro/features/GetRequest.feature");
formatter.feature({
  "name": "GET Request Calls",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GetRequest"
    }
  ]
});
formatter.scenario({
  "name": "Verify the status code for a get request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GetRequest"
    },
    {
      "name": "@StatusCode"
    }
  ]
});
formatter.step({
  "name": "user is on home page to check the status code",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_home_page_to_check_the_status_code()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls GetRequestAPI with GET http method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code should be 200",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify the first name for the user id 10",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GetRequest"
    },
    {
      "name": "@FirstName"
    }
  ]
});
formatter.step({
  "name": "user is on home page to check the firstname",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_home_page_to_check_the_firstname()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls GetRequestAPI with GET http method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_with_http_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the firstname for user id 10 should be \"Byron\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_for_user_id_should_be(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/test/resources/com/nagarro/features/PostRequest.feature");
formatter.feature({
  "name": "POST Request Calls",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@PostRequest"
    }
  ]
});
formatter.scenario({
  "name": "Verify the status code for a post request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest"
    },
    {
      "name": "@StatusCode"
    }
  ]
});
formatter.step({
  "name": "user is on home page to check the status code during post request",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_home_page_to_check_the_status_code_during_post_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls PostRequestAPI with POST http method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_PostRequestAPI_with_POST_http_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call got success with status code for post request should be 201",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_got_success_with_status_code_for_post_request_should_be(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that ID is generated or not when we do POST Request",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@PostRequest"
    },
    {
      "name": "@IDCheckAndSchemeheck"
    }
  ]
});
formatter.step({
  "name": "user is on home page to check the ID during POST request",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefination.user_is_on_home_page_to_check_the_ID_during_POST_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user calls PostRequestAPI with POST http method",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefination.user_calls_PostRequestAPI_with_POST_http_method()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API call output should contain ID field",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.the_API_call_output_should_contain_ID_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify the response JSON scheme",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.verify_the_response_JSON_scheme()"
});
formatter.result({
  "status": "passed"
});
});