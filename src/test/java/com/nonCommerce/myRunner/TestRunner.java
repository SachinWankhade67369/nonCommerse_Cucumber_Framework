package com.nonCommerce.myRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

		features = ".//Features/",
		glue = {"com.nonCommerce.stepDefinitions" }, 
		monochrome = true, 
//		format = {"pretty","html: test-Output" },
		dryRun = false, 
//		tags = {"@sanity"}
		
		tags = {"@sanity , @smoke , @regression"}  // OR Tags
//		tags = {"@sanity"," @smoke" , "@regression"} // AND Tags

)

public class TestRunner {

}
