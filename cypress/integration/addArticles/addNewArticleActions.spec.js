import { And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import NewArticlePage from '../page_objects/newArticlePage';

const newArticlePage = new NewArticlePage()

When("I click on publish article button on the new article page", () => {
    newArticlePage.getButtonPublish().click()
});

Then("I should see information about title is a required field on the new article page", () => {
    newArticlePage.getAlertTitleRequired().should('be.visible')
});

And("I should see information about description is a required field on the new article page", () => {
    newArticlePage.getAlertDescriptionRequired().should('be.visible')
});

And("I should see information about body is a required field on the new article page", () => {
    newArticlePage.getAlertBodyRequired().should('be.visible')
});

And("I should see information about tag list is a required field on the new article page", () => {
    newArticlePage.getAlertTagListRequired().should('be.visible')
});

When("I fill article fields on the new article page", () => {
    newArticlePage.getInputTitle().type("TitleText")
    newArticlePage.getInputDescription().type("DescriptionText")
    newArticlePage.getInputBody().type("BodyText")
    newArticlePage.getInputTagList().type("TagListText")
});





