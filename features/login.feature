Feature: Login

Scenario Outline: User tries to login without entering username
  Given User is located on the main page of saucedemo website
  When User clicks the "Login" button
  Then User should see "<message>" error message

  Examples:
    | username | password | message                             |
    |          |          | Epic sadface: Username is required  |

Scenario: User logs in successfully
  Given User is located on the main page of saucedemo website
  When User logs in with valid credentials and click on the Login button
  Then User should be redirected to the inventory page
