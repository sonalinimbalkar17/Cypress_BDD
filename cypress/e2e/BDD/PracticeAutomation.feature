Feature:  Ecommerce Site - Practice Automation Testing

    Scenario: Login with valid Credentials
        Given Visit Practice Automation Testing Site
        When User log-in with username and password
            | username                      | password    |
            | sonalinimbalkar2001@gmail.com | #Sonali2024 |
        And  click on sing in button
        Then Dashboard should be visible
