import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const loginPage = require('../../../page_objects/LoginPage');

// Step 1: El usuario navega a la página de login
When('the user navigates to the login page', () => {
  loginPage.visit();  // Llamada al método visit() del Page Object
});

// Step 2: El usuario introduce credenciales válidas
When('the user enters valid credentials', () => {
  loginPage.fillUsername('');  // Rellenar con el nombre de usuario válido
  loginPage.fillPassword('');  // Rellenar con la contraseña válida
});

// Step 3: El usuario hace clic en el botón de login
When('the user clicks the login button', () => {
  loginPage.submit();  // Llamada al método submit() del Page Object
});

// Step 4: El usuario debería ser redirigido a la página de productos
Then('the user should be redirected to the Products Page', () => {
  cy.url().should('include', '/inventory.html');  // Verificar que la URL incluye la página de productos
});