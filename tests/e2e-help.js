import App from '../page-objects/Pages/App'
import LoginPage from '../page-objects/Pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import HelpPage from '../page-objects/Pages/HelpPage'

describe('e2e test- help section', () =>{
    it('should login with valid credintials', () =>{
        App.openLoginPage()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
        
    })

    it('should load help content', () =>{
        Navbar.clickSettings()
        Navbar.clickHelp()
        const title=HelpPage.title
        expect(title).toHaveText('How do I log into my account?')
        HelpPage.clickOnTransferFunds()
        expect(title).toHaveText('How do I transfer funds?')
        HelpPage.clickOnPayBills()
        expect(title).toHaveText('How do I pay bills?')
    })
})