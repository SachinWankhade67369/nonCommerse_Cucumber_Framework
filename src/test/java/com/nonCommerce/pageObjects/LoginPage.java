package com.nonCommerce.pageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
	
	public WebDriver ldriver;
	// Object Repository
	
	@FindBy (id = "Email")
	@CacheLookup
	WebElement txtEmailID;
	
	@FindBy (id = "Password")
	@CacheLookup
	WebElement txtPassword;
	
	@FindBy (xpath = "//input[contains(@type,'submit')]")
	@CacheLookup
	WebElement Btnlogin;
	
	@FindBy (linkText = "Logout")
	@CacheLookup
	WebElement LinkLogout;
	
	
	//Page Factory
	
	public LoginPage( WebDriver rdriver) {
		ldriver = rdriver;
		PageFactory.initElements(rdriver, this);
		
	}
	
	//Actions to be Validate
	
	public void setUserName(String uname) {
		
		txtEmailID.clear();
		txtEmailID.sendKeys(uname);
	}
	
	
	public void setPassword (String pwd) {
		txtPassword.clear();
		txtPassword.sendKeys(pwd);
	}
	
	public void clickLogin() {
		Btnlogin.click();
	}
	
	public void clickLogout() {
		LinkLogout.click();
	}
	
	

}
