# fortrisTest

I am using Cucumber, so the tests are in the .feature file. Anyway, cypress runner shows it.

In this project I am using a page object model to keep in control and reuse element locators better. 

While looking for selectors I found a bug adding a new article: 'Enter tags' field is required but frontend is not alerting us. For this reason the first test will fail.

In order to run test faster I decided to run preconditions via API, for this reason we have created some commands that save into the local storage a token that will be used in other requests, as well as, a list of articles to delete.
