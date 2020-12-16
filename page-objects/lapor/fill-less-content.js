module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillLessContent: by.xpath("//textarea[@id='']")
    },

    perform: function () {

        var selector = page.lapor.fillLessContent.elements.fillLessContent;
        return driver.findElement(selector).sendKeys("a");
    }
};