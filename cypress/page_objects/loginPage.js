const { first } = require("lodash");

class LoginPage {
    elements = {
        title: () => cy.get('h1'),
        user: () => cy.get('input[name="cedula"]'),
        pass: () => cy.get('input[name="password"]'),
        btnSubmit: () => cy.contains('button', 'Ingresar')
    }

    visit() {
        cy.visit('/login');
        this.elements.title().should('contain', 'Ingresar a Vetsys');
    }
    fillUsername(username) {
        this.elements.user().type(username);
    }
    fillPassword(password) {
        this.elements.pass().type(password);
    }
    submit() {
        this.elements.btnSubmit().click();
    }
    validLogin() {
        const user = Cypress.env('user');
        const pass = Cypress.env('pass');
        this.visit();
        this.fillUsername(user);
        this.fillPassword(pass);
        this.submit();
        this.elements.title().should('contain', 'CARACTERÍSTICAS');
    }
}

module.exports = new LoginPage();