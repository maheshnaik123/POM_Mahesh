$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login_Feature"
    }
  ]
});
formatter.before({
  "duration": 13296923,
  "status": "passed"
});
formatter.before({
  "duration": 687306,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Navigate to Craftsvilla",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.navigate_to_Craftsvilla()"
});
formatter.result({
  "duration": 5069496583,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login with valid credentials",
  "description": "",
  "id": "login-test;login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@Smoke_Scenario"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Click on Signup link",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Login pop up must be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Enter Username",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter Password",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.click_on_Signup_link()"
});
formatter.result({
  "duration": 5105307993,
  "status": "passed"
});
formatter.match({
  "location": "Login.login_pop_up_must_be_displayed()"
});
formatter.result({
  "duration": 5057774066,
  "status": "passed"
});
formatter.match({
  "location": "Login.enterUsername()"
});
formatter.result({
  "duration": 596284580,
  "status": "passed"
});
formatter.match({
  "location": "Login.enterPassword()"
});
formatter.result({
  "duration": 525249512,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login()"
});
formatter.result({
  "duration": 64673810,
  "status": "passed"
});
formatter.match({
  "location": "Login.loginShouldBeSuccessful()"
});
formatter.result({
  "duration": 29075880,
  "status": "passed"
});
formatter.after({
  "duration": 10000061238,
  "status": "passed"
});
formatter.after({
  "duration": 10000404378,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search Test",
  "description": "Description: To check the functionality of search",
  "id": "search-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search_Feature"
    }
  ]
});
formatter.before({
  "duration": 831678,
  "status": "passed"
});
formatter.before({
  "duration": 813546,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "Navigate to Craftsvilla",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.navigate_to_Craftsvilla()"
});
formatter.result({
  "duration": 7861293866,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Search for a product",
  "description": "",
  "id": "search-test;search-for-a-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@Smoke_Scenario"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "In craftsvialla page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "In search, Enter the product to be searched",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Searched product list page must be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "Search.in_craftsvialla_page()"
});
formatter.result({
  "duration": 35569193,
  "status": "passed"
});
formatter.match({
  "location": "Search.in_search_Enter_the_product_to_be_searched()"
});
formatter.result({
  "duration": 3633124040,
  "status": "passed"
});
formatter.match({
  "location": "Search.searched_product_list_page_must_be_displayed()"
});
formatter.result({
  "duration": 78002,
  "status": "passed"
});
formatter.after({
  "duration": 9999643175,
  "status": "passed"
});
formatter.after({
  "duration": 9999479645,
  "status": "passed"
});
});