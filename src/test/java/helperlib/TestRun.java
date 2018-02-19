package helperlib;


import java.io.File;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;


@CucumberOptions(
			features="Feature",
			glue={"stepDef"},
			tags={"@Smoke_Scenario"},
			plugin={"html:target/cucumber-html-report","json:target/cucumber.json","pretty:target/cucumber-pretty.txt","junit:target/cucumber-results.xml","com.cucumber.listener.ExtentCucumberFormatter:"},
			monochrome = true
		)
public class TestRun extends AbstractTestNGCucumberTests {

	
	
	@BeforeClass(alwaysRun= true)
	public void setup(){
		System.out.println("Running SetUp");
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
	    extentProperties.setReportPath("target/cucumber-reports/report.html");
		System.setProperty("webdriver.chrome.driver","./src/test/resources/chromedriver.exe");
	}
	
	@BeforeMethod(alwaysRun = true)
	public void beforeTestScenario(){
		GenericLib lib = new GenericLib();
		boolean status = lib.isAlive();
		if(!status){
			InitObj.driver= new ChromeDriver();
			System.out.println("launching chrome");
			InitObj.driver.manage().window().maximize();
			InitObj.driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		}
	}
	
	@AfterMethod(alwaysRun = true)
	public void afterTestScenario(){
		InitObj.driver.close();

	}
	
	@AfterClass(alwaysRun=true)
	public void teardown() throws InterruptedException{
		Reporter.loadXMLConfig(new File("./Config/extent_config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 8");
		InitObj.driver = null;
		
	}

}
