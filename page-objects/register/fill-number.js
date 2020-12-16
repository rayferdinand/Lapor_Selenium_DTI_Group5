module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillNumber: by.xpath("//input[@id='registerPhone']")
    },

    perform: function () {

        var selector = page.register.fillNumber.elements.fillNumber;
        return driver.findElement(selector).sendKeys("1234567890");
    }
};