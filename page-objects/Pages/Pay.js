import Base from '../Pages/Base'

class Pay extends Base{

    get payeeInput(){
        return $('#sp_payee')
    }

    get accountInput(){
        return $('#sp_account')
    }

    get amountInput(){
        return $('#sp_amount')
    }

    get dateInput(){
        return $('#sp_date')
    }

    get descriptionInput(){
        return $('#sp_description')
    }
    
    get payButton(){
        return $('#pay_saved_payees')
    }

    get alertMessage(){
        return $('#alert_content')
    }

    fillPayDetails(payee, account, amount, date, description){
        this.payeeInput.waitForExist()
        this.payeeInput.selectByAttribute('value',payee)
        this.accountInput.selectByVisibleText(account)
        this.amountInput.setValue(amount)
        this.dateInput.setValue(date)
        this.descriptionInput.setValue(description)
    }

    clickPay(){
        this.payButton.click()
    }

}

export default new Pay()