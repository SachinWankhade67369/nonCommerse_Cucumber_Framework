package com.nonCommerce.pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class AddCustomerPage {

	public WebDriver ldriver;

	// Page Factory
	public AddCustomerPage(WebDriver rdriver) {

		ldriver = rdriver;
		PageFactory.initElements(ldriver, this);

	}

	// Page Objects / Object Repository

	By lnkCustomers_Menu = By.xpath("//a[@href='#']//span[contains(text(),'Customers')]");
	By lnkCustomers_menuitems = By
			.xpath("//a[@href=\"/Admin/Customer/List\"]//span[contains(@class,'menu-item-title')]");

	By btn_AddNew = By.xpath("//a[@class=\"btn bg-blue\"]"); // add new

	By txtEmail = By.id("Email");
	By txtPassword = By.id("Password");

	By txtFirstName = By.id("FirstName");
	By txtLastname = By.id("LastName");

	By Rbtn_MaleGendor = By.xpath("//input[@id='Gender_Male']");
	By Rbtn_FemaleGendor = By.xpath("//input[@id='Gender_Female']");

	By txtCustomerRoles = By.xpath("//div[@class=\"k-multiselect-wrap k-floatwrap\"]");

	By listItemAdminstrator = By.xpath("//li[contains(text(),'Administrators')]");
	By listItemRegistered = By.xpath("//li[contains(text(),'Registered')]");
	By listItemGuests = By.xpath("//li[contains(text(),'Guests')]");
	By listItemVendors = By.xpath("//li[contains(text(),'Vendors')]");

	By dropMngsOfVendors = By.xpath("//select[@id='VendorId']");

	By txtDateOfbirth = By.xpath("//input[@id='DateOfBirth']");
	By txtCompanyname = By.id("Company");

	By txtAdminContain = By.id("AdminComment");

	By btnSave = By.xpath("//button[@name='save' and @class='btn bg-blue']");

	// Actions methods
	
	public String getPageTitle() {
		return ldriver.getTitle();
	}
	
	

	public void clickOnCustomerMenu() {
		ldriver.findElement(lnkCustomers_Menu).click();
	}

	public void clickOnCustomerMenuItem() {
		ldriver.findElement(lnkCustomers_menuitems).click();
	}

	public void clickOnAddNew() {
		ldriver.findElement(btn_AddNew).click();
	}

	public void setEmail(String email) {

		ldriver.findElement(txtEmail).clear();
		ldriver.findElement(txtEmail).sendKeys(email);

	}

	public void setPassword(String password) {

		ldriver.findElement(txtPassword).clear();
		ldriver.findElement(txtPassword).sendKeys(password);

	}

	public void setFirstName(String fname) {

		ldriver.findElement(txtFirstName).clear();
		ldriver.findElement(txtFirstName).sendKeys(fname);

	}

	public void setLastName(String lname) {

		ldriver.findElement(txtLastname).clear();
		ldriver.findElement(txtLastname).sendKeys(lname);

	}

	public void setGendor(String gendor) {

		if (gendor.equals("Male")) {
			ldriver.findElement(Rbtn_MaleGendor).click();
		} else if (gendor.equals("Female")) {
			ldriver.findElement(Rbtn_FemaleGendor).click();
		} else {
			ldriver.findElement(Rbtn_MaleGendor).click(); // Default
		}

	}

	public void setDateOfBirth(String dob) {
		ldriver.findElement(txtDateOfbirth).sendKeys(dob);
	}

	public void setCompanyName(String cmpName) {
		ldriver.findElement(txtCompanyname).sendKeys(cmpName);
	}

	public void setCustomerRole(String custRole) throws Exception {

		ldriver.findElement(txtCustomerRoles).click();

		WebElement lists;

		if (custRole.equals("Administrators")) {
			lists = ldriver.findElement(listItemAdminstrator);
		} else if (custRole.equals("Guests")) {
			lists = ldriver.findElement(listItemGuests);
		} else if (custRole.equals("Registered")) {
			lists = ldriver.findElement(listItemRegistered);
		} else if (custRole.equals("Vendors")) {
			lists = ldriver.findElement(listItemVendors);
		} else {
			lists = ldriver.findElement(listItemGuests);
		}

		Thread.sleep(3000);
//		lists.click();

		JavascriptExecutor js = (JavascriptExecutor) ldriver;
		js.executeScript("arguments[0].click();", lists);

	}

	public void setManagerOfVendors(String value) {

		Select dropManVen = new Select(ldriver.findElement(dropMngsOfVendors));
		dropManVen.selectByVisibleText(value);

	}

	public void setAdminComment(String comment) {
		
		ldriver.findElement(txtAdminContain).sendKeys(comment);
	}

	public void clickOnSave() {
		
		ldriver.findElement(btnSave).click();
	}

}
