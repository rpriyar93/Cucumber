package org.emirated.cucumberJunitEmirates;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefEmirates {

	WebDriver driver;

	@Given("^user navigates to emirates\\.com$")
	public void user_navigates_to_emirates_com() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./browserdrivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.emirates.com/in/english/");
	}

	@When("^user enters source and destination airports$")
	public void user_enters_source_and_destination_airports() throws Throwable {
		driver.findElement(By
				.xpath("//*[@id='panel0']/div/div/div/section/div[3]/div[1]/div[1]/div/div[1]/div/div/div[1]/div/input"))
				.clear();
		driver.findElement(By
				.xpath("//*[@id='panel0']/div/div/div/section/div[3]/div[1]/div[1]/div/div[1]/div/div/div[1]/div/input"))
				.sendKeys("BLR");
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@class = 'location__airport__acronym to-highlight']")).click();

	}

	@Then("^user clicks submit button$")
	public void user_clicks_submit_button() throws Throwable {
		Thread.sleep(1000);
		//driver.findElement(By.xpath("//*[@class = 'field__text' and contains(text(), 'Arrival airport')]")).sendKeys("ZVJ");
	}

}
