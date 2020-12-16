module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillBlankName: by.xpath("//input[@id='registerName']")
    },

    perform: function () {

        var selector = page.register.fillBlankName.elements.fillBlankName;
        return driver.findElement(selector).sendKeys();
    }
};