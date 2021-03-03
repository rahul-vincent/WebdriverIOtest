import App from '../page-objects/Pages/App'
import LoginPage from '../page-objects/Pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import Exchange from '../page-objects/Pages/Exchange'
import { EXCLUSIVE_SERVICES } from '@wdio/cli/build/constants'

describe('e2e test- Currency Exchange', () =>{
    it('Should log into application', () =>{
        App.openLoginPage()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()

    })
    it('should make currency exchange', () =>{
        
        InsideNavbar.clickpaybills()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/bank/pay-bills.html')
        Exchange.fillCurrency('GBP','1000')
        Exchange.purchaseCash()
        Exchange.alertMessageIsVisible()
        const alertcont=Exchange.alertMessage
        expect(alertcont).toHaveText('Foreign currency cash was successfully purchased.')

    })
})