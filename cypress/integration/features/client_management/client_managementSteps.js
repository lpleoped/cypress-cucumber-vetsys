import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const LoginPage = require('../../../page_objects/LoginPage');
const ClientPage = require('../../../page_objects/ClientPage');
const PetPage = require('../../../page_objects/PetPage');

Given('A user logged in with valid credentials', () => {
  LoginPage.validLogin();
});

When('A user navigate to the {string} section', (section) => {
  ClientPage.navigateTo(section);
});

When('A user add a new client with ID {string}', (cedula) => {

});

Then('A user should see the new client in the grid', () => {

});

When('A user add a new pet named {string}', (petName) => {

});

Then('A user should see the new pet in the grid', () => {

});