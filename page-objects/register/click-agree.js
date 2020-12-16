module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        clickAgree: by.xpath("/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/div[1]/label[1]")
    },

    perform: function () {

        var selector = page.register.clickAgree.elements.clickAgree;
        return driver.findElement(selector).click();
    }
};