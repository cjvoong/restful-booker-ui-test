// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@4tw/cypress-drag-drop'

Cypress.Commands.add("submit_contact_us_form", (name, email, phone_number, subject, message) => {

    cy.log(name);
    cy.log(email);
    cy.log(phone_number);
    cy.log(subject);
    cy.log(message);

    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone_number);
    cy.get('#subject').type(subject);
    cy.get('#description').type(message);
});

Cypress.Commands.add("submit_booking_form", (firstname,lastname,email,phone_number) => {
    cy.get('input[name="firstname"]').type(firstname);
    cy.get('input[name="lastname"]').type(lastname);
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="phone"]').type(phone_number);    
});

Cypress.Commands.add("dragTo", { prevSubject: "element" }, (subject, targetEl) => {
    cy.wrap(subject).trigger("dragstart");
    cy.get(targetEl).trigger("drop");
  }
);