# ./features/lapor.feature

Feature: Lapor
    As a user
    I want to be able to lapor on the website

    Scenario: Lapor on lapor gov id website
        Given user browse homepage
        And user login
        And user choose laporan type
        And user fill laporan title
        And user fill laporan content
        And user fill laporan date
        And user fill laporan location
        And user fill instation
        And user pick laporan category
        When user click lapor
        Then user back to home
        # Then user back to homepage
