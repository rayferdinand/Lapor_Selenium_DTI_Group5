# ./features/invalid-register.feature

Feature: Register
    As a user
    I can't register at website LAPOR

    Scenario: Register didn't succeed
        Given user website
        And user klik daftar
        And user don't fill they name
        And user isi username
        And user isi email
        And user isi phone number dengan string
        And user isi password
        And user isi password confirmation
        And user click setuju syarat
        When user klik signup
        Then user gagal terdaftar
        # Then user back to homepage
