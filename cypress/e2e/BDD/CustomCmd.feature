Feature: Ecommerce Site - Loing examples
    Scenario:  Login with Valid Credentials
        Given Visit Orange HRM sites & login with Custom command

    Scenario Outline: Login with multiple users iwth Valid Credentials
        Given Visit Practice Automation Site login with "<Username>" and "<Password>" & Dashboard should be visible
        Examples:
            | Username                      | Password    |
            | sonalinimbalkar2001@gmail.com | #Sonali2024 |
            | aarti@gmail.com               | #Aarti2003  |
            | disha@gmail.com               | #Disha2009  |


