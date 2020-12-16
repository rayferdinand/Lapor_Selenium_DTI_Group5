module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fillPassword: by.xpath("//input[@id='userSigninPassword']")
    },

    performFill: function () {

        var selector = page.fillPassword.elements.fillPassword;
        return driver.findElement(selector).sendKeys(shared.id.password);
    }
};
