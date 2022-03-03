import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import ArticleDetailPage from '../page_objects/ArticleDetailPage';

const articleDetailPage = new ArticleDetailPage()

Then("I should see the title of the article displayed", () => {
    articleDetailPage.getTitle().should('be.visible')
    articleDetailPage.getTitle().should('have.text',"TitleText")
});

And("I should see the description of the article displayed", () => {
    articleDetailPage.getDescription().should('be.visible')
    articleDetailPage.getDescription().should('have.text',"DescriptionText")
});

And("I should see the body of the article displayed", () => {
    articleDetailPage.getBody().should('be.visible')
    articleDetailPage.getBody().should('have.text',"BodyText")
});