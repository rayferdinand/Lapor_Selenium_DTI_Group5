module.exports = {

    url: 'https://www.lapor.go.id/account/register',

    elements: {
        clickDaftar: by.xpath("/html[1]/body[1]/header[1]/div[2]/div[2]/div[1]/a[1]")
    },

    perform: function () {

        var selector = page.register.clickDaftar.elements.clickDaftar;
        return driver.findElement(selector).click();
    }
};