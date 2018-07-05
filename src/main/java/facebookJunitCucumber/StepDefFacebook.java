package facebookJunitCucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefFacebook {
	WebDriver driver;
	@Given("^user navigate to facebook page$")
	public void user_navigate_to_facebook_page() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "./browserdrivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	}

	@When("^user enter the credentials$")
	public void user_enter_the_credentials() throws Throwable {
		System.out.println("when logic");
		driver.findElement(By.id("email")).sendKeys("fedfadf");
		driver.findElement(By.id("pass")).sendKeys("dfdsfsdf");
		driver.findElement(By.xpath("//input[@value = 'Log In']")).click();
		
	}
	
	
	@Then("^user clicks the login button$")
	public void user_clicks_the_login_button() throws Throwable {
		driver.findElement(By.xpath("//input[@value = 'Log In']")).click();

	}

}
