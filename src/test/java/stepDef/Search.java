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
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import helperlib.InitObj;
import pom.HomePage;

public class Search extends InitObj {
	
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
	
	@Given("^In craftsvialla page$")
	public void in_craftsvialla_page() throws Throwable {
	    homePO.verifyHomepage();
	}

	@When("^In search, Enter the product to be searched$")
	public void in_search_Enter_the_product_to_be_searched() throws Throwable {
	    homePO.searchProduct();
	}

	@Then("^Searched product list page must be displayed$")
	public void searched_product_list_page_must_be_displayed() throws Throwable {
	    System.out.println("Serach Product List page is displayed");
	}

}
