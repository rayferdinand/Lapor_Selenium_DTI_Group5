module.exports = function () {
    
    this.Given(/^user halaman lapor$/, function () {
        helpers.loadPage('https://www.lapor.go.id')
    });

    this.Given(/^user melakukan login$/, function () {
        
    });

    this.Given(/^user pilih tipe laporan$/, function () {
        driver.then(function () {
            return page.lapor.pilihTipe.perform()
        })
    });

    this.Given(/^user isi judul laporan$/, function () {
        driver.then(function () {
            return page.lapor.fillTitle.perform()
        })
    });

    this.Given(/^user isi sedikit terkait laporan$/, function () {
        driver.then(function () {
            return page.lapor.fillLessContent.perform()
        })
    });

    this.Given(/^user isi tanggal laporan$/, function () {
        driver.then(function () {
            return page.lapor.fillDate.perform()
        })
    });

    this.Given(/^user mengosongkan lokasi$/, function () {
        driver.then(function () {
            return page.lapor.fillEmptyLocation.perform()
        })
    });

    this.Given(/^user mengosongkan instansi$/, function () {
        driver.then(function () {
            return page.lapor.fillEmptyInstation.perform()
        })
    });

    this.Given(/^user mengosongkan kategori laporan$/, function () {
        // driver.then(function () {
        //     return page.lapor.pilihEmptyKategori.perform()
        // })
    });

    this.When(/^user klik lapor$/, function () {
        driver.then(function () {
            return page.lapor.clickLapor.perform()
        })
    });

    this.Then(/^user gagal melapor$/, function () {
        
    });
}