import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const LoginPage = require('../../../page_objects/LoginPage');
const ClientPage = require('../../../page_objects/ClientPage');
const PetPage = require('../../../page_objects/PetPage');

Given('A user logged in with valid credentials', () => {
  LoginPage.validLogin();
});

When('A user navigate to the {string} section', (section) => {
  /* if (section === 'Clientes') {
       ClientPage.goToClients();
   }*/
});

When('A user add a new client with ID {string}', (cedula) => {
  /*const clientData = { cedula, name: 'Juan Perez' };
  ClientPage.addClient(clientData);*/
});

Then('A user should see the new client in the grid', () => {
  //ClientPage.verifyClientInGrid('45012345');
});

When('A user add a new pet named {string}', (petName) => {
  /* const petData = { name: petName };
   PetPage.addPet(petData);*/
});

Then('A user should see the new pet in the grid', () => {
  //PetPage.verifyPetInGrid('Firulais');
});