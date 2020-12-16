module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillName: by.xpath("//input[@id='registerName']")
    },

    perform: function () {

        var selector = page.register.fillName.elements.fillName;
        return driver.findElement(selector).sendKeys("Dumba Dumbi");
    }
};