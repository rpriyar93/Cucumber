package org_121.tentng;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class testdemo {
	static WebDriver driver;
	@Given("^The user is in demoqa homepage$")
	public void the_user_is_in_demoqa_homepage() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\hp\\Desktop\\priya\\priyaram\\priyaR\\Facebook\\driver\\chromedriver.exe");
	 driver = new ChromeDriver();
		driver.get("http://demoqa.com/registration/");
}

	@When("^The user enter fname,last name$")
	public void the_user_enter_fname_last_name() throws Throwable {
		
		 driver.findElement(By.id("name_3_firstname")).sendKeys("priya");
		 driver.findElement(By.id("name_3_lastname")).sendKeys("ram");
		 
}

	@Then("^The user verifies the entered text$")
	public void the_user_verifies_the_entered_text() throws Throwable {
		Assert.assertEquals(driver.findElement(By.id("name_3_firstname")).getAttribute("value"), "priya");
		Assert.assertEquals(driver.findElement(By.id("name_3_lastname")).getAttribute("value"), "ram");
		}
	@When("^The user selects country$")
	public void the_user_selects_country() throws Throwable {
		WebElement drop = driver.findElement(By.id("dropdown_7"));
		Select sl=new Select(drop);
	sl.selectByValue("India");
	    
	}

	@Then("^The user verifies the selected country$")
	public void the_user_verifies_the_selected_country() throws Throwable {
		Assert.assertEquals(driver.findElement(By.id("dropdown_7")).getAttribute("value"),"India");
		
	   
	}
	

}
