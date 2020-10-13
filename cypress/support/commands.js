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

Cypress.Commands.add("submit_contact_us_form", (name, email, phone_number, subject, message) => {

    console.log(name);
    console.log(email);
    console.log(phone_number);
    console.log(subject);
    console.log(message);

    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#phone').type(phone_number);
    cy.get('#subject').type(subject);
    cy.get('#description').type(message);
});