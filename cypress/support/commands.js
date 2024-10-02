
//Cypress Custom command to interact with DropDown elements

Cypress.Commands.add('SelectDropDownOption', (locator, option) => {
    cy.get(locator).click(); // Click the dropdown to open it
    cy.get('.select2-search__field').type(option).wait(500).type('{enter}'); // Type the option value and press Enter
  });
