package com.cucumber.runner;


import java.io.File;
import java.util.concurrent.TimeUnit;


import org.junit.runner.RunWith;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;
import com.github.mkolisnyk.cucumber.runner.ExtendedParallelCucumber;
//import cucumber.api.junit.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;

import com.cucumber.listener.ExtentProperties;
import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import helperlib.GenericLib;
import helperlib.InitObj;

//@RunWith(Cucumber.class)
/*@RunWith(ExtendedParallelCucumber.class)
@ExtendedCucumberOptions(
        threadsCount = 2,
		jsonReport = "build/cucumber.json",
		jsonUsageReport = "build/cucumber-usage.json",
		outputFolder = "build/",
		detailedReport = true,
		detailedAggregatedReport = true,
		overviewReport = true,
		toPDF = true
		)*/
@CucumberOptions(
			features="Feature",
			glue={"stepDef"},
			tags={"@Smoke_Scenario"},
			plugin={"html:target/cucumber-html-report",
					"json:target/cucumber.json",
					"pretty:target/cucumber-pretty.txt",
					"junit:target/cucumber-results.xml",
					"com.cucumber.listener.ExtentCucumberFormatter:"},
			monochrome = false,
			dryRun = false,
		    strict = true
		)
public class TestRunner extends AbstractTestNGCucumberTests {

	@BeforeSuite(alwaysRun = true)
	public void intialSetup(){
		System.out.println("Running before suite");
		ExtentProperties extentProperties = ExtentProperties.INSTANCE;
	    extentProperties.setReportPath("target/cucumber-reports/report_chrome.html");
	}
	
	
	@BeforeClass(alwaysRun= true)
	public void setup(){
		System.out.println("Running SetUp");
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
		InitObj.driver = null;
		
	}
	
	@AfterSuite(alwaysRun = true)
	public void endSetup(){
		Reporter.loadXMLConfig(new File("./Config/extent_config.xml"));
		Reporter.setSystemInfo("user", System.getProperty("user.name"));
		Reporter.setSystemInfo("os", "Windows 8");
	}

}
