module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fillWrongPassword: by.xpath("//input[@id='userSigninPassword']")
    },

    performFill: function () {

        var selector = page.fillWrongPassword.elements.fillWrongPassword;
        return driver.findElement(selector).sendKeys(shared.id.wrongpassword);
    }
};
