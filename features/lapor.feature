# ./features/lapoe.feature

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
        When user pick laporan category
        Then user click lapor
        # Then user click sign
        # Then user back to homepage
