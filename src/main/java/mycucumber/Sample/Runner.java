package mycucumber.Sample;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\Balaji\\work space\\Sample\\src\\main\\java\\mycucumber\\Sample\\addcustomer.feature",
                 glue= {"mycucumber.Sample"},plugin={"html:test-output"})


public class Runner {

	
}
