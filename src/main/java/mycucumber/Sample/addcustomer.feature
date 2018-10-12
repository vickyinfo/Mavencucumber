
#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.

@tag
Feature: Add new customer
  
  Scenario Outline: Fill add customer details
    Given The User  lanunch   guru demo site
    And The User  Enter userName and password and cilck Newcustomer
    |user|mngr156940|
    |password|myjujEr|
    When Add new customer  "<coustomer>","<gender>","<dob>","<address>","<city>","<state>""<pin>","<phone>","<email>"and "<password>"
    Then The user validate New customer Text
    And The user close browser
  Examples:
  |coustomer|gender|dob|address|city|state|pin|phone|email|password|
  |vicky|male|29/12/91|abc street|chennai|tamilnadu|625513|9003612257|vicky@gamil|123@34|
  |siva|male|5/5/90|bbvv street|chennai|tamil nadu|625511|90036122445|siva@gmail|343@45|
  
  