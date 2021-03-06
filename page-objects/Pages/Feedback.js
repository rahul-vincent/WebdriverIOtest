import Base from '../Pages/Base'

class Feedback extends Base{
    get form(){
        return $('form')
    }

    get name(){
        return  $('#name')
    }

    get email(){
        return $('#email')
    }

    get subject(){
        return $('#subject')
    }

    get comment(){
        return $('#comment')
    }
    
    get clearButton(){
        return $('input[type="reset"]')
    }

    get submitButton(){
        return $('input[type="submit"]')
    }

    formIsVisible(){
        this.form.waitForExist()
    }

    fillForm(name, email, subject, comment){
        this.name.setValue(name)
        this.email.setValue(email)
        this.subject.setValue(subject)
        this.comment.setValue(comment)
    }

    clickClearButton(){
        this.clearButton.waitForExist()
        this.clearButton.click()
    }

    clickSubmitButton(){
        this.submitButton.waitForExist()
        this.submitButton.click()
    }

}

export default new Feedback()
