import Base from '../Pages/Base'

class InsideNavbar extends Base{
    get accountActivityTab(){
        return $('#account_activity_tab')
    }

    get findTransactionTab(){
        return $('#tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active > a')
    }

    get payBillsTab(){
        return $('#pay_bills_tab')
    }

    
    clickAccountActivity(){
        this.accountActivityTab.waitForExist()
        this.accountActivityTab.click()
    }
    
    clickFindTransaction(){
        this.findTransactionTab.waitForExist()
        this.findTransactionTab.click()
        this.findTransactionTab.click()
    }

    clickpaybills(){
        this.payBillsTab.waitForExist()
        this.payBillsTab.click()
    }


}

export default new InsideNavbar()