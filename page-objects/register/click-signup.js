module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        clickSignup: by.xpath("//button[contains(text(),'Daftar')]")
    },

    perform: function () {

        var selector = page.register.clickSignup.elements.clickSignup;
        return driver.findElement(selector).click();
    }
};