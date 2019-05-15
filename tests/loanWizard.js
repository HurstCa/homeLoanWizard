let loanWizard = {}

let testData = require('../pageData/loanWizardData')

module.exports = {
    beforeEach: browser => {
        loanWizard = browser.page.loanWizardObjects()
        loanWizard.navigate()
    },
    
    after: browser => browser.end(),
    
    'Test the form': browser => {
            loanWizard
                .formTest(testData)
    }
    
}