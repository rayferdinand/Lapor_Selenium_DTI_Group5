module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        buttonMasuk: by.xpath("/html[1]/body[1]/header[1]/div[2]/div[2]/ul[2]/li[1]/a[1]")
    },

    performClick: function () {

        var selector = page.buttonMasuk.elements.buttonMasuk;
        return driver.findElement(selector).click();
    }
};
