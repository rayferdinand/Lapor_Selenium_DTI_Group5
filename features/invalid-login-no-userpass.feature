# ./features/login.feature

Feature: Invalid Login
    As a user
    I can't login at website LAPOR

    Scenario: User failed to login on the website
        Given user browse page lapor_2
        And user click login button_2
        And user not fill username  field
        And user not fill password field
        When user click login_2
        Then user has failed to enter the web page_2