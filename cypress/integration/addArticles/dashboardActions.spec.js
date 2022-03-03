import { And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import DashboardPage from '../page_objects/dashboardPage';

const dashboardPage = new DashboardPage()

And("I click on home button on the dashboard page", () => {
    dashboardPage.getButtonHome().click()
});

And("I click on add a new article on the dashboard page", () => {
    dashboardPage.getButtonNewArticle().click()
});

When("I click on global feed on the dashboard page", () => {
    dashboardPage.getButtonGlobalFeed().click()
});

Then("I should see a number of {int} articles displayed on the dashboard page", (number) => {
    var cont = 0;

    dashboardPage.getPaginationList().each((button) => {
        cy.wrap(button).click()
        dashboardPage.getArticlePreviewList().then(elements => {
            cy.wrap(elements).should('be.visible')
            cont = elements.length
            cont++
            expect(cont).equal(number)
    });
    });
});

Then("I should see a preview of the article displayed on the dashboard page", (number) => {

    
        dashboardPage.getArticlePreviewList().then(elements => {
            cy.wrap(elements)
            .children(dashboardPage.getButtonLikeFromParentPreview())
            .should('be.visible')

            cy.wrap(elements)
            .children(dashboardPage.getArticleAuthorFromParentPreview())
            .should('be.visible')
    });
});




