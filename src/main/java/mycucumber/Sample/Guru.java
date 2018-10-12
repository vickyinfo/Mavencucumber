package mycucumber.Sample;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Guru {
	WebDriver driver;
	@Given("^launch browser$")
	public void launch_browser()  {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Balaji\\work space\\Sample\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/v4/");
	}

	@When("^Enter user name and password$")
	public void enter_user_name_and_password()  {
		driver.findElement(By.name("uid")).sendKeys("mngr157083");
		driver.findElement(By.name("password")).sendKeys("uvUgupA");
		driver.findElement(By.name("btnLogin")).click();
	  
	}

	@Then("^I validate output$")
	public void i_validate_output() {
		 Assert.assertEquals("Welcome To Manager's Page of GTPL Bank",driver.findElement(By.tagName("marquee")).getText() );	 
	System.out.println("done");
	}

	

}
