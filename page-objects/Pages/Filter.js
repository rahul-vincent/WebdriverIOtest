import Base from '../Pages/Base'

class Filter extends Base{
    get descriptionInput(){
        return $('#aa_description')
    }

    get submitButton(){
        return $('button[type="submit"]')
    }

    get resultTable(){
        return $('#filtered_transactions_for_account')
    }

    get resultMessage(){
        return $('#well')
    }

    fillDescription(text){
        this.descriptionInput.waitForExist()
        this.descriptionInput.setValue(text)
    }

    submitFilter(){
        this.submitButton.click()
    }

    resultTableIsVisible(){
        this.resultTable.waitForExist()
    }
}

export default new Filter()