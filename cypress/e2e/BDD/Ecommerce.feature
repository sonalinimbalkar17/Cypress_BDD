Feature: Ecommerce Site-GREEN CARD
    @focus
    Scenario: E-Commerce Product Delivery
        Given Open E-Commerce Site
        When  Search product which is start from ca
        And Add to Cart Cashews
        When Place order and select country
        Then Validate the Thank you message
#specifice test run command
# npx cypress run --env TAGS="@focus" --headed --browser chrome