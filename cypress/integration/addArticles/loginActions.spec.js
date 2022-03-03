import { When } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../page_objects/LoginPage';
import DashboardPage from '../page_objects/dashboardPage';

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

When("I login with email {string} and password {string} on the log in page", (email, password) => {
    loginPage.navigateToHome()
    dashboardPage.getButtonSignIn().click()
    loginPage.email().clear()
    loginPage.email().type(email)
    loginPage.password().clear()
    loginPage.password().type(password)
    loginPage.submit().click()
    dashboardPage.getButtonCloseSuccessfulLoginAlert().click()
});

