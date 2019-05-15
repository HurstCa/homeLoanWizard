var loanWizardCommands = {
    formTest: function(testData){
        testData.forEach(test => {
        this
            .navigate()
            .click('button')
            .waitForElementVisible('#loanTypes')
            .click(test.loanType)
            .click(test.propretyType)
            .click('button')
            .waitForElementVisible('input[name="city"]')
            .setValue('input[name="city"]', 'Lehi, UT')
            .click('button')
            .waitForElementVisible('button[value="Primary Home"]')
            .click(test.propertyUse)
            .waitForElementVisible('button[name="yesButton"]')
            .click('button[name="yesButton"]')
            .waitForElementVisible('button[name="noButton"]')
            .click('button[name="noButton"]')
            .waitForElementVisible('input[name="price"]')
            .setValue('input[name="price"]', test.price)
            .setValue('input[name="down"]', test.downPayment)
            .click('button')
            .waitForElementVisible('button[value="excellent"]')
            .click(test.creditRating)
            .waitForElementVisible('button[value="Has never been in bankruptcy"]')
            .click(test.creditHistory)
            .waitForElementVisible('#addressOne')
            .setValue('#addressOne', '341 S Main St')
            .setValue('#addressTwo', 'Ste 100')
            .setValue('#addressThree', 'Salt Lake City, UT 84111')
            .click('button')
            .waitForElementVisible('#first')
            .setValue('#first', 'AJ')
            .setValue('#last', 'Larson')
            .setValue('#email', 'aj@devmounta.in')
            .click('button')
            .waitForElementVisible('button[name="sendButton"]')
            .click('button[name="sendButton"]')
            .waitForElementVisible('.margin-btn')
            .useXpath()
        test.results.forEach(result => {
            this.verify.containsText('//p[2]', result)
        })    
        this
            .useCss()
            return this
    })
    }
}

module.exports = {
    url: 'http://localhost:3000',
    commands: [loanWizardCommands],
}