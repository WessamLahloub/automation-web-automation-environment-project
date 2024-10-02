Feature: Bayt Task

  Scenario: User Creates a new account as a Job seeker
    Given user navigate to talentera register page
    When user fill all required fields
    Then Assert success message

    Scenario: User Sign in with valid cridintials
    Given user navigate to login page
    When user enters valid cridintials
    Then user should get logged in