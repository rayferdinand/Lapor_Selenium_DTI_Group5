module.exports = function () {

    this.Given(/^user website$/, function () {
       helpers.loadPage(shared.pages.laporidLoginPage)
    });

    this.Given(/^user klik daftar$/, function () {
        driver.then(function () {
            return page.register.clickDaftar.perform()
        })
    });

    this.Given(/^user don't fill they name$/, function () {
        driver.then(function () {
            return page.register.fillBlankName.perform()
        })
    });

    this.Given(/^user isi username$/, function () {
        driver.then(function () {
            return page.register.fillUsername.perform()
        })
    });

    this.Given(/^user isi email$/, function () {
        driver.then(function () {
            return page.register.fillEmailRegis.perform()
        })
    });

    this.Given(/^user isi phone number dengan string$/, function () {
        driver.then(function () {
            return page.register.fillNumber.perform()
        })
    });

    this.Given(/^user isi password$/, function () {
        driver.then(function () {
            return page.register.fillPassRegis.perform()
        })
    });

    this.Given(/^user isi password confirmation$/, function () {
        driver.then(function () {
            return page.register.fillPassRegisVer.perform()
        })
    });

    this.Given(/^user click setuju syarat$/, function () {
        driver.then(function () {
            return page.register.clickAgree.perform();
        })
    });

    this.When(/^user klik signup$/, function () {
        driver.then(function () {
            return page.register.clickSignup.perform();
        })
    });

    this.Then(/^user gagal terdaftar$/, function () {
        
      });
}