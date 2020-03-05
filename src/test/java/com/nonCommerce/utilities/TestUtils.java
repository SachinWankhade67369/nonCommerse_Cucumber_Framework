package com.nonCommerce.utilities;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.nonCommerce.base.TestBase;

public class TestUtils extends TestBase {
	
	
	public static void waitForElement(WebDriver driver, WebElement element, long timeoutInSeconds) {
		WebDriverWait wait = new WebDriverWait(driver, timeoutInSeconds);
		wait.until(ExpectedConditions.visibilityOf(element));
	}
	
}
