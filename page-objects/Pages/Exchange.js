import Base from '../Pages/Base'

class Exchange extends Base{
    get purchaseForCurrency(){
        return $('#tabs > ul > li:nth-child(3) > a')
    }

    get currency(){
        return $('#pc_currency')
    }

    get amount(){
        return $('#pc_amount')
    }

    get inDollars(){
        return $('#pc_inDollars_true')
    }

    get purchaseCashButton(){
        return $('#purchase_cash')
    }

    get alertMessage(){
        return $('#alert_content')
    }
    
    clickPurchaseForCurrency(){
        this.purchaseForCurrency.waitForExist()
        this.purchaseForCurrency.click()
    }

    fillCurrency(curvalue,amountvalue){
        this.currency.waitForExist()
        this.currency.selectByAttribute('value',curvalue)
        this.amount.setValue(amountvalue)
        this.inDollars.click()
    }

    purchaseCash(){
        this.purchaseCashButton.click()
    }

    alertMessageIsVisible(){
        this.alertMessage.waitForExist()
    }
}

export default new Exchange()