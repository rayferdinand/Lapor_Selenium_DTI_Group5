module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillPwLogin: by.xpath("//input[@id='userSigninPassword']")
    },

    perform: function () {

        var selector = page.login.fillPwLogin.elements.fillPwLogin;
        return driver.findElement(selector).sendKeys(shared.id.pass);
    }
};