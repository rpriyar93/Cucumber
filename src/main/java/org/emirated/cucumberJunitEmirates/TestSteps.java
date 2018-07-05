package org.emirated.cucumberJunitEmirates;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestSteps {
	static WebDriver driver;

	@Given("^the user is in demoqa home page$")
	public void the_user_is_in_demoqa_home_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Rahulji\\eclipse-practice\\SELENI\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demoqa.com/registration/");
		 
	}

	@When("^the user enters first name$")
	public void the_user_enters_first_name() throws Throwable {
		driver.findElement(By.id("name_3_firstname")).sendKeys("greens");
		driver.findElement(By.id("name_3_lastname")).sendKeys("Technology");
		Assert.assertEquals(driver.findElement(By.id("name_3_firstname")).getAttribute("value"), "greens");
		Assert.assertEquals(driver.findElement(By.id("name_3_lastname")).getAttribute("value"), "Technology");
		WebElement drop = driver.findElement(By.id("dropdown_7"));
		Select sl=new Select(drop);
	sl.selectByValue("India");
	}

	@Then("^the user verifies the entered text$")
	public void the_user_verifies_the_entered_text() throws Throwable {
		//Assert.assertEquals(driver.findElement(By.id("name_3_firstname")).getAttribute("value"), "greens");
		Assert.assertEquals(driver.findElement(By.id("dropdown_7")).getAttribute("value"),"India");
		

	}

}
