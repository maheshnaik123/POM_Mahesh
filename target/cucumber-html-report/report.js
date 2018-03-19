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
  "duration": 71452935,
  "status": "passed"
});
formatter.before({
  "duration": 998998,
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
  "duration": 19217455014,
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
  "duration": 5429398436,
  "status": "passed"
});
formatter.match({
  "location": "Login.login_pop_up_must_be_displayed()"
});
formatter.result({
  "duration": 5151533512,
  "status": "passed"
});
formatter.match({
  "location": "Login.enterUsername()"
});
formatter.result({
  "duration": 2794221964,
  "status": "passed"
});
formatter.match({
  "location": "Login.enterPassword()"
});
formatter.result({
  "duration": 1944793086,
  "status": "passed"
});
formatter.match({
  "location": "Login.click_on_Login()"
});
formatter.result({
  "duration": 248524854,
  "status": "passed"
});
formatter.match({
  "location": "Login.loginShouldBeSuccessful()"
});
formatter.result({
  "duration": 43242554,
  "status": "passed"
});
formatter.after({
  "duration": 10000497446,
  "status": "passed"
});
formatter.after({
  "duration": 9999747514,
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
  "duration": 300041,
  "status": "passed"
});
formatter.before({
  "duration": 213485,
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
  "duration": 14632476785,
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
  "duration": 53351584,
  "status": "passed"
});
formatter.match({
  "location": "Search.in_search_Enter_the_product_to_be_searched()"
});
formatter.result({
  "duration": 4940442659,
  "status": "passed"
});
formatter.match({
  "location": "Search.searched_product_list_page_must_be_displayed()"
});
formatter.result({
  "duration": 98873,
  "status": "passed"
});
formatter.after({
  "duration": 10000368123,
  "status": "passed"
});
formatter.after({
  "duration": 10000927493,
  "status": "passed"
});
});