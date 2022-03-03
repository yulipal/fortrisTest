function getToken(){
  const token = window.localStorage.getItem('token')
  return token
}

function getSlugList(){
  const slugs = window.localStorage.getItem('slugList')
  cy.log("slugs : " + slugs)
  return slugs
}

export class Preconditions {
  
  postArticle(number) {
      let token = getToken()
      const authorization = 'bearer ' + token;

      const options = {
        method: 'POST',
        url: Cypress.env('baseAPI') + `articles`,
        headers: {
          authorization,
        },
        body: {
          title: number + "Title",
          description: number + "Description",
          body: number + "Body",
          tagList: [
            "Test"
          ]
        }
      };
      cy.request(options)
      .its('status')
      .should('eq', 201);
  }
    

  getAllArticles() {

    let token = getToken()
    const authorization = 'bearer ' + token;    
    const options = {
      method: 'GET',
      url: Cypress.env('baseAPI') + `articles?limit=50&offset=0`,
      headers: {
        authorization,
      }};

    cy.request(options)
      .its('body')
      .then(response => {
        const data = response.listData;

        let result = []

        data.forEach((item) => {
          result.push(JSON.stringify(item.slug))
        });
        cy.log('Articles: ' + result)
        localStorage.setItem('slugList', result);    
      });
}

deleteArticles(article, token) {
   const authorization = 'bearer ' + token;
   const options = {
     method: 'DELETE',
     url: Cypress.env('baseAPI') + `articles/` + article ,
     headers: {
       authorization,
     }};
   
   cy.request(options)
     .its('status')
     .should('eq', 200);
 }

deleteAllArticles() {
    let token = getToken()
    let articles = getSlugList().slice(0, -1).slice(1).split('","');
    if(articles.length >= 2) {
    articles.forEach(article => this.deleteArticles(article, token));
    cy.log("Articles deleted: " +  articles)
    }
}

}
  export default Preconditions
