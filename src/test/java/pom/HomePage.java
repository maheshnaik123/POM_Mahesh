package pom;



import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import helperlib.InitObj;

public class HomePage {
	
	public HomePage(){
		PageFactory.initElements(InitObj.driver, this);
	}
	
	@FindBy(xpath="//span[text()='Sign In']")
	private WebElement signinLnk;
	@FindBy(id="searchval")
	private WebElement searchTxtFld;
	@FindBy(id="emailId")
	private WebElement emailTxtFld;
	@FindBy(id="continueBtn")
	private WebElement continueBtn;
	@FindBy(id="userPassword")
	private WebElement pwdTxtFld;
	@FindBy(id="loginCheck")
	private WebElement loginBtn;
	@FindBy (className="error-msg")
	private WebElement errMsg;
	@FindBy(id="error-response")
	private WebElement invalidMsg;
	@FindBy(id="loginLogoutResponse")
	private WebElement userSignedIn;
	
	
	public void verifyHomepage(){
		Assert.assertTrue(this.signinLnk.isDisplayed(), "You are on Homepage");
	}
	public void clickOnSignIn() throws InterruptedException{
		Thread.sleep(5000);
		this.signinLnk.click();
	}
	
	public void verifyLoginPopUp() throws InterruptedException{
		Thread.sleep(5000);
		Assert.assertTrue(this.emailTxtFld.isDisplayed(), "Loginpop is displayed");
		
	}
	
	public void enterUname(String uname){
		this.emailTxtFld.sendKeys(uname);
		this.continueBtn.click();
	}
	
	public void enterPwd(String pwd){
		Assert.assertTrue(this.pwdTxtFld.isDisplayed(), "Enter pwd");
		this.pwdTxtFld.sendKeys(pwd);
	}
	
	public void clickOnLogin(){
		this.loginBtn.click();
	}
	
	public void verifyErrorMsg(){
		System.out.println("invalid credentials");
	}
	
	
	public void searchProduct(){
		this.searchTxtFld.sendKeys("shirts");
		this.searchTxtFld.sendKeys(Keys.ENTER);
	}
	
	public void verifySuccesfulLoginIn(){
		Assert.assertTrue(this.userSignedIn.isDisplayed(), "Logged In successful");
	}
}
