@Search_Feature
Feature: Search Test
  Description: To check the functionality of search

  Background: 
    Given Navigate to Craftsvilla

  @Smoke_Scenario
  Scenario: Search for a product
    Given In craftsvialla page
    When In search, Enter the product to be searched
    Then Searched product list page must be displayed
