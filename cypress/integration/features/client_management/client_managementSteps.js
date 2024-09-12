import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const LoginPage = require('../../../page_objects/LoginPage');
const ClientPage = require('../../../page_objects/ClientPage');
const PetPage = require('../../../page_objects/PetPage');
const utils = require('../../../utils/index');
let validCi;
let clientData;

// Import datatest before start
before(() => {
  cy.fixture('clientData').then((data) => {
    clientData = data;
  });
});

Given('the user is logged in with valid credentials', () => {
  LoginPage.validLogin();
});

When('the user navigates to the {string} section', (section) => {
  ClientPage.navigateTo(section);
});

When('the user clicks the button to add a new client', () => {
  validCi = utils.generateValidID();
  ClientPage.addClient();
});

When('the user fills the client form with valid data and a valid ID', () => {
  const clientInfo = {
    ci: validCi,
    name: clientData.name,
    lastName: clientData.lastName,
    email: clientData.email
  };
  ClientPage.fillClientForm(clientInfo);
});

Then('the user should see the new client in the grid', () => {
  ClientPage.verifyClientInGrid(validCi);
}) 

Given('the user has selected the client with ID', () => {
  
});

When('the user clicks the button to add a new pet', () => {

});

When('the user fills the pet form with valid data for the pet', () => {

});

Then('the user should see the new pet in the grid', () => {

});