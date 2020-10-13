Feature: contact us
	Create an automated test that completes the contact us form on the homepage, submits it, and asserts that the form was completed successfully.

  @beginner
  @contact_us
  Scenario: Fill contact us and submit commands version
    Given I am on the homepage
    When I fill in contact us form with following details:
      | name | email | phone_number | subject | message |
      | Joe Bloggs | Joe@email.com | 07999999999 | Room enquiry | Hi I would like to enquire about availability of the presidential suite! | 
    And I submit the form
    Then I should get a success message

