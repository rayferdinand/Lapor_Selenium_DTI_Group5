module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillDate: by.xpath("//input[@id='date_of_incident']")
    },

    perform: function () {

        var selector = page.lapor.fillDate.elements.fillDate;
        return driver.findElement(selector).sendKeys("12/12/2020");
    }
};
