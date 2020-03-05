package com.nonCommerce.pageObjects;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.nonCommerce.base.TestBase;
import com.nonCommerce.utilities.TestUtils;

public class SearchCustomerPage extends TestBase {

	WebDriver ldriver;

	public SearchCustomerPage(WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);
	}

	// OR

	@FindBy(how = How.ID, using = "SearchEmail")
	@CacheLookup
	WebElement txtEmail;

	@FindBy(how = How.ID, using = "SearchFirstName")
	@CacheLookup
	WebElement txtFirstName;

	@FindBy(how = How.ID, using = "SearchLastName")
	@CacheLookup
	WebElement txtLastName;

	@FindBy(how = How.ID, using = "SearchCompany")
	@CacheLookup
	WebElement txtCompany;

	@FindBy(how = How.ID, using = "SearchIpAddress")
	@CacheLookup
	WebElement txtIpAddress;

	@FindBy(how = How.XPATH, using = "//div[@class=\"k-multiselect-wrap k-floatwrap\"]")
	@CacheLookup
	WebElement txtCustomerRoles;

	@FindBy(how = How.XPATH, using = "//li[contains(text(),'Administrators')]")
	@CacheLookup
	WebElement listItemAdministrators;

	@FindBy(how = How.XPATH, using = "//li[contains(text(),'Registered')]")
	@CacheLookup
	WebElement listItemRegistered;

	@FindBy(how = How.XPATH, using = "//li[contains(text(),'Guests')]")
	@CacheLookup
	WebElement listItemGuests;

	@FindBy(how = How.XPATH, using = "//li[contains(text(),'Vendors')]")
	@CacheLookup
	WebElement listItemVendors;

	@FindBy(how = How.ID, using = "search-customers")
	@CacheLookup
	WebElement btnSearchCustomer;

	// table
	@FindBy(how = How.XPATH, using = "//table[contains(@id,'customers-grid')]")
	@CacheLookup
	WebElement table;

	@FindBy(how = How.XPATH, using = "//table[contains(@id,'customers-grid')]//tbody/tr")
	@CacheLookup
	List<WebElement> tableRows;

	@FindBy(how = How.XPATH, using = "//table[contains(@id,'customers-grid')]//tbody/tr/td")
	@CacheLookup
	List<WebElement> tableColumns;

	// Actions Methods

	public void setEmail(String Email) {

		TestUtils.waitForElement(ldriver, txtEmail, 20);
		txtEmail.clear();
		txtEmail.sendKeys(Email);
	}

	public void setfirstName(String fname) {

		TestUtils.waitForElement(ldriver, txtFirstName, 20);
		txtFirstName.clear();
		txtFirstName.sendKeys(fname);
	}

	public void setLastName(String lname) {

		TestUtils.waitForElement(ldriver, txtLastName, 20);
		txtLastName.clear();
		txtLastName.sendKeys(lname);
	}

	public void clickOnSearch() {

		btnSearchCustomer.click();
		TestUtils.waitForElement(ldriver, btnSearchCustomer, 20);
	}

	public int getNoOfRows() {

		return (tableRows.size());
	}

	public int getNoOfColums() {

		return (tableColumns.size());
	}

	public boolean searchCustomerByEmailId(String EmailId) {

		boolean flag = false;

		for (int i = 1; i <= getNoOfRows(); i++) {

			String emailIdText = table
					.findElement(By.xpath("//table[contains(@id,'customers-grid')]//tbody/tr[" + i + "]/td[2]"))
					.getText();

			System.out.println(emailIdText);

			if (emailIdText.equals(EmailId)) {

				flag = true;

			}

		}
		return flag;

	}

	public boolean searchCustomerByName(String Name) {

		boolean flag = false;

		for (int i = 1; i <= getNoOfRows(); i++) {

			String NameText = table
					.findElement(By.xpath("//table[contains(@id,'customers-grid')]//tbody/tr[" + i + "]/td[3]"))
					.getText();

			String[] names = NameText.split(" ");

			if (names[0].contains("Victoria") && names[1].contains("Terces")) {

				flag = true;

			}

		}

		return flag;

	}

}
