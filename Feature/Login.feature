@Login_Feature
Feature: Login Test

  Background: 
    Given Navigate to Craftsvilla
  @Regression_Scenario
  Scenario: Login with Invalid credentials
    And Click on Signup link
    And Login pop up must be displayed
    When Enter "email@gmail.com"
    And also enter "123"
    And Click on Login
    Then Login should be unsuccessful

  @Regression_Scenario
  Scenario Outline: Login with Invalid credentials
    And Click on Signup link
    And Login pop up must be displayed
    When Enter "<uname>" and "<pwd>"
    And Click on Login
    Then Login should be unsuccessful

    Examples: 
      | uname           | pwd      |
      | email@gmail.com | asdf1234 |
	
	@Smoke_Scenario
  Scenario: Login with valid credentials
    And Click on Signup link
    Then Login pop up must be displayed
    And Enter Username
    And Enter Password
    And Click on Login
    Then Login should be successful
