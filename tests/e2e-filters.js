import LoginPage from '../page-objects/Pages/LoginPage'
import App from '../page-objects/Pages/App'
import Navbar from '../page-objects/components/Navbar'
import Filter from '../page-objects/Pages/Filter'
import InsideNavbar from '../page-objects/components/InsideNavbar'

describe('e2e test- transaction filter', () =>{
    it('should login with valid credintials', () =>{
       
        App.openLoginPage()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
        
    })   
    
    it('Transaction filter should work', () =>{
        //$('#account_activity_tab').click()
        InsideNavbar.clickAccountActivity()
        // $('#tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active > a').waitForExist()
        // $('#tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active > a').click()
        InsideNavbar.clickFindTransaction()
        // $('#aa_type').waitForExist()
        // $('#aa_type').selectByAttribute('DEPOSIT')
        Filter.fillDescription('Sashi')
        //$('button[type="submit"]').click()
        Filter.submitFilter()
        //$('#filtered_transactions_for_account').waitForExist()
        Filter.resultTableIsVisible()
        const msg=Filter.resultMessage
        expect(msg).toHaveText('No results.')
    })
})