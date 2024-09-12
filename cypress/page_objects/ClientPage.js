const { first } = require("lodash");


class ClientPage {
    elements = {
        clientsMenuOption: () => cy.contains('li', 'Clientes'),
        title: () => cy.get('h1'),
        btnAddClient: () => cy.get('button[aria-label="Agregar"]'),
        inputCi: () => cy.get('input[name="cedula"]'),
        inputName: () => cy.get('input[name="nombre"]'),
        inputLastName: () => cy.get('input[name="apellido"]'),
        inputEmail: () => cy.get('input[name="correo"]'),
        selectMemberType: () => cy.get('#mui-component-select-tipoSocio'),
        selectMemberTypeOption: (value) => cy.get(`li[data-value="${value}"]`),
        btnSave: () => cy.get('button[type="submit"]'),
        alertMessage: () => cy.get('[role="alert"]'),
        clientGridId: () => cy.get('div[data-field="PersonaCedula"][data-rowindex="0"]')
    }

    navigateTo(section) {
        this.elements.clientsMenuOption().click();
        this.elements.title().should('contain', section);
    }
    addClient() {
        this.elements.btnAddClient().click();
        this.elements.title().should('contain', 'Cliente nuevo');
    }
    fillClientForm(clientData) {
        this.elements.inputCi().type(clientData.ci);
        this.elements.inputName().type(clientData.name);
        this.elements.inputLastName().type(clientData.lastName);
        this.elements.inputEmail().type(clientData.email);
        this.elements.selectMemberType().click();
        this.elements.selectMemberTypeOption('2').click();
        this.elements.btnSave().should('contain', 'Guardar').contains('Guardar')
            .click();
        this.elements.alertMessage().should('be.visible')
            .and('contain.text', 'Cliente creado con éxito')
    }
    filterClientById(ci) {
       
    }
    verifyClientInGrid(ci) {
        this.elements.clientGridId().should('contain.text', ci);
    }
    selectClientById(ci) {
        this.elements.clientGridId().contains(ci).click();
    }
    addPet() {

    }
}

module.exports = new ClientPage();