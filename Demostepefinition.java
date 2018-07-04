package test.cucumber;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Demostepefinition {
static WebDriver driver;

@Given("^user navigates to demo page$")
public void user_navigates_to_demo_page() throws Throwable {
	System.setProperty("webdriver.chrome.driver", "G:\\Santhosh\\New_Wrkspace\\cucumber\\ drivers\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("http://demoqa.com/registration/");
}
  

@When("^user enters firstname and lastname airports$")
public void user_enters_firstname_and_lastname_airports() throws Throwable {
	driver.findElement(By.id("name_3_firstname")).sendKeys("santhosh");
	driver.findElement(By.id("name_3_lastname")).sendKeys("kumar");
}

@Then("^user verify first name ane last name button$")
public void user_verify_first_name_ane_last_name_button() throws Throwable {
    Assert.assertEquals(driver.findElement(By.id("name_3_firstname")).getAttribute("value"), "santhosh");
    Assert.assertEquals(driver.findElement(By.id("name_3_lastname")).getAttribute("value"), "kumar");
}

@When("^user click matrial status ans hobby buttons$")
public void user_click_matrial_status_ans_hobby_buttons() throws Throwable {
	driver.findElement(By.xpath("//input[@value='single']")).click();
	driver.findElement(By.xpath("//*[@id=\"pie_register\"]/li[3]/div/div/input[1]")).click();
}

@Then("^user  selction country$")
public void user_selction_country() throws Throwable {
	WebElement dtn = driver.findElement(By.id("dropdown_7"));
	Select s1=new Select(dtn);
	s1.selectByValue("India");
}
@Then("^user  verify the country$")
public void user_verify_the_country() throws Throwable {
	Assert.assertEquals(driver.findElement(By.id("dropdown_7")).getAttribute("value"),"India");    
}






}