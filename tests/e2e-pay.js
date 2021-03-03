import App from '../page-objects/Pages/App'
import LoginPage from '../page-objects/Pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import Pay from '../page-objects/Pages/Pay'

describe('e2e test- pay', () =>{
    it('should login with valid credintials', () =>{
        App.openLoginPage()
        LoginPage.Login('username','password')
        Navbar.insideNavbarIsVisible()
        
    })
    
    it('should make payment', () =>{
        InsideNavbar.clickpaybills()
        // const selectpayee=$('#sp_payee')
        // selectpayee.waitForExist()
        // selectpayee.selectByAttribute('value','bofa')
        // const selectacc= $('#sp_account')
        // selectacc.waitForExist()
        // selectacc.selectByVisibleText('Checking')
        // const amount=$('#sp_amount')
        // amount.waitForExist()
        // amount.setValue('10000')
        // const dateval=$('#sp_date')
        // dateval.waitForExist()
        // dateval.setValue('2021-02-09')
        // $('#sp_description').setValue('test dcescription')
        // $('#pay_saved_payees').click()
        // const msg=$('#alert_content')
        Pay.fillPayDetails('bofa','Checking','1000','2021-02-09','test description')
        Pay.clickPay()
        const msg=Pay.alertMessage
        expect(msg).toHaveText('The payment was successfully submitted.')
    })
})