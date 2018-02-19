package stepDef;


import java.io.File;

import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.testng.Reporter;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helperlib.ExcelGenerator;
import helperlib.InitObj;
import pom.HomePage;

public  class Login extends InitObj{
	
	
	@Before
	public void pageObjInstance(){
		homePO = new HomePage();
		
	}
	
	
	@After
	public void takeScreenshotOnFailure(Scenario scenario) throws InterruptedException{
		try{
			if(scenario.isFailed()){
				TakesScreenshot sc = (TakesScreenshot)InitObj.driver;
				File src = sc.getScreenshotAs(OutputType.FILE);
				File tar = new File("./Failure_Screenshots/"+scenario.getName()+".png");
				try{
					FileUtils.moveFile(src, tar);
				}
				catch(IOException io){
					Reporter.log("Test has been passed..Ooorah!",true);
				}
			}
		}
		catch (Exception e){
			e.getStackTrace();
		}
		Thread.sleep(10000);
	}
	
	@Given("^Navigate to Craftsvilla$")
	public void navigate_to_Craftsvilla() throws Throwable {
	    driver.get("http://www.craftsvilla.com");
	    
	}

	@Given("^Click on Signup link$")
	public void click_on_Signup_link() throws Throwable {
	   homePO.clickOnSignIn();
	}

	@Given("^Login pop up must be displayed$")
	public void login_pop_up_must_be_displayed() throws Throwable {
	   homePO.verifyLoginPopUp();
	}

	@When("^Enter \"([^\"]*)\"$")
	public void enter(String uname) throws Throwable {
		homePO.enterUname(uname);
	   
	}

	@When("^also enter \"([^\"]*)\"$")
	public void also_enter(String pwd) throws Throwable {
	    homePO.enterPwd(pwd);
	}


	@When("^Click on Login$")
	public void click_on_Login() throws Throwable {
	    homePO.clickOnLogin();
	}

	@Then("^Login should be unsuccessful$")
	public void login_should_be_unsuccessful() throws Throwable {
	    homePO.verifyErrorMsg();
	}

	@When("^Enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and(String arg1, String arg2) throws Throwable {
	   homePO.enterUname(arg1);
	   homePO.enterPwd(arg2);
	}

	@And("^Enter Username$")
	public void enterUsername() throws Throwable {
		ExcelGenerator data = new ExcelGenerator("./TestData/ScenarioTestData.xlsx");
		homePO.enterUname(data.getCellData("DataSheet", "UserName", 2));
	}

	@And("^Enter Password$")
	public void enterPassword() throws Throwable {
		ExcelGenerator data = new ExcelGenerator("./TestData/ScenarioTestData.xlsx");
		homePO.enterPwd(data.getCellData("DataSheet", "Password", 2));
	}
	@Then("^Login should be successful$")
	public void loginShouldBeSuccessful() throws Throwable {
		homePO.verifySuccesfulLoginIn();
	}
	


}
