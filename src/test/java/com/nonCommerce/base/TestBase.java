package com.nonCommerce.base;

import java.util.Properties;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import com.nonCommerce.pageObjects.AddCustomerPage;
import com.nonCommerce.pageObjects.LoginPage;
import com.nonCommerce.pageObjects.SearchCustomerPage;

public class TestBase {

	public WebDriver driver;
	public LoginPage loginpage;
	public AddCustomerPage addCust ;
	public SearchCustomerPage searchCust;
	public static Logger logger;
	public Properties prop;
	
	
	
	// Utility for generating random string for unique Email Id
		public static String generateRandamString()
		{
			
			String randomString = RandomStringUtils.randomAlphabetic(5);
			return randomString;
		}
		
		

}
