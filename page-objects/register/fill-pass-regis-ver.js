module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillPassRegisVer: by.xpath("//input[@id='password_confirmation']")
    },

    perform: function () {

        var selector = page.register.fillPassRegisVer.elements.fillPassRegisVer;
        return driver.findElement(selector).sendKeys(shared.id.pass);
    }
};