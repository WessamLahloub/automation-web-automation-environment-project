Feature: Bayt Task

  Scenario: User Creates a new account as a Job seeker
    Given user navigate to talentera register page
    When user fill all required fields
    Then Assert success message

  Scenario: User Sign in with valid cridintials
    Given user navigate to login page
    When user enters valid cridintials
    Then user should get logged in

  Scenario: User Should be able to search for a job
    # Power of cocumber is shown here, i can use the same implementation for logging in 
    # instead of making a duplicate one each time
    Given user navigate to login page
    When user enters valid cridintials
    Given user naviagte to Search Jobs tab
    When user search for certain job
    Then only jobs containins the same name should appear

  Scenario: user logout
    Given user navigate to login page
    When user enters valid cridintials
    When user logout from account
    Then assert logout success



