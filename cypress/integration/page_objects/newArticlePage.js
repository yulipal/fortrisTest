export class NewArticlePage{

    getButtonAddNewArticle() {
        return cy.xpath("//button[@type='submit']")
    }

    getButtonPublish(){
        return cy.xpath("//button[@type='submit']")
    }

    getInputTitle(){
        return cy.xpath("//input[@name='title']")
    }

    getAlertTitleRequired(){
        return cy.xpath("//fieldset//input[@name='title']/..//small[@class='form-text text-danger']")
    }

    getInputDescription(){
        return cy.xpath("//input[@name='description']")
    }

    getAlertDescriptionRequired(){
        return cy.xpath("//fieldset//input[@name='description']/..//small[@class='form-text text-danger']")
    }

    getInputBody(){
        return cy.xpath("//textarea[@name='body']")
    } 

    getAlertBodyRequired(){
        return cy.xpath("//fieldset//textarea[@name='body']/..//small[@class='form-text text-danger']")
    }

    getInputTagList(){
        return cy.xpath("//input[@name='tagList']")
    }

    getAlertTagListRequired(){
        return cy.xpath("//fieldset//input[@name='tagList']/..//small[@class='form-text text-danger']")
    }
}
export default NewArticlePage
