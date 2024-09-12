Feature: Client and Pet Management

   Scenario: Add a new client with valid ID
      Given the user is logged in with valid credentials
      When the user navigates to the "Clientes" section
      And the user clicks the button to add a new client
      And the user fills the client form with valid data and a valid ID
      Then the user should see the new client in the grid

   Scenario: Add a new pet to the client
      Given the user has selected the client with ID
      When the user clicks the button to add a new pet
      And the user fills the pet form with valid data for the pet
      Then the user should see the new pet in the grid