import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
const { env } = Cypress;

When('I click the book room button', () => {
    cy.get('button').contains('Book this room').click();
});

When('I submit the booking form', () => {
    cy.get('button').contains('Book').click();
});

When('I enter the following booking details:',dataTable => {
    var firstname = dataTable.rows()[0][0];
    var lastname = dataTable.rows()[0][1];
    var email = dataTable.rows()[0][2];
    var phone_number = dataTable.rows()[0][3];  
    cy.submit_booking_form(firstname,lastname,email,phone_number);
});

When('I select check in date of {string} and check out date of {string}', (dateFrom, dateTo) => {
    var dayFrom = dateFrom.substring(0,2);
    var monthFrom = dateFrom.substring(3,5);
    var dayTo = dateTo.substring(0,2);
    var monthTo = dateTo.substring(3,5);    

    //drag from dateFrom to dateTo    
    // cy.get('div').contains(dayFrom).trigger("dragstart", "left")
    // cy.get('div').contains(dayTo).trigger("dragleave")

    cy.get('#root > div > div > div:nth-child(4) > div > div:nth-child(2) > div.col-sm-6 > div > div.rbc-month-view > div:nth-child(5) > div.rbc-row-content > div:nth-child(1) > div:nth-child(1)').trigger("mousedown", {which:1, position:"center"});
    cy.get('#root > div > div > div:nth-child(4) > div > div:nth-child(2) > div.col-sm-6 > div > div.rbc-month-view > div:nth-child(5) > div.rbc-row-content > div:nth-child(1) > div:nth-child(2)').trigger("mousemove","center").trigger("mouseup",{which:1,position:"center"});

    //cy.get('div').contains(dayFrom).drag(cy.get('div').contains(dayTo),{position: 'top',force:true})

    // cy.get('div').contains(dayFrom).trigger("mousedown", "left").trigger('mousemove',{clientX: 1000,clientY:0}).trigger('mouseup');

    // cy.get('#root > div > div > div:nth-child(4) > div > div:nth-child(2) > div.col-sm-6 > div > div.rbc-month-view > div:nth-child(5) > div.rbc-row-content > div:nth-child(1) > div:nth-child(1)')
    // .dragTo('#root > div > div > div:nth-child(4) > div > div:nth-child(2) > div.col-sm-6 > div > div.rbc-month-view > div:nth-child(5) > div.rbc-row-content > div:nth-child(1) > div:nth-child(2)');
});

Then('I should get a successful booking confirmation', () => {
    cy.get('h3').contains('Booking Successful!').should('exist');
});

Then('the booking form should appear', () => {
    cy.get('div[class="rbc-calendar"]').should('exist');
});

// When I click the book room button
//     Then the booking form should appear
//     When I enter the following details
//         | firstname | lastname | email | phone_number | date |
//         | Joe       | Bloggs   | Joe@email.com | 07999999999 | 31/10 |
//     And I submit the form
//     Then I should get a successful booking confirmation


