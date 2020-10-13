import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { env } = Cypress;

Given('I am on the homepage', () => {
  cy.visit('https://aw1.automationintesting.online/#/')
  cy.url().should('eq','https://aw1.automationintesting.online/#/');
});

When('I enter my name as {string}', name => {
  cy.get('#name').type(name)
});

When('I enter my email as {string}', email => {
  cy.get('#email').type(email)
});

When('I enter my phone number as {string}', number => {
  cy.get('#phone').type(number)
});

When('I enter my subject as {string}', subject => {
  cy.get('#subject').type(subject)
});

When('I enter my message as {string}', message => {
  cy.get('#description').type(message)
});

When('I submit the form', () => {
  cy.get('#submitContact').click()
});

Then('I should get a success message', () => {
  cy.contains("Thanks for getting in touch").should('be.visible')
});

When('I fill in contact us form with following details:', dataTable => {
  var name = dataTable.rows()[0][0];
  var email = dataTable.rows()[0][1];
  var phone_number = dataTable.rows()[0][2];
  var subject = dataTable.rows()[0][3];
  var message = dataTable.rows()[0][4];

  cy.submit_contact_us_form(name,email,phone_number,subject,message);
});
