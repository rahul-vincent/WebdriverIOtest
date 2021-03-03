import LoginPage from '../page-objects/Pages/LoginPage'
import App from '../page-objects/Pages/App'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests -login/logout flow', () =>{
    it('should not login with invalid credintials', () =>{
        App.openLoginPage()
        LoginPage.Login('username','passowrd')
        Navbar.insideNavbarIsVisible()
        const message=LoginPage.error
        expect(message).toHaveText('Login and/or password are wrong.')

    })

    it('should login with valid credintials', () =>{
        App.openLoginPage()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username','password')
        LoginPage.submitForm()
        Navbar.insideNavbarIsVisible()
        
    })

    it('should logout from app', () =>{
        App.logout()
        Navbar.signInButtonIsVisible()
    })
})