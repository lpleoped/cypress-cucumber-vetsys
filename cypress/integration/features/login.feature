Feature: Login

Scenario: Successful login with valid credentials
When the user navigates to the login page
And the user enters valid credentials
And the user clicks the login button
Then the user should be redirected to the Products Page