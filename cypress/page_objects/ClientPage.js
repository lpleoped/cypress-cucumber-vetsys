const { first } = require("lodash");

class ClientPage {
    elements = {
        clientsMenuOption: () => cy.contains('li', 'Clientes'),
        title: () =>  cy.get('h1')
    }

    navigateToClientsPage(){
        this.elements.clientsMenuOption().click();
        this.elements.title().should('contain', 'Clientes');
    }    
}

module.exports = new ClientPage();