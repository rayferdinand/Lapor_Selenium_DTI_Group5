# ./features/login.feature

Feature: Invalid Login
    As a user
    I can't login at website LAPOR

    Scenario: User failed to login on the website
        Given user browse page lapor
        And user click login button
        And user fill username  field
        And user fill password field with wrong data
        When user click login
        Then user has failed to enter the web page