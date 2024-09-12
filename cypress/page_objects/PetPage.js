const { first } = require("lodash");

class PetPage {
    elements = {
        title: () => cy.get('h1'),
        btnAddPet: () => cy.get('button[aria-label="Agregar"]'),
        inputName: () => cy.get('input[name="nombre"]'),
        inputDate: () => cy.get('input[name="fechaNacimiento"]'),
        selectSpecie: () => cy.get('#mui-component-select-especie'),
        selectSpecieOption: (option) => {
            return cy.get('ul[role="listbox"]') // Buscar el dropdown
                .contains('li', option) // Buscar el `li` que contenga el texto
                .click();
        },
        selectRaze: () => cy.get('#mui-component-select-raza'),
        selectRazeOption: (option) => {
            return cy.get('ul[role="listbox"]') // Buscar el dropdown
                .contains('li', option) // Buscar el `li` que contenga el texto
                .click();
        },
        btnSave: () => cy.get('button[type="submit"]'),
        alertMessage: () => cy.get('[role="alert"]'),
        petGridId: () => cy.get('div[data-field="nombre"][data-rowindex="0"]'),
    }

    addPet() {
        this.elements.title().should('contain', 'Mascotas de TestName');
        this.elements.btnAddPet().click();
    }
    fillPetForm(petData) {
        this.elements.title().should('contain', 'Mascota nueva');
        this.elements.inputName().type(petData.name);
        this.elements.inputDate().type(petData.date);
        this.elements.selectSpecie().click();
        this.elements.selectSpecieOption('Gato').click();
        this.elements.selectRaze().click();
        this.elements.selectRazeOption('Cruza');
        this.elements.btnSave().should('contain', 'Guardar').contains('Guardar')
            .click();
        this.elements.alertMessage().should('be.visible')
            .and('contain.text', 'La mascota se dió de alta correctamente')
    }
    verifyPetInGrid(petData, clientData) {
        this.elements.title('contain', 'Mascotas de ' + clientData.name);
        this.elements.petGridId().should('contain.text', petData.name);
    }

}

module.exports = new PetPage();