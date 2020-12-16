module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        buttonMasuk2: by.xpath("/html[1]/body[1]/form[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[5]/button[1]")
    },

    performClick: function () {

        var selector = page.buttonMasuk2.elements.buttonMasuk2;
        return driver.findElement(selector).click();
    }
};
