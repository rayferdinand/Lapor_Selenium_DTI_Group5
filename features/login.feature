# ./features/login.feature

Feature: Login
    As a user
    I want to be able to login

    Scenario: User success to login on the website
        Given user browse home page
        And user click masuk
        And user fill username field
        And user fill password field
        When user click masuk button
        Then user has successfully entered the web page