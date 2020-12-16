module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillUsername: by.xpath("//input[@id='registerUsername']")
    },

    perform: function () {

        var selector = page.register.fillUsername.elements.fillUsername;
        return driver.findElement(selector).sendKeys("Ginny440");
    }
};