module.exports = function () { 
    this.Given(/^user browse page lapor$/, function () {
        helpers.loadPage(shared.pages.laporidLoginPage)
    });

    this.Given(/^user click login button$/, function () {
        driver.then(function () {
            return page.login.buttonMasuk.performClick()
        })
    });

    this.Given(/^user fill username  field$/, function () {
        driver.then(function () {
            return page.login.fillUsername.performFill()
        })
    });

    this.Given(/^user fill password field with wrong data$/, function () {
        driver.then(function () {
            return page.login.fillWrongPassword.performFill()
        })
    });

    this.When(/^user click login$/, function () {
        driver.then(function () {
            return page.login.buttonMasuk2.performClick()
        })
    });

    this.Then(/^user has failed to enter the web page$/, function () {
        helpers.getFirstElementContainingText('nav[role="navigation"] ul li a', 'error flash-message fade in');
    });
}