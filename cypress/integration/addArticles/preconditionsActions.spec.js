import { Given, And } from 'cypress-cucumber-preprocessor/steps';
import Preconditions from './preconditionsService';

const preconditions = new Preconditions()

Given("I get all my articles by API", () => {
    preconditions.getAllArticles()
});

Given("I delete all my articles by API", () => {
    preconditions.deleteAllArticles()
});

And("I post the token by API", () => {
    cy.postToken()
});

And("I post a number of {int} articles by API", (number) => {
    for(let i=0; i<number; i++){
        preconditions.postArticle(i+1)
    }
});




