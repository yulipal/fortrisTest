export class ArticleDetailPage {

    getTitle() {
        return cy.xpath("//h1")
    }
    
    getDescription(){
        return cy.xpath("//div[@class='col-md-12']//div[1]")
    }
    
    getBody() {
        return cy.xpath("//div[@class='col-md-12']//div//p")
    }
    }
    export default ArticleDetailPage