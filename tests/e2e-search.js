import App from '../page-objects/Pages/App'
import Navbar from '../page-objects/components/Navbar'

describe('e2e search', () =>{
    it('should load homepage',() =>{
        App.openHomepage()
    })

    it('Should submit search box', () =>{
        Navbar.search('Bank')
        const resultsTitle=$('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })
})