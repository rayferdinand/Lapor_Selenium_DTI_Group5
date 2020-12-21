module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        fillUsername: by.xpath("//input[@id='userSigninLogin']")
    },

    performFill: function () {

        var selector = page.login.fillUsername.elements.fillUsername;
        return driver.findElement(selector).sendKeys(shared.id.username);
    }
};
