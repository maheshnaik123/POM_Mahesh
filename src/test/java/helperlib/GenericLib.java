package helperlib;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class GenericLib {

	public Boolean isAlive() {
	    try {
	        InitObj.driver.getCurrentUrl();//or driver.getTitle();
	        return true;
	    } catch (Exception ex) {
	        return false;
	    }
	}
	
	
	public void selectListBox(WebElement element,String value){
		Select select = new Select(element);
		select.selectByVisibleText(value);
	}
}
