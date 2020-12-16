# ./features/register.feature

Feature: Register
    As a user
    I want to be able to register to the website

    Scenario: Register on lapor gov id website
        Given user homepage
        And user click daftar
        And user fill they full name
        And user fill username
        And user fill email
        And user fill phone number
        And user fill password
        And user fill password confirmation
        When user click agree
        Then user click signup
        # Then user back to homepage
