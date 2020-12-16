module.exports = {

    url: 'https://lapor.go.id',

    elements: {
        fillTitle: by.xpath("//body/section[@id='complaint-box']/div[1]/div[1]/div[1]/form[1]/div[3]/input[1]")
    },

    perform: function () {

        var selector = page.lapor.fillTitle.elements.fillTitle;
        return driver.findElement(selector).sendKeys("Test");
    }
};