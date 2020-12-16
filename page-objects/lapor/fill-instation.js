module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillInstation: by.xpath("//input[@id='select_institution_id-selectized']")
    },

    perform: function () {

        var selector = page.lapor.fillInstation.elements.fillInstation;
        return driver.findElement(selector).sendKeys("Pemerintah Provinsi DKI Jakarta");
    }
};
