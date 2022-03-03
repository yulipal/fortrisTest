export class LoginPage {

    email() {
        return cy.xpath("//input[@name='email']")
    }

    password() {
        return cy.xpath("//input[@name='password']")
    }

    submit() {
        return cy.xpath("//button[@type='submit']")
    }

    navigateToHome() {
        cy.visit(Cypress.env('baseFRONT'))
    }
}
export default LoginPage
