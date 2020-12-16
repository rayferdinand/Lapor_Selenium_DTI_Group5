module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillEmptyLocation: by.xpath("//input[@id='location_id-selectized']")
    },

    perform: function () {

        var selector = page.lapor.fillEmptyLocation.elements.fillEmptyLocation;
        return driver.findElement(selector).sendKeys();
    }
};
