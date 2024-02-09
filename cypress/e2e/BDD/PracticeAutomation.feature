Feature:  Ecommerce Site - Practice Automation Testing

    # Scenario: Login with valid Credentials
    #     Given Visit Practice Automation Testing Site
    #     When User log-in with username and password
    #         | username                      | password    |
    #         | sonalinimbalkar2001@gmail.com | #Sonali2024 |
    #     And  click on sing in button
    #     Then Dashboard should be visible


    # Scenario Outline: Login with multiple users with valid credentials
    #     Given  Visit Practice Automation Testing Site
    #     When User log-in with "<username>" and "<password>"
    #     And  click on sing in button
    #     Then Dashboard should be visible

    #     Examples:
    #         | username                      | password    |
    #         | sonalinimbalkar2001@gmail.com | #Sonali2024 |
    #         | aarti@gmail.com               | #Aarti2003  |
    #         | disha@gmail.com               | #Disha2009  |


    Scenario Outline: Login with multiple users with valid credentials
        Given  Visit Practice Automation Testing Site
        When User log-in with "<username>" and "<password>"
        And  click on sing in button
        Then  should be visible for "<Credentials>" credentials

        Examples:
            | username                      | password    | Credentials |
            | sonalinimbalkar2001@gmail.com | #Sonali2024 | Valid       |
            | aarti@gmail.com               | #Aarti2003  | Valid       |
            | disha@gmail.com               | #Disha      | Invalid     |

