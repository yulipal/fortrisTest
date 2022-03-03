export class DashboardPage {
   
getButtonHome() {
    return cy.xpath("//li//a[@href='#/']")
}

getButtonNewArticle() {
    return cy.xpath("//a[@href='#/editor']")
}

getButtonCloseSuccessfulLoginAlert(){
    return cy.xpath("//div[contains(@class,'close-button')]")
}

getButtonSignIn() {
    return cy.xpath("//a[@href='#/login']")
}

getButtonGlobalFeed() {
    return cy.xpath("//ul[contains(@class, 'outline-active')]//li[2]//a")
}

getPaginationList(){
    return cy.xpath("//ul[@class='pagination']//li//a[not(@aria-label[contains(., 'Previous' ) or contains(.,'Next')])]")
}

getArticlePreviewList() {
    return cy.xpath("//div[@class='article-preview']")
}

getButtonLikeFromParentPreview() {
    return cy.xpath("//button[@class='btn btn-sm pull-xs-right btn-outline-primary']")
}

getArticleAuthorFromParentPreview() {
    return cy.xpath("//div[@class='info']")
}

}
export default DashboardPage

