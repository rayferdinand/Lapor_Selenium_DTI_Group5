module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        pilihEmptyKategori: by.xpath("//span[contains(text(),'Pilih Kategori Laporan Anda')]")
    },

    perform: function () {

        var selector = page.lapor.pilihEmptyKategori.elements.pilihEmptyKategori;
        return driver.findElement(selector).sendKeys("Lainnya");
    }
};