module.exports = function () {

    this.Given(/^user homepage$/, function () {
       helpers.loadPage(shared.pages.laporidLoginPage)
    });

    this.Given(/^user click daftar$/, function () {
        driver.then(function () {
            return page.register.clickDaftar.perform()
        })
    });

    this.Given(/^user fill they full name$/, function () {
        driver.then(function () {
            return page.register.fillName.perform()
        })
    });

    this.Given(/^user fill username$/, function () {
        driver.then(function () {
            return page.register.fillUsername.perform()
        })
    });

    this.Given(/^user fill email$/, function () {
        driver.then(function () {
            return page.register.fillEmailRegis.perform()
        })
    });

    this.Given(/^user fill phone number$/, function () {
        driver.then(function () {
            return page.register.fillNumber.perform()
        })
    });

    this.Given(/^user fill password$/, function () {
        driver.then(function () {
            return page.register.fillPassRegis.perform()
        })
    });

    this.Given(/^user fill password confirmation$/, function () {
        driver.then(function () {
            return page.register.fillPassRegisVer.perform()
        })
    });

    this.When(/^user click agree$/, function () {
        driver.then(function () {
            return page.register.clickAgree.perform();
        })
    });

    this.Then(/^user click signup$/, function () {
        driver.then(function () {
            return page.register.clickSignup.perform();
        })
    });
}