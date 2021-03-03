import Base from '../Pages/Base'

class Navbar extends Base{
    get signInButton(){
        return $('#signin_button')
    }

    get insideNavbar(){
        return $('.nav-tabs')
    }

    get settingsIcon(){
        return $('.icon-cog')
    }

    get helpButton(){
        return $('#help_link')
    }

    get searchBox(){
        return $('#searchTerm')
    }
    clickSignIn(){
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    insideNavbarIsVisible(){
        this.insideNavbar.waitForExist()
    }

    signInButtonIsVisible(){
        this.signInButton.waitForExist()
    }

    clickSettings(){
        this.settingsIcon.waitForExist()
        this.settingsIcon.click()
    }

    clickHelp(){
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

    search(text){
        this.searchBox.waitForExist()
        this.searchBox.setValue(text)
        browser.keys('Enter')
    }

}

export default new Navbar()