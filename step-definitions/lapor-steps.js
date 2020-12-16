module.exports = function () {
    
    this.Given(/^user browse homepage$/, function () {
        helpers.loadPage('https://www.lapor.go.id')
    });

    this.Given(/^user login$/, function () {
        
    });

    this.Given(/^user choose laporan type$/, function () {
        driver.then(function () {
            return page.lapor.pilihTipe.perform()
        })
    });

    this.Given(/^user fill laporan title$/, function () {
        driver.then(function () {
            return page.lapor.fillTitle.perform()
        })
    });

    this.Given(/^user fill laporan content$/, function () {
        driver.then(function () {
            return page.lapor.fillContent.perform()
        })
    });

    this.Given(/^user fill laporan date$/, function () {
        driver.then(function () {
            return page.lapor.fillDate.perform()
        })
    });

    this.Given(/^user fill laporan location$/, function () {
        driver.then(function () {
            return page.lapor.fillLocation.perform()
        })
    });

    this.Given(/^user fill instation$/, function () {
        driver.then(function () {
            return page.lapor.fillInstation.perform()
        })
    });

    this.Given(/^user pick laporan category$/, function () {
        // driver.then(function () {
        //     return page.lapor.pilihKategori.perform()
        // })
    });

    this.When(/^user click lapor$/, function () {
        driver.then(function () {
            return page.lapor.clickLapor.perform()
        })
    });

    this.Then(/^user back to home$/, function () {
        
    });
}