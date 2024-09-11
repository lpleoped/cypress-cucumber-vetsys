const { first } = require("lodash");

class ClientPage {
    elements = {
        clientsMenuOption: () => cy.contains('li', 'Clientes'),
        title: () =>  cy.get('h1')
    }

    navigateTo(section){
        this.elements.clientsMenuOption().click();
        this.elements.title().should('contain', section);
    }    
}

module.exports = new ClientPage();