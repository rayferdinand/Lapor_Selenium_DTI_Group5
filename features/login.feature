# ./features/login.feature

Feature: Login
    As a user
    I want to be able to login to the website

    Scenario: Login on lapor gov id website
        Given user browse login page
        And user click masuk option
        And user fill email to login
        When user fill password to login
        Then user click sign
        # Then user back to homepage
