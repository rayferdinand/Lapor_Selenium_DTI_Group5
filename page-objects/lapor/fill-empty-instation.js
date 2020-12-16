module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillEmptyInstation: by.xpath("//input[@id='select_institution_id-selectized']")
    },

    perform: function () {

        var selector = page.lapor.fillEmptyInstation.elements.fillEmptyInstation;
        return driver.findElement(selector).sendKeys();
    }
};
