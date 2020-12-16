module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillContent: by.xpath("//textarea[@id='']")
    },

    perform: function () {

        var selector = page.lapor.fillContent.elements.fillContent;
        return driver.findElement(selector).sendKeys("Laporan ini dibuat hanya sebagai contoh dalam melakukan testing situs web");
    }
};