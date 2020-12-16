module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        pilihKategori: by.xpath("//span[contains(text(),'Pilih Kategori Laporan Anda')]")
    },

    perform: function () {

        var selector = page.lapor.pilihKategori.elements.pilihKategori;
        return driver.findElement(selector).sendKeys("Lainnya");
    }
};