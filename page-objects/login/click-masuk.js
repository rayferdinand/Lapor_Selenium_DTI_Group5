module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        clickMasuk: by.xpath("/html[1]/body[1]/header[1]/div[2]/div[2]/ul[2]/li[1]/a[1]")
    },

    perform: function () {

        var selector = page.login.clickMasuk.elements.clickMasuk;
        return driver.findElement(selector).click();
    }
}