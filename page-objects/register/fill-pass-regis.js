module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillPassRegis: by.xpath("//input[@id='registerPassword']")
    },

    perform: function () {

        var selector = page.register.fillPassRegis.elements.fillPassRegis;
        return driver.findElement(selector).sendKeys(shared.id.pass);
    }
};