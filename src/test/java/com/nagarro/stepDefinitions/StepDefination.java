package com.nagarro.stepDefinitions;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;

import java.io.IOException;

import com.nagarro.pojo.AddUser;
import com.nagarro.resources.APIResURIS;
import com.nagarro.resources.Utils;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;

public class StepDefination extends Utils
{
	
	RequestSpecification res;
	ResponseSpecification resspec;
	Response response;
	String fName;
	
	
	@Given("user is on home page to check the status code")
	public void user_is_on_home_page_to_check_the_status_code() 
	{
	  System.out.println("User is on home page to check the status code for GET Request");
	}

	@When("user calls GetRequestAPI with GET http method")
	public void user_calls_with_http_method() throws IOException 
	{
		response = given().spec(requestSpecification()).when().get(APIResURIS.getRequest);
	
	}

	@Then("the API call got success with status code should be {int}")
	public void the_API_call_got_success_with_status_code_should_be(int code) 
	{
		System.out.println("Status Code for get request is: "+response.getStatusCode());
	    assertEquals(response.getStatusCode(), code);
	}

	@Given("user is on home page to check the firstname")
	public void user_is_on_home_page_to_check_the_firstname() 
	{
	  System.out.println("User is on the home page to check the firstname for user id 10 for GET Request");
	}

	@Then("the firstname for user id {int} should be {string}")
	public void the_for_user_id_should_be(int id, String name) 
	{
		
		String respp = response.asString();
		
		JsonPath js = new JsonPath(respp);
		
		int arraysize = js.getInt("data.size()");
		System.out.println("Data Array Size is: "+arraysize);
		
		for(int i=0;i<arraysize;i++)
		  {
			 int idd = js.getInt("data[" + i + "].id");
			 if(idd == id)
			 {
				 fName= js.get("data[" + i + "].first_name");
				 break;
				 
			 }
		  }
		  System.out.println("FirstName for user id "+id+ " is: "+fName);
		  assertEquals(fName, name);	
		  
		  System.out.println("==============================");
	  }
	


     


     @Given("user is on home page to check the status code during post request")
     public void user_is_on_home_page_to_check_the_status_code_during_post_request() 
     {
       System.out.println("user is on home page to check the status code during post request");
     }

     @When("user calls PostRequestAPI with POST http method")
     public void user_calls_PostRequestAPI_with_POST_http_method() throws IOException 
     {
    	 AddUser userdata = new AddUser();
         userdata.setName("Bryant");
         userdata.setJob("BA");
         
         response = given().spec(requestSpecification()).body(userdata).when().post(APIResURIS.postRequest);
     }

     @Then("the API call got success with status code for post request should be {int}")
     public void the_API_call_got_success_with_status_code_for_post_request_should_be(int code) 
     {
    	 System.out.println("Status Code for POST request is: "+response.getStatusCode());
 	     assertEquals(response.getStatusCode(), code);
     }  
     
     
     
     @Given("user is on home page to check the ID during POST request")
     public void user_is_on_home_page_to_check_the_ID_during_POST_request() 
     {
         System.out.println("user is on home page to check the ID during POST request");
     }

     @Then("the API call output should contain ID field")
     public void the_API_call_output_should_contain_ID_field() 
     {
			
    	 System.out.println("ID Value generated during post request is: " + response.jsonPath().get("id"));
    	
     }

     
     @Then("Verify the response JSON scheme")
     public void verify_the_response_JSON_scheme() 
     {
    	 System.out.println("==================================");
    	 System.out.println("Printing the JSON Response Scheme");
    	 response.prettyPrint();
     }

     
}


