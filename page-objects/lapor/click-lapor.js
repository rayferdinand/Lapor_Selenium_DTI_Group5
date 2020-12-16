module.exports = {

    url: 'https://www.lapor.go.id/',

    elements: {
        clickLapor: by.xpath("/html[1]/body[1]/section[2]/div[1]/div[1]/div[1]/form[1]/div[10]/div[1]/div[2]/button[1]")
    },

    perform: function () {

        var selector = page.lapor.clickLapor.elements.clickLapor;
        return driver.findElement(selector).click();
    }
};