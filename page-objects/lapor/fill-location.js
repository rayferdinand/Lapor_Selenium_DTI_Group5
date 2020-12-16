module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillLocation: by.xpath("//input[@id='location_id-selectized']")
    },

    perform: function () {

        var selector = page.lapor.fillLocation.elements.fillLocation;
        return driver.findElement(selector).sendKeys("Kota : Jakarta Selatan");
    }
};
