package mycucumber.Sample;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Addcustomerguru {
	WebDriver driver;
	@Given("^The User  lanunch   guru demo site$")
	public void the_User_lanunch_guru_demo_site()  {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Balaji\\work space\\Sample\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.guru99.com/v4/");
	  
	}

	@Given("^The User  Enter userName and password and cilck Newcustomer$")
	public void the_User_Enter_userName_and_password_and_cilck_Newcustomer(DataTable details)  {
		Map<String, String> mapdetails = details.asMap(String.class, String.class);
		driver.findElement(By.name("uid")).sendKeys(mapdetails.get("user"));
		driver.findElement(By.name("password")).sendKeys(mapdetails.get("password"));
		driver.findElement(By.name("btnLogin")).click();
		driver.findElement(By.xpath("//a[text()='New Customer']")).click();
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
	  
	}

	@When("^Add new customer  \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"and \"([^\"]*)\"$")
	public void add_new_customer_and(String customer, String gender, String dob, String addrss, String city, String state, String pin, String phone, String email, String pass) {
		driver.findElement(By.xpath("//input[@name='name']")).sendKeys(customer);
		driver.findElement(By.xpath("//input[@value='m']")).click();
		driver.findElement(By.xpath("//input[@name='dob']")).sendKeys(addrss);
		driver.findElement(By.xpath("//input[@name='city']")).sendKeys(city);
		driver.findElement(By.xpath("//input[@name='state']")).sendKeys(state);
		driver.findElement(By.xpath("//input[@name='pinno']")).sendKeys(pin);
		driver.findElement(By.xpath("//input[@name='telephoneno']")).sendKeys(phone);
		driver.findElement(By.xpath("//input[@name='emailid']")).sendKeys(email);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pass);
		driver.findElement(By.xpath("//input[@name='res']")).click();

		
	}

	@Then("^The user validate New customer Text$")
	public void the_user_validate_New_customer_Text()  {
	 Assert.assertEquals("Add New Customer",driver.findElement(By.xpath("//p[@class='heading3']")).getText());
	}

	@Then("^The user close browser$")
	public void  the_user_close_browsere()  {
		driver.close();
	   
	    
	}



}
