module.exports = function () {

    this.Given(/^user browse home page$/, function () {
        helpers.loadPage(shared.pages.laporidLoginPage)
      });

    this.Given(/^user click masuk$/, function () {
        driver.then(function () {
            return page.buttonMasuk.performClick()
        })
    });

    this.Given(/^user fill username field$/, function () {
        driver.then(function () {
            return page.fillUsername.performFill()
        })
    });

    this.Given(/^user fill password field$/, function () {
        driver.then(function () {
            return page.fillPassword.performFill()
        })
    });

    this.When(/^user click masuk button$/, function () {
        driver.then(function () {
            return page.buttonMasuk2.performClick()
        })
    });

    this.Then(/^user has successfully entered the web page$/, function () {
        helpers.getFirstElementContainingText('nav[role="navigation"] ul li a', 'Dumy');
    });
}