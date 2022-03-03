Feature: I add articles

Scenario: I check required fields while adding an article
 Given I post the token by API
 And I get all my articles by API
 And I delete all my articles by API 
 And I login with email "test1403@test.com" and password "test" on the log in page
 And I click on add a new article on the dashboard page
 When I click on publish article button on the new article page
 Then I should see information about title is a required field on the new article page
 And I should see information about description is a required field on the new article page
 And I should see information about body is a required field on the new article page
 And I should see information about tag list is a required field on the new article page

Scenario: I add an article
 Given I post the token by API
 And I get all my articles by API
 And I delete all my articles by API 
 And I login with email "test1403@test.com" and password "test" on the log in page
 When I click on add a new article on the dashboard page
 And I fill article fields on the new article page
 And I click on publish article button on the new article page
 Then I should see the title of the article displayed
 And I should see the description of the article displayed
 And I should see the body of the article displayed
 When I click on home button on the dashboard page
 And I click on global feed on the dashboard page
 Then I should see a preview of the article displayed on the dashboard page


Scenario: I add some articles
 Given I post the token by API
 And I get all my articles by API
 And I delete all my articles by API 
 And I post a number of 11 articles by API
 And I login with email "test1403@test.com" and password "test" on the log in page
 When I click on global feed on the dashboard page
 Then I should see a number of 11 articles displayed on the dashboard page

