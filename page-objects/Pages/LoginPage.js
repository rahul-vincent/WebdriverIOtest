import Base from '../Pages/Base'

class LoginPage extends Base{
    get loginform(){
        return $('#login_form')
    }

    get usernameInput(){
        return $('#user_login')
    }

    get passwordInput(){
        return $('#user_password')
    }

    get submitButton(){
        return $('input[type="submit"]')
    }

    get error(){
        return $('.alert-error')
    }


    formIsVisible(){
        this.loginform.waitForExist()
    }

    fillForm(username, password){
        this.usernameInput.setValue(username)
        this.passwordInput.setValue(password)
    }

    submitForm() {
        this.submitButton.click()
    }

    Login(username, password){
        this.formIsVisible()
        this.fillForm(username,password)
        this.submitForm()
    }

}


export default new LoginPage()