module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        fillEmailRegis: by.xpath("//input[@id='registerEmail']")
    },

    perform: function () {

        var selector = page.register.fillEmailRegis.elements.fillEmailRegis;
        return driver.findElement(selector).sendKeys("");
    }
};