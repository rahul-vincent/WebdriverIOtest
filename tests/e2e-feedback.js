import App from '../page-objects/Pages/App'
import Feedback from '../page-objects/Pages/Feedback'
describe('E2E- feedback', () =>{
    it('should load fb form', () =>{
        App.openFeedbackPage()
        Feedback.formIsVisible()

    })

    it('should clear fb form', () =>{
        Feedback.fillForm('name','email@email.com','subject','some smessage')
        Feedback.clickClearButton()
        

    })

    it('should submit the form', ()=>{
        Feedback.fillForm('sasshi','sahshi@sahi.com','subject 1jbkjhbc', 'some mesagge againb')
        Feedback.clickSubmitButton()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})