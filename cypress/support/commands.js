import "cypress-localstorage-commands";

let LOCAL_STORAGE = {};

Cypress.Commands.add('saveLocalStorage', () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE.setItem(key, localStorage[key])
    });
});

Cypress.Commands.add('restoreLocalStorage', () => {
    Object.keys(LOCAL_STORAGE).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE[key])
    });
});

Cypress.Commands.add('postToken', () => {
    cy.request({
        method: 'POST',
        url: Cypress.env('baseAPI') + 'users/login',
        form: true, 
        body: {
            email: "test1403@test.com",
            password: "test"
        }
    })
        .its('body')
        .then(response => {
            const token = response.data.token
            cy.log("token generated:" + response.data.token)
            localStorage.setItem('token', token)
          });
});    



