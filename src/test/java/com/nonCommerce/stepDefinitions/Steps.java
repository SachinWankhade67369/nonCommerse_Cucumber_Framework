package com.nonCommerce.stepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import com.nonCommerce.base.TestBase;
import com.nonCommerce.pageObjects.AddCustomerPage;
import com.nonCommerce.pageObjects.LoginPage;
import com.nonCommerce.pageObjects.SearchCustomerPage;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class Steps extends TestBase {

	// Before hook will executed only once before the class.
	@Before
	public void setUp() {
		
		// Initializing log4j.properties file
		logger = Logger.getLogger("nonCommerce"); // Adding Logger
		PropertyConfigurator.configure("log4j.properties"); // Adding Logger

		// initializing and reading config.properties file
		FileInputStream fis = null;
		prop = new Properties();

		try {

			fis = new FileInputStream("config.properties");
			prop.load(fis);

		} catch (FileNotFoundException e) {

			System.out.println("File not found at particular location: " + e.getMessage());

		} catch (IOException e) {
			e.printStackTrace();
		}

//		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "//Drivers/chromedriver.exe");

		String browserName = prop.getProperty("browser");

		if (browserName.equalsIgnoreCase("chrome")) {
		
			System.setProperty("webdriver.chrome.driver", prop.getProperty("chromepath"));
			driver = new ChromeDriver();
	
		} else if (browserName.equalsIgnoreCase("firefox")) {
			
			System.setProperty("webdriver.gecko.driver", prop.getProperty("firefoxpath"));
			driver = new FirefoxDriver();
			
		} else if (browserName.equalsIgnoreCase("InternetExplore")) {
			
			System.setProperty("webdriver.ie.driver", prop.getProperty("iepath"));
			driver = new InternetExplorerDriver();

		}

		logger.info("********* Launching Browser ************");

	}

	@Given("^User launch Chrome browser$")
	public void user_launch_Chrome_browser() throws Throwable {

		loginpage = new LoginPage(driver);
	}

	@When("^User open URL \"([^\"]*)\"$")
	public void user_open_URL(String url) throws Throwable {

		logger.info("********* Opening URL ************");

		driver.get(url);
		driver.manage().window().maximize();
	}

	@When("^User enters Email as \"([^\"]*)\" and Password as \"([^\"]*)\"$")
	public void user_enters_Email_as_and_Password_as(String username, String password) throws Throwable {

		logger.info("********* Providing LOGIN Details ************");

		loginpage.setUserName(username);
		loginpage.setPassword(password);

	}

	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {

		logger.info("********* Started Login Process ************");

		loginpage.clickLogin();
	}

	@Then("^Page Title should be \"([^\"]*)\"$")
	public void page_Title_should_be(String title) throws Throwable {

		if (driver.getPageSource().contains("Login was unsuccessful.")) {

			logger.info("********* Login Failed ************");

			driver.close();
			Assert.assertTrue(false);

		} else {

			Assert.assertEquals(title, driver.getTitle());

			logger.info("********* Login Passed ************");
		}

	}

	@When("^User click on Log out Link$")
	public void user_click_on_Log_out_Link() throws Throwable {

		logger.info("********* Click in LogOut Link ************");

		Thread.sleep(3000);
		loginpage.clickLogout();
	}

	@Then("^User close the browser$")
	public void user_close_the_browser() throws Throwable {

		logger.info("********* Closing Browser ************");

		driver.quit();

	}

	// AddCustomer feature step definitions

	@Then("^User can view Dashboard$")
	public void user_can_view_Dashboard() throws Throwable {

		addCust = new AddCustomerPage(driver);
		Assert.assertEquals("Dashboard / nopCommerce administration", addCust.getPageTitle());

	}

	@When("^User click on customer Menu$")
	public void user_click_on_customer_Menu() throws Throwable {

		Thread.sleep(2000);
		addCust.clickOnCustomerMenu();

	}

	@When("^click on customer menu Item$")
	public void click_on_customer_menu_Item() throws Throwable {
		Thread.sleep(3000);
		addCust.clickOnCustomerMenuItem();
	}

	@When("^click on Add new button$")
	public void click_on_Add_new_button() throws Throwable {
		Thread.sleep(3000);
		addCust.clickOnAddNew();
	}

	@Then("^User can view Add new Customer page$")
	public void user_can_view_Add_new_Customer_page() throws Throwable {
		Assert.assertEquals("Add a new customer / nopCommerce administration", addCust.getPageTitle());
	}

	@When("^User enter customer info$")
	public void user_enter_customer_info() throws Throwable {

		logger.info("********* Adding New Customer ************");

		logger.info("********* Providing Customer Details ************");

		String email = generateRandamString() + "@gmail.com";
		addCust.setEmail(email);
		addCust.setPassword("test123");
		addCust.setFirstName(generateRandamString() + "John");
		addCust.setLastName(generateRandamString() + "Vector");

		addCust.setGendor("Male");

		addCust.setDateOfBirth("10/11/1990"); // Format D/MM/YYY

		addCust.setCompanyName("abc infotech prt. ltd");

		/*
		 * Registered - Default The Customer can not be in both "Guests" and
		 * "Registered" customer role Add customer to the "Guests" or "Registered"
		 * customer role
		 */
		addCust.setCustomerRole("Vendors");
		Thread.sleep(3000);

		addCust.setManagerOfVendors("Vendor 2");
		addCust.setAdminComment("This is for testing.");
		Thread.sleep(5000);

	}

	@When("^click on save button$")
	public void click_on_save_button() throws Throwable {

		logger.info("********* Saving Customer Details ************");

		addCust.clickOnSave();
		Thread.sleep(2000);
	}

	@Then("^User can view information message \"([^\"]*)\"$")
	public void user_can_view_information_message(String msg) throws Throwable {

//		Assert.assertTrue(driver.findElement(By.tagName("body")).getText()
//				.contains("The new customer has been added successfully."));

		Assert.assertTrue(driver.findElement(By.tagName("body")).getText().contains(msg));
	}

	// Search Customer by email id functionality

	@When("^enter customer Email$")
	public void enter_customer_Email() throws Throwable {

		logger.info("********* Searching Customer Details by using Email Id ************");

		searchCust = new SearchCustomerPage(driver);

		searchCust.setEmail("victoria_victoria@nopCommerce.com");
	}

	@When("^click on Search button$")
	public void click_on_Search_button() throws Throwable {

		searchCust.clickOnSearch();
		Thread.sleep(5000);
	}

	@Then("^user should found Email in the Search table$")
	public void user_should_found_Email_in_the_Search_table() throws Throwable {

		boolean status = searchCust.searchCustomerByEmailId("victoria_victoria@nopCommerce.com");
		Assert.assertEquals(true, status);
	}

	// Steps for searching a Customer by using First Name and Last Name

	@When("^enter customer FirstName$")
	public void enter_customer_FirstName() throws Throwable {

		logger.info("********* Searching Customer Details by using Name ************");

		searchCust = new SearchCustomerPage(driver); // We have to define again because new scenario started here.

		searchCust.setfirstName("Victoria");

	}

	@When("^enter customer LastName$")
	public void enter_customer_LastName() throws Throwable {

		searchCust.setLastName("Terces");
	}

	@Then("^user should found Name in the Search table$")
	public void user_should_found_Name_in_the_Search_table() throws Throwable {

		boolean status = searchCust.searchCustomerByName("Victoria Terces");
		Assert.assertEquals(status, true);
	}

}
