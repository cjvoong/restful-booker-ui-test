Feature: book a room

  @advanced
  @book_room
  Scenario: Click book room, and fill in form and submit
    Given I am on the homepage
    When I click the book room button
    Then the booking form should appear
    When I select check in date of "18/10" and check out date of "19/10"
    And I enter the following booking details:
        | firstname | lastname | email | phone_number |
        | Joe       | Bloggs   | Joe@email.com | 07999999999 |
    And I submit the booking form
    Then I should get a successful booking confirmation