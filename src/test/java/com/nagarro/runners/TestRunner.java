package com.nagarro.runners;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;


@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/resources/com/nagarro/features", 
                 plugin   = {"pretty","html:target/HTML-Report","json:target/jsonReports/cucumber-report.json"}, 
                 glue     = {"com/nagarro/stepDefinitions"},
                 dryRun   = false,
                 monochrome = true,
                 strict   = false,
                 tags     = {"@GetRequest, @PostRequest"}
                )


public class TestRunner 
{
  
}
