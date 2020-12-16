module.exports = function () {

    this.Given(/^user browse login page$/, function () {
        helpers.loadPage(shared.pages.laporidLoginPage)
      });

    this.Given(/^user click masuk option$/, function () {
        driver.then(function () {
            return page.login.clickMasuk.perform()
        })
    });

    this.Given(/^user fill email to login$/, function () {
        driver.then(function () {
            return page.login.fillEmailLogin.perform()
        })
    });

    this.Given(/^user fill password to login$/, function () {
        driver.then(function () {
            return page.login.fillPwLogin.perform()
        })
    });

    this.When(/^user click sign$/, function () {
        
    });

    this.Then(/^user back to homepage$/, function () {
        
    });
}