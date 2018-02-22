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
  "duration": 16061934,
  "status": "passed"
});
formatter.before({
  "duration": 730073,
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
  "duration": 70675203677,
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
  "duration": 5264095289,
  "status": "passed"
});
formatter.match({
  "location": "Login.login_pop_up_must_be_displayed()"
});
formatter.result({
  "duration": 5028693143,
  "status": "passed"
});
formatter.match({
  "location": "Login.enterUsername()"
});
formatter.result({
  "duration": 1791733008,
  "status": "passed"
});
formatter.match({
  "location": "Login.enterPassword()"
});
formatter.result({
  "duration": 2107951152,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login()"
});
formatter.result({
  "duration": 59600452,
  "status": "passed"
});
formatter.match({
  "location": "Login.loginShouldBeSuccessful()"
});
formatter.result({
  "duration": 48623023,
  "status": "passed"
});
formatter.after({
  "duration": 10000488539,
  "status": "passed"
});
formatter.after({
  "duration": 10000031133,
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
  "duration": 305508,
  "status": "passed"
});
formatter.before({
  "duration": 206295,
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
  "duration": 86262751805,
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
  "duration": 37890207,
  "status": "passed"
});
formatter.match({
  "location": "Search.in_search_Enter_the_product_to_be_searched()"
});
formatter.result({
  "duration": 10979671899,
  "status": "passed"
});
formatter.match({
  "location": "Search.searched_product_list_page_must_be_displayed()"
});
formatter.result({
  "duration": 74923,
  "status": "passed"
});
formatter.after({
  "duration": 9999945946,
  "status": "passed"
});
formatter.after({
  "duration": 9999804310,
  "status": "passed"
});
});