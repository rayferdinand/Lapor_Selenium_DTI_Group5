module.exports = function () { 
    this.Given(/^user browse page lapor_2$/, function () {
        helpers.loadPage(shared.pages.laporidLoginPage)
    });

    this.Given(/^user click login button_2$/, function () {
        driver.then(function () {
            return page.login.buttonMasuk.performClick()
        })
    });

    this.Given(/^user not fill username  field$/, function () {
        driver.then(function () {
            return page.login.fillUsernameEmpty.performFill()
        })
    });

    this.Given(/^user not fill password field$/, function () {
        driver.then(function () {
            return page.login.fillPasswordEmpty.performFill()
        })
    });

    this.When(/^user click login_2$/, function () {
        driver.then(function () {
            return page.login.buttonMasuk2.performClick()
        })
    });

    this.Then(/^user has failed to enter the web page_2$/, function () {
        helpers.getFirstElementContainingText('nav[role="navigation"] ul li a', 'error flash-message fade in');
    });
}